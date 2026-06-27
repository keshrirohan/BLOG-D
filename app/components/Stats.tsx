"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Users,
  BookOpen,
  Tags,
  Eye,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    title: "Active Readers",
    description: "Developers visit Blog-D every month.",
  },
  {
    icon: BookOpen,
    value: "500+",
    title: "Published Articles",
    description: "Tutorials, guides and industry insights.",
  },
  {
    icon: Tags,
    value: "30+",
    title: "Categories",
    description: "Everything from AI to Web Development.",
  },
  {
    icon: Eye,
    value: "1M+",
    title: "Monthly Views",
    description: "Trusted by developers worldwide.",
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
            Community
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-zinc-900 dark:text-white">
            Trusted by Thousands of Developers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Join a growing community of developers learning, sharing,
            and building better software every day.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="stat-card group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-900/30">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-4xl font-black text-zinc-900 dark:text-white">
                  {stat.value}
                </h3>

                <h4 className="mt-2 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  {stat.title}
                </h4>

                <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}