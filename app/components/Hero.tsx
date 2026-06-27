"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.7,
      });

      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.45,
      });

      gsap.from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
      });

      gsap.from(".hero-image", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
      });

      gsap.to(".floating", {
        y: -18,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden py-24 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-100 via-white to-blue-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-violet-950" />

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl  items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-violet-300 bg-white/70 px-5 py-2 text-sm font-medium backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/60">
            <Sparkles size={16} className="text-violet-600" />
            Learn • Build • Share
          </div>

          <h1 className="hero-title mt-8 text-5xl font-black leading-tight text-zinc-900 dark:text-white md:text-7xl">
            Discover Amazing
            <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Developer Stories
            </span>
          </h1>

          <p className="hero-text mt-8 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Blog-D is the place where developers learn, share ideas, discover
            AI, Web Development, Programming tips and real-world experiences.
          </p>

          <div className="hero-buttons mt-10 flex flex-wrap gap-4">
            <Link
              href="/blogs"
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:scale-105 hover:bg-violet-700"
            >
              Start Reading
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-zinc-300 bg-white/80 px-6 py-4 font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              Explore Topics
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h2 className="text-3xl font-bold text-violet-600">5K+</h2>
              <p className="text-zinc-500 dark:text-zinc-400">Readers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-600">250+</h2>
              <p className="text-zinc-500 dark:text-zinc-400">Articles</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-600">30+</h2>
              <p className="text-zinc-500 dark:text-zinc-400">Categories</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hero-image relative flex justify-center">
          <div className="floating relative h-[430px] w-[430px] rounded-[40px] border border-zinc-200 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="absolute -right-6 -top-6 rounded-2xl bg-violet-600 p-5 text-white shadow-xl">
              <BookOpen size={42} />
            </div>

            <div className="space-y-5">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <div className="mb-4 h-4 w-28 rounded bg-violet-500" />

                  <div className="mb-3 h-3 w-full rounded bg-zinc-300 dark:bg-zinc-600" />

                  <div className="mb-3 h-3 w-3/4 rounded bg-zinc-300 dark:bg-zinc-600" />

                  <div className="h-3 w-2/4 rounded bg-zinc-300 dark:bg-zinc-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
