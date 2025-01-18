"use client";

import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {
  links: {
    name: string;
    href: string;
    icon: React.ReactNode;
  }[];
  isOpen: boolean;
};

export default function Tabs({ links, isOpen }: Props) {
  const pathname = usePathname();

  return (
    <ul className="text-sm flex flex-col font-medium text-center justify-between px-4 -z-10">
      <div className="">
        {links.map((link, idx) => {
          const isPath = pathname === link.href;
          return (
            <li
              className="me-2 flex items-center gap-4"
              key={idx}
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                transition: "transform ease-in-out",
                transitionDuration: isOpen ? "800ms" : "0ms",
                transitionDelay: isOpen ? idx * 200 + "ms" : "0ms",
              }}
            >
              <Link
                href={link.href}
                className={clsx(
                  "inline-flex items-center text-muted justify-end p-2 rounded-t-md m-1 group transition-colors duration-150"
                )}
              >
                <div
                  className="h-7 w-7 text-muted"
                  style={{
                    color: isPath ? "white" : "gray",
                  }}
                >
                  {link.icon}
                </div>
                <p
                  className="px-4"
                  style={{
                    color: isPath ? "white" : "gray",
                  }}
                >
                  {link.name}
                </p>
              </Link>
            </li>
          );
        })}
      </div>
      <li></li>
    </ul>
  );
}
