"use client";

import React, { useEffect, useState } from "react";

import { ArrowUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to 400px
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className="p-4 ring-4 grid place-items-center py-6 rounded-full fixed bottom-4 right-4 z-50 backdrop-filter"
      onClick={() => scrollTo(0, 0)}
    >
      <ArrowUpIcon className="text-lime-50 h-4 w-4" />
    </div>
  );
};

export default ScrollToTop
