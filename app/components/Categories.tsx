"use client";

import Link from "next/link";
import {
  Brain,
  Code2,
  Globe,
  Database,
  Cpu,
  ShieldCheck,
  Smartphone,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const categories = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
    articles: 42,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    articles: 85,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Programming",
    icon: Code2,
    articles: 96,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Databases",
    icon: Database,
    articles: 34,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "DevOps",
    icon: Cpu,
    articles: 26,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    articles: 31,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    articles: 24,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Career",
    icon: Briefcase,
    articles: 18,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".category-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
            Categories
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
            Browse by Topic
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Find high-quality articles across your favorite technologies.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={`/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="category-card group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  {category.articles} Articles
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-violet-600 transition group-hover:translate-x-1">
                  Explore
                  <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}