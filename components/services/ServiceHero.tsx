"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export default function ServiceHero({
  badge,
  title,
  highlight,
  description,
  primaryCTA,
  secondaryCTA,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-4xl text-center"
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur">

            <Sparkles size={16} className="text-indigo-400" />

            {badge}

          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">

            {title}

            <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">

              {highlight}

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">

            {description}

          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-500"
            >
              {primaryCTA}

              <ArrowRight
                className="ml-2 transition group-hover:translate-x-1"
                size={18}
              />

            </Link>

            <Link
              href="/portfolio"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-indigo-400 hover:bg-white/10"
            >
              {secondaryCTA}
            </Link>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-4">

            {[
              {
                number: "500+",
                label: "Hours Automated",
              },
              {
                number: "40%",
                label: "Average Time Saved",
              },
              {
                number: "99.9%",
                label: "Reliable Workflows",
              },
              {
                number: "24/7",
                label: "AI Availability",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-3xl font-black text-white">

                  {item.number}

                </h3>

                <p className="mt-2 text-sm text-gray-400">

                  {item.label}

                </p>
              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}