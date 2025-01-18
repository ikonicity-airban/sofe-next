"use client";;
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLinks({
  links,
}: {
  links: {
    name: string;
    href: string;
    icon: React.ReactNode;
  }[];
}) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const isPath = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "h-[40px] min-w-[6rem] hidden md:flex grow items-center justify-center rounded-md link-underline laptop:min-w-[7rem]",
              {
                "text-light font-medium after:w-[55%] after:translate-x-3": isPath,
                "text-[#9999]": !isPath,
              }
            )}
          >
            <p
              className={clsx(" text-inherit text-sm transition-all duration-300", {
                "text-base": isPath,
              })}
            >
              {link.name}
            </p>
            <div className="w-4">
              {isPath || <ArrowUpRightIcon className="w-4 right-3 hidden link-icon transition-all duration-300 laptop:right-0" />}
            </div>
          </Link>
        );
      })}
    </>
    
  );
}
