"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  User,
} from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Understanding React Server Components",
    excerpt:
      "Learn how React Server Components work and why they improve performance in modern web applications.",
    category: "React",
    author: "Rohan Keshri",
    date: "July 10, 2026",
    read: "6 min read",
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS v4",
    excerpt:
      "Build responsive websites faster using the latest features of Tailwind CSS v4.",
    category: "CSS",
    author: "Rohan Keshri",
    date: "July 08, 2026",
    read: "5 min read",
  },
  {
    id: 3,
    title: "Next.js Authentication using JWT",
    excerpt:
      "Implement secure authentication with JWT, cookies and middleware in Next.js 15.",
    category: "Next.js",
    author: "Rohan Keshri",
    date: "July 06, 2026",
    read: "9 min read",
  },
  {
    id: 4,
    title: "Deploy MERN Apps on VPS",
    excerpt:
      "A complete deployment guide using Nginx, PM2, SSL and Ubuntu server.",
    category: "Deployment",
    author: "Rohan Keshri",
    date: "July 04, 2026",
    read: "10 min read",
  },
];

export default function LatestPosts() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 flex items-center justify-between">
          <div>
            <span className="rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-4 py-2 text-sm font-semibold">
              Latest Posts
            </span>

            <h2 className="mt-5 text-4xl font-black text-zinc-900 dark:text-white">
              Fresh Articles
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Stay updated with our newest tutorials, guides and developer stories.
            </p>
          </div>

          <Link
            href="/blogs"
            className="hidden md:flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-5 py-3 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Posts */}

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row gap-8">

                {/* Thumbnail */}

                <div className="lg:w-80">
                  <img
                    src={`https://picsum.photos/600/400?random=${post.id}`}
                    alt={post.title}
                    className="h-56 w-full rounded-2xl object-cover"
                  />
                </div>

                {/* Content */}

                <div className="flex-1">

                  <span className="rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-3 py-1 text-sm font-semibold">
                    {post.category}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 transition">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-6 text-sm text-zinc-500 dark:text-zinc-400">

                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {post.author}
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {post.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {post.read}
                    </div>

                  </div>

                  <Link
                    href={`/blogs/${post.id}`}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-600 hover:gap-3 transition-all"
                  >
                    Continue Reading
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 text-white font-semibold hover:bg-violet-700"
          >
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}