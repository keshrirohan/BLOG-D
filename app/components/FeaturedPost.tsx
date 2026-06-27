"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function FeaturedPost() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".featured-content", {
        x: -60,
        opacity: 0,
        duration: 0.9,
      });

      gsap.from(".featured-image", {
        x: 60,
        opacity: 0,
        duration: 0.9,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-zinc-50 py-24 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
            ⭐ Featured Article
          </span>

          <h2 className="mt-5 text-4xl font-black text-zinc-900 dark:text-white">
            ${`Editor's Pick`}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Discover one of our most loved articles, hand-picked by our editors.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="featured-image">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
                alt="Featured Blog"
                className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="featured-content">
            <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
              Web Development
            </span>

            <h3 className="mt-6 text-4xl font-black leading-tight text-zinc-900 dark:text-white">
              Master Next.js 15 Like a Pro with Real Projects
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Learn how to build scalable web applications using Next.js 15,
              Tailwind CSS, Server Components, API Routes, Authentication, and
              production-ready best practices.
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                John Doe
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={18} />
                July 2026
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} />
                8 min read
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/blogs/nextjs-15-guide"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700"
            >
              Read Article
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}