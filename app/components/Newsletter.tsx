"use client";

import { Mail, ArrowRight, Sparkles } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600" />

      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur">
            <Sparkles size={18} />
            Weekly Developer Newsletter
          </div>

          <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Never Miss
            <br />
            A Great Article
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
            Join thousands of developers and receive the latest articles,
            tutorials, AI news, programming tips, and exclusive content
            directly in your inbox.
          </p>

          {/* Form */}

          <form className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 rounded-3xl bg-white/10 p-4 backdrop-blur md:flex-row">

            <div className="relative flex-1">
              <Mail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70"
              />

              <input
                type="email"
                placeholder="Enter your email address"
                className="h-14 w-full rounded-2xl border border-white/20 bg-white/10 pl-14 pr-4 text-white placeholder:text-white/60 outline-none transition focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-8 font-semibold text-violet-700 transition hover:scale-105"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>

          </form>

          <p className="mt-5 text-sm text-violet-200">
            No spam. Unsubscribe anytime.
          </p>

          {/* Stats */}

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div>
              <h3 className="text-4xl font-black text-white">25K+</h3>
              <p className="mt-2 text-violet-200">
                Newsletter Subscribers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">500+</h3>
              <p className="mt-2 text-violet-200">
                Premium Articles
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">4.9★</h3>
              <p className="mt-2 text-violet-200">
                Reader Rating
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}