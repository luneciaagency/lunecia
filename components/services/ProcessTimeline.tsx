"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  PencilRuler,
  Code2,
  Rocket,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    title: "Discover",
    description:
      "We understand your business, audience, pain points, and growth goals before writing a single line of code.",
    icon: Search,
  },
  {
    title: "Strategize",
    description:
      "We design a roadmap covering technology, SEO, AI opportunities, and long-term scalability.",
    icon: Lightbulb,
  },
  {
    title: "Design",
    description:
      "Our UI/UX focuses on trust, performance, and conversion—not just aesthetics.",
    icon: PencilRuler,
  },
  {
    title: "Develop",
    description:
      "Using modern technologies, we build secure, fast, scalable digital products.",
    icon: Code2,
  },
  {
    title: "Launch",
    description:
      "Deployment, analytics, SEO setup, monitoring, and performance optimization are included.",
    icon: Rocket,
  },
  {
    title: "Optimize",
    description:
      "We continuously improve rankings, conversions, and customer experience using real data.",
    icon: TrendingUp,
  },
  {
    title: "Scale",
    description:
      "As your business grows, we introduce AI automation, advanced integrations, and new growth strategies.",
    icon: BarChart3,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-28">

      <div className="container mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Our Process
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            The Lunecia Growth Framework
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Every successful project follows a proven framework focused on
            business growth, automation, user experience, and measurable
            results.
          </p>
        </motion.div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/70 via-cyan-500/40 to-transparent lg:block" />

          <div className="space-y-10">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .08,
                  }}
                  className="group relative flex gap-6"
                >

                  <div className="hidden lg:flex">

                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30">

                      <Icon size={26} className="text-white" />

                    </div>

                  </div>

                  <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 group-hover:border-indigo-500/50 group-hover:bg-white/10">

                    <div className="mb-3 flex items-center gap-4">

                      <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-semibold text-indigo-300">
                        Step {index + 1}
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold text-white">

                      {step.title}

                    </h3>

                    <p className="mt-4 leading-8 text-gray-400">

                      {step.description}

                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}