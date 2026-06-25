"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import ThemeButton from "@/app/components/ThemeButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        {
          x: "-100%",
        },
        {
          x: "0%",
          duration: 0.4,
          ease: "power3.out",
        },
      );
    }
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Blog-D
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link
                href="/"
                className="text-gray-700 transition hover:text-blue-500 dark:text-gray-200"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-gray-700 transition hover:text-blue-500 dark:text-gray-200"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-gray-700 transition hover:text-blue-500 dark:text-gray-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeButton />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-900 dark:text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <div
            ref={menuRef}
            className="fixed left-0 top-0 z-50 h-screen w-[280px] bg-white p-6 shadow-xl dark:bg-gray-900"
          >
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Menu
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-900 dark:text-white"
              >
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-700 hover:text-blue-500 dark:text-gray-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-700 hover:text-blue-500 dark:text-gray-200"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-700 hover:text-blue-500 dark:text-gray-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
