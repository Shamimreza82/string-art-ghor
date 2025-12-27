"use client";

import React from "react";
import clsx from "clsx";

interface StringArtButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "light" | "dark"; // theme mode
}

export default function StringArtButton({
  children,
  onClick,
  className = "",
  variant = "light",
}: StringArtButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative overflow-hidden px-8 py-3 font-semibold rounded-md cursor-pointer",
        "transition-all duration-500 border-l-4 border-r-4 tracking-wide",
        // ====== MODE STYLES ======
        variant === "light" &&
          "bg-white text-gray-800 border-purple-600 border-r-orange-500",
        variant === "dark" &&
          "bg-slate-900 text-gray-100 border-purple-400 border-r-orange-300",
        // ====== STRING ART FEELINGS ======
        "hover:tracking-widest hover:rotate-[0.5deg]",
        "shadow-[0_4px_10px_rgba(0,0,0,0.10)]",
        className
      )}
    >
      {/* Top string line */}
      <span
        className="absolute top-[6px] left-0 w-full h-[2px] 
        bg-gradient-to-r from-purple-600 via-orange-500 to-green-500
        transition-all duration-500 hover:top-[-6px]"
      ></span>

      {/* Bottom string line */}
      <span
        className="absolute bottom-[6px] left-0 w-full h-[2px]
        bg-gradient-to-r from-purple-600 via-orange-500 to-green-500
        transition-all duration-500 hover:bottom-[-6px]"
      ></span>

      {children}
    </button>
  );
}
