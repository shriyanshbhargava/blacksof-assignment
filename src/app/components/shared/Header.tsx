"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [headerClass, setHeaderClass] = useState("translate-y-0");

  useEffect(() => {
    const handleScrollBehavior = () => {
      const currentScrollPosition = window.scrollY;
      currentScrollPosition > 200
        ? currentScrollPosition > 0
          ? setHeaderClass("-translate-y-[80px]")
          : setHeaderClass("translate-y-0 shadow-lg")
        : setHeaderClass("translate-y-0");
    };

    window.addEventListener("scroll", handleScrollBehavior);
    return () => {
      window.removeEventListener("scroll", handleScrollBehavior);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 bg-white z-50 transition-transform duration-300
        2xl:py-4 xlg:py-1 py-3
        ${headerClass}
      `}
    >
      <div className="max-w-7xl mx-auto h-full xlg:py-3 py-1 mt-[2px] flex gap-4 items-center justify-between px-4">
        <Link href="/">
          <Image
            className="h-full !cursor-pointer"
            src="/logo.svg"
            width={150}
            height={30}
            alt="Logo of Supreme Group"
            loading="eager"
          />
        </Link>

        {/* Navigation Links and Actions */}
        <div className="flex items-center gap-6">
          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
          >
            Contact Us
          </Link>
          {/* LinkedIn Icon */}
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>

          {/* Language Selector */}
          <div className="flex items-center gap-1 text-gray-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
            </svg>
            <span className="text-sm font-medium">ENG</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
