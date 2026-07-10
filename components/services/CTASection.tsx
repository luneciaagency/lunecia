"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
}

export default function CTASection({
  title = "Ready to Grow Your Business with AI?",
  description = "Whether you need a high-converting website, AI automation, or an SEO strategy that delivers measurable results, Lunecia is here to help you scale with confidence.",
  primaryButton = "Book a Free Consultation",
  secondaryButton = "View Our Services",
}: CTASectionProps) {
  return (
    <section className="py-28">

      <div className="container mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-cyan-600/20 p-10 md:p-16"
        >
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="relative z-10 text-center">

            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              🚀 Let's Build Something Amazing
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
              {title}
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              {description}
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-500"
              >
                <CalendarDays
                  size={20}
                  className="mr-2"
                />

                {primaryButton}

              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-indigo-500 hover:bg-white/10"
              >

                {secondaryButton}

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <div>
                <h3 className="text-3xl font-black text-white">
                  48 hrs
                </h3>

                <p className="mt-2 text-gray-400">
                  Average Response Time
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">
                  Custom
                </h3>

                <p className="mt-2 text-gray-400">
                  Tailored Solutions
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">
                  End-to-End
                </h3>

                <p className="mt-2 text-gray-400">
                  Strategy to Growth
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}