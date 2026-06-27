"use client";

import Link from "next/link";
import { BookOpen, Mail, ArrowUpRight, Heart } from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Blogs", href: "/blogs" },
  { title: "Categories", href: "/categories" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const categories = [
  "Artificial Intelligence",
  "Web Development",
  "Next.js",
  "React",
  "JavaScript",
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-violet-600" />

              <span className="text-3xl font-black">
                Blog<span className="text-violet-600">-D</span>
              </span>
            </Link>

            <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
              Blog-D is a modern platform where developers can explore
              tutorials, AI trends, programming tips, and real-world software
              development experiences.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="#"
                className="rounded-xl border border-zinc-200 p-3 transition hover:bg-violet-600 hover:text-white dark:border-zinc-700"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-zinc-200 p-3 transition hover:bg-violet-600 hover:text-white dark:border-zinc-700"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-zinc-200 p-3 transition hover:bg-violet-600 hover:text-white dark:border-zinc-700"
              >
                <FaXTwitter size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-zinc-200 p-3 transition hover:bg-violet-600 hover:text-white dark:border-zinc-700"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-zinc-600 transition hover:text-violet-600 dark:text-zinc-400"
                  >
                    {item.title}
                    <ArrowUpRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Categories
            </h3>

            <ul className="mt-6 space-y-4">
              {categories.map((item) => (
                <li key={item}>
                  <Link
                    href={`/category/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-zinc-600 transition hover:text-violet-600 dark:text-zinc-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Contact
            </h3>

            <div className="mt-6 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <Mail className="mb-4 text-violet-600" size={30} />

              <h4 className="font-semibold">Email</h4>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                hello@blog-d.com
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row">
          <p className="text-center text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Blog-D. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            Made with
            <Heart className="fill-red-500 text-red-500" size={18} />
            for Developers
          </p>
        </div>
      </div>
    </footer>
  );
}
