"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Search, PenSquare, BookOpen } from "lucide-react";
import { gsap } from "gsap";
import ThemeButton from "@/app/components/ThemeButton";

const links = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "-100%" },
        {
          x: 0,
          duration: 0.45,
          ease: "power3.out",
        },
      );
    }
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-7 w-7 text-violet-600" />
            <span className="text-2xl font-extrabold">
              Blog<span className="text-violet-600">-D</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-medium text-zinc-700 transition hover:text-violet-600 dark:text-zinc-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900">
              <Search size={20} />
            </button>

            <ThemeButton />

            <Link
              href="/write"
              className="hidden items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700 md:flex"
            >
              <PenSquare size={18} />
              Write
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 lg:hidden"
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div
            ref={sidebarRef}
            className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-white p-6 dark:bg-zinc-950"
          >
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="text-violet-600" />
                <span className="text-xl font-bold">
                  Blog<span className="text-violet-600">-D</span>
                </span>
              </div>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <ul className="space-y-6">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-zinc-700 hover:text-violet-600 dark:text-zinc-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
