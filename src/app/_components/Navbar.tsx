"use client";
import React from "react";
import Link from "next/link";

// type Props = {

// }

const Navbar = () => {
  const isBrowser = () => typeof window !== "undefined";

  const navElements: [string, string][] = [
    ["About", "/about"],
    ["Learn", "/learn"],
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Contact", "/contact"],
  ];

  const scrollToTop = () => {
    if (!isBrowser()) {
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="w-full sticky top-0 left-0 z-50 backdrop-filter backdrop-blur-lg bg-white/50 dark:bg-black/50 border-b border-slate-200/20 h-16">
      <div className="flex justify-between items-center w-full h-full max-w-6xl mx-auto px-4">
        <Link href="/" className="text-xl font-bold" onClick={scrollToTop}>
          JW
        </Link>
        <ul className="flex items-center gap-x-12 font-medium">
          {navElements.map((s, i) => (
            <li key={i} className="px-4 py-2">
              <Link
                className="relative hover:brightness-110 dark:hover:text-slate-300 transition-all duration-200
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] 
                after:bottom-0 after:left-0 after:bg-slate-500 dark:after:bg-slate-300 
                after:transition-transform after:duration-300
                hover:after:scale-x-100"
                href={s[1]}
                onClick={scrollToTop}
              >
                {s[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
