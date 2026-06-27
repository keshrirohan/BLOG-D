"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Eye,
  Heart,
  TrendingUp,
} from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const posts = [
  {
    title: "Master Next.js 15 App Router from Scratch",
    category: "Next.js",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
    read: "8 min",
    views: "18.4K",
    likes: "2.1K",
  },
  {
    title: "Complete React Roadmap for 2026",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    read: "10 min",
    views: "22K",
    likes: "3K",
  },
  {
    title: "Build AI Apps with Gemini API",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    read: "7 min",
    views: "14K",
    likes: "1.7K",
  },
  {
    title: "Deploy Next.js using Docker",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    read: "9 min",
    views: "11K",
    likes: "1.2K",
  },
  {
    title: "Top 20 JavaScript Interview Questions",
    category: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    read: "6 min",
    views: "16K",
    likes: "2.4K",
  },
  {
    title: "Build Your Developer Portfolio",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    read: "5 min",
    views: "9K",
    likes: "980",
  },
];

export default function TrendingPosts() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".post-card", {
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
      className="bg-zinc-50 py-24 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
              <TrendingUp size={16} />
              Trending
            </span>

            <h2 className="mt-5 text-4xl font-black text-zinc-900 dark:text-white">
              Trending Articles
            </h2>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Discover the most popular articles this week.
            </p>
          </div>

          <Link
            href="/blogs"
            className="hidden items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-800 md:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="post-card overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-60 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                  {post.category}
                </span>

                <h3 className="mt-5 line-clamp-2 text-2xl font-bold text-zinc-900 dark:text-white">
                  {post.title}
                </h3>

                <div className="mt-6 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Clock3 size={16} />
                    {post.read}
                  </div>

                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    {post.views}
                  </div>

                  <div className="flex items-center gap-1">
                    <Heart size={16} />
                    {post.likes}
                  </div>
                </div>

                <Link
                  href="/blogs/demo"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-violet-600 transition hover:gap-3"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Button */}

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white hover:bg-violet-700"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}