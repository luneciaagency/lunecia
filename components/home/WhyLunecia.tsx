"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-First",
    description:
      "We build AI-powered solutions that reduce manual work and improve efficiency.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Fast, optimized websites designed to improve user experience and convert more visitors into customers.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    description:
      "Secure, scalable solutions built with clean code and modern best practices..",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Efficient delivery with a strong focus on quality, reliability, and long-term maintainability.",
  },
];

export default function WhyLunecia() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Why Lunecia
          </p>

          <h2 className="text-5xl font-black mt-6">
            Why Businesses Choose Lunecia
          </h2>

          <p className="text-slate-600 mt-6 text-xl leading-8">
            We combine AI automation, modern web development, and data-driven SEO to
            build digital experiences that save time, generate leads, and support
            long-term business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-slate-200 p-8 hover:shadow-2xl transition-all"
              >
                <Icon
                  className="text-blue-600"
                  size={34}
                  aria-hidden="true"
                />

                <h3 className="text-2xl font-bold mt-6">
                  {feature.title}
                </h3>

                <p className="text-slate-600 mt-4 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}