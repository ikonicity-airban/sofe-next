"use client";

import { useEffect, useRef, useState } from "react";

import { generateRandomColor } from "@/lib/helper";

const SHAPES = ["square", "triangle"];
const COLOR_DIGIT = "ABCDEF1234567890";

export default function Confetti() {
  const [isConfettiActive, setConfettiActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isConfettiActive) {
      generateConfetti();
    }
  }, [isConfettiActive]);

  const handleClick = () => {
    setConfettiActive(true);
    // Reset the confetti after a short delay
    setTimeout(() => {
      setConfettiActive(false);
    }, 4000);
  };

  const generateConfetti = () => {
    const container = containerRef.current;
    if (container) {
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        const positionX = Math.random() * window.innerWidth;
        const positionY = Math.random() * window.innerHeight - 100;
        const rotation = Math.random() * 360;
        const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Set confetti styles
        confetti.style.left = `${positionX}px`;
        confetti.style.top = `${positionY}px`;
        confetti.style.transform = `rotate(${rotation}deg)`;
        confetti.className =
          "confetti " + SHAPES[Math.floor(Math.random() * 3)];
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = generateRandomColor(COLOR_DIGIT); // Append confetti to the container
        container.appendChild(confetti);
        // Remove confetti element after animation duration (4 seconds)
        setTimeout(() => {
          container.removeChild(confetti);
        }, 4000);
      }
    }
  };
  return (
    <div className="bottom-4">
      <button className="font-bold text-xl" onClick={handleClick}>
        Click for Confetti
      </button>
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999]"
        ref={containerRef}
        id="confetti-container"
      ></div>
    </div>
  );
}
