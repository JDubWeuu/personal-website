"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// type Props = {

// }

const Navbar = () => {
  const isBrowser = () => typeof window !== "undefined";
  const [isMobile, setIsMobile] = useState(false);

  const navElements: [string, string][] = [
    ["About", "/about"],
    ["Learn", "/learn"],
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Contact", "/contact"],
  ];

  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <div className="flex justify-between items-center w-full h-full md:max-w-6xl sm:max-w-3xl mx-auto px-4">
        <Link
          href="/"
          className="text-xl font-bold flex items-center"
          onClick={scrollToTop}
        >
          {isMobile ? (
            <>
              <Image
                src="/assets/jason_logo.png"
                alt="Jason logo"
                width={33}
                height={33}
                className="transition-transform duration-300 hover:scale-105"
                priority
              />
            </>
          ) : (
            <Image
              src="/assets/jason_logo.png"
              alt="Jason logo"
              width={55}
              height={55}
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          )}
        </Link>
        <ul className="flex items-center md:gap-x-12 sm:gap-x-6 font-medium">
          {navElements.map((s, i) => (
            <li key={i} className="px-4 py-2 flex space-x-2 items-center">
              <Link
                className="relative hover:brightness-110 dark:hover:text-slate-300 transition-all duration-200
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] 
                after:bottom-0 after:left-0 after:bg-slate-500 dark:after:bg-slate-300 
                after:transition-transform after:duration-300
                hover:after:scale-x-100 md:text-base text-sm"
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
