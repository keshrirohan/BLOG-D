"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, BookOpen, Brain, Code2, Sparkles } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".card-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.4,
      });

      gsap.to(".floating", {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 2,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      title: "Technology",
      icon: <Code2 className="h-8 w-8" />,
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="h-8 w-8" />,
    },
    {
      title: "Programming",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      title: "Innovation",
      icon: <Sparkles className="h-8 w-8" />,
    },
  ];

  return (
    <main
      ref={heroRef}
      className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-white"
    >
      {/* Hero Section */}{" "}
      <section className="relative overflow-hidden ">
        {/* Background Blur */}{" "}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />{" "}
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <span className="hero-item rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
            🚀 Modern Blogging Platform
          </span>

          <h1 className="hero-item mt-8 text-5xl font-black leading-tight md:text-7xl">
            Discover Stories
            <br />
            That Inspire
          </h1>

          <p className="hero-item mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Explore premium articles about AI, Technology, Web Development,
            Productivity, and Startups.
          </p>

          <div className="hero-item mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:scale-105 dark:bg-white dark:text-black">
              Explore Blogs
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 transition hover:scale-105 dark:border-zinc-700">
              Start Reading
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Floating Cards */}
          <div className="mt-16 hidden gap-6 lg:flex">
            <div className="floating rounded-2xl border border-white/20 bg-white/70 p-5 shadow-xl backdrop-blur-xl dark:bg-zinc-900/70">
              🤖 AI Trends 2026
            </div>

            <div className="floating rounded-2xl border border-white/20 bg-white/70 p-5 shadow-xl backdrop-blur-xl dark:bg-zinc-900/70">
              ⚡ Web Performance
            </div>

            <div className="floating rounded-2xl border border-white/20 bg-white/70 p-5 shadow-xl backdrop-blur-xl dark:bg-zinc-900/70">
              🚀 Startup Growth
            </div>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Featured Categories</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Explore trending topics from our blog.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className="card-item rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 text-purple-500">{item.icon}</div>

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Read the latest insights and expert articles.
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Blog Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Trending Articles</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="h-56 bg-gradient-to-r from-purple-500 to-cyan-500" />

              <div className="p-6">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 dark:bg-purple-900">
                  Technology
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  The Future of AI in 2026
                </h3>

                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                  Discover how artificial intelligence is transforming
                  industries worldwide.
                </p>

                <button className="mt-6 font-semibold text-purple-500">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Newsletter */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-600 p-10 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold">Join Our Newsletter</h2>

          <p className="mt-4">
            Get the latest articles delivered directly to your inbox.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl px-4 py-3 text-black outline-none"
            />

            <button className="rounded-xl bg-black px-6 py-3 text-white transition hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-8 text-center dark:border-zinc-800">
        <h3 className="text-xl font-bold">Blog-D</h3>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          © 2026 Blog-D. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
