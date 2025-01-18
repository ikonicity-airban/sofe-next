"use client";

import {
  Bars3BottomLeftIcon,
  BriefcaseIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import NavLinks from "./nav-links";
import React from "react";
import SofeLogo from "../ui/sofe-logo";
import Tabs from "./tabs";
import clsx from "clsx";
import { Button } from "../ui/button";

const links = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "About Us", href: "/about", icon: <InformationCircleIcon /> },
  { name: "Services", href: "/services", icon: <BriefcaseIcon /> },
  {
    name: "Contact Us",
    href: "/contact",
    icon: <PhoneIcon />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState(false);

  // Show button when page is scrolled up to 400px
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  React.useEffect(() => {
    closeModal();
  }, []);
  const toggleMenu = () => {
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
    setIsOpen(!isOpen);
  };

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <header className="z-[999] md:block top-0 w-full bg-[url('/herobg.png')] bg-fixed bg-cover p-1">
      <div className="max-w-screen-desktop mx-auto">
        <div
          className="w-full h-[90vh] p-3 fixed top-[4rem] backdrop-filter md:hidden z-50 select-none transition-transform origin-custom duration-200"
          onClick={closeModal}
          style={{ transform: isOpen ? "scale(1)" : "scale(0)" }}
        >
          <Tabs isOpen={isOpen} links={links} />
        </div>

        <div
          className={clsx(
            "flex justify-between p-4 items-center transition-all duration-200 flex-wrap shadow-sm shadow-[whitesmoke])]"
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-center w-8 h-8 font-light md:hidden mr-4"
            )}
            onClick={toggleMenu}
          >
            {isOpen ? <XMarkIcon /> : <Bars3BottomLeftIcon />}
          </div>
          <div className="flex-start md:flex-[0.5] laptop:flex-[0.5] order-1 flex-[0.8]">
            <Link href="/" className="max-w-fit">
              <SofeLogo />
            </Link>
          </div>
          <nav className="hidden tablet:flex order-2 tablet:flex-[0.5]">
            <NavLinks links={links} />
          </nav>
          <Link
            href="/login"
            className="flex justify-center flex-[0.2] md:flex-[0.2] order-2 desktop:justify-end"
          >
            <Button variant={"outline"} className="text-white h-10">
              Join us
            </Button>
          </Link>
        </div>
        {/* <div className="min-w-full order-2 md:hidden py-6">
        <Tabs links={links} />
      </div> */}
      </div>
    </header>
  );
}
