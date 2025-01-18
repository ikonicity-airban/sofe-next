"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";

import * as Icon from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/", icon: <Icon.HomeIcon /> },
  { name: "About", href: "/about", icon: <Icon.InformationCircleIcon /> },
  { name: "Services", href: "/services", icon: <Icon.BriefcaseIcon /> },
  {
    name: "Contact",
    href: "/contact",
    icon: <Icon.PhoneIcon />,
  },
  {
    name: "Login",
    href: "/login",
    icon: <Icon.ArrowRightEndOnRectangleIcon />,
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsOpen(true);

      // Debounce logic: Reset timer for hiding the navbar
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setIsOpen(false), 3000);
    };

    // Throttle logic: Ensure handleScroll runs every 200ms during active scrolling
    let lastCall = 0;
    const throttleScroll = () => {
      const now = Date.now();
      if (now - lastCall >= 100) {
        lastCall = now;
        handleScroll();
      }
    };

    window.addEventListener("scroll", throttleScroll);

    return () => {
      window.removeEventListener("scroll", throttleScroll);
      clearTimeout(hideTimeout);
    };
  }, []);

  // Debounced click handler for NavLinks
  const handleNavLinkClick = (() => {
    let hideTimeout: ReturnType<typeof setTimeout>;

    return () => {
      setIsOpen(true);
      // Debounce logic for hiding the navbar
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setIsOpen(false), 5000); // 5 seconds after click
    };
  })();

  return (
    <nav
      className={cn(
        "z-[999] fixed md:hidden bottom-0 w-full p-4 duration-200 ease-in-out",
        isOpen
          ? "translate-y-0 duration-200"
          : "translate-y-[150%] duration-300"
      )}
    >
      <ul className="flex rounded-xl items-center gap-4 backdrop-filter min-w-full p-2 justify-evenly text-white">
        {links.map((link) => (
          <NavLink
            key={link.name}
            link={link}
            isOpen={isOpen}
            onClick={handleNavLinkClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

function NavLink({
  link,
  onClick,
  isOpen,
}: {
  link: {
    name: string;
    href: string;
    icon: React.ReactNode;
  };
  isOpen: boolean;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const isPath = pathname === link.href;
  return (
    <li className="relative" onClick={onClick}>
      <Link
        href={link.href}
        className={cn("flex flex-1 items-center justify-center", {
          "text-light text-lg bg-gradient-to-br from-primary to-red-900 rounded-full p-2.5 size-12 border-background border-4 -translate-y-[80%] ease-in-out transition-transform":
            isPath,
          "text-[#9999] duration-500 size-6": !isPath,
          "-translate-y-[7.75rem] duration-500 delay-500": !isOpen && isPath,
        })}
      >
        {link.icon}
      </Link>
      {isPath && (
        <span className="absolute min-w-max fade-in-100 duration-300 delay-300 top-[30%] -inset-x-0 text-center text-xs">
          {link.name}
        </span>
      )}
    </li>
  );
}
