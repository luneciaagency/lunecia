"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

export default function FeatureGrid({
  title = "What We Deliver",
  subtitle = "Our solutions are designed to solve real business challenges, streamline operations, and help your business scale efficiently.",
  features,
}: FeatureGridProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/20">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center font-medium text-indigo-400 opacity-0 transition-all duration-300 group-hover:opacity-100">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="ml-2 transition group-hover:translate-x-1"
                  />

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}