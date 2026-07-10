"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import BrowserMockup from "@/components/ui/BrowserMockup";
import {
  Bot,
  Globe,
  Search,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "Ops Agent",
    subtitle: "AI Operations Assistant",
    category: "AI Automation",
    description:
      "AI-powered operations assistant built with LLMs, workflow automation, and intelligent task orchestration.",
    icon: Bot,
    github: "https://github.com/yukihirai15/Ops_Agent",
  },
  {
    title: "PulseStack",
    subtitle: "Infrastructure Monitoring",
    category: "Monitoring Platform",
    description:
      "Modern edge infrastructure monitoring platform with health checks, analytics, and intelligent insights.",
    icon: Globe,
    github: "https://github.com/yukihirai15/EdgeSense",
  },
  {
    title: "LogScalpel",
    subtitle: "Enterprise Log Analysis",
    category: "Networking Tool",
    description:
      "Developer utility for filtering and analyzing Citrix NetScaler logs to simplify enterprise troubleshooting.",
    icon: Search,
    github: "https://github.com/yukihirai15/netscaler-log-filter",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          description="Explore the types of AI automation, websites, and SEO solutions we create to help businesses grow."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all flex flex-col"
            >
              <BrowserMockup>
                <div className="flex flex-col items-center justify-center text-center">
                  <project.icon
                    size={52}
                    className="text-blue-600"
                    aria-hidden="true"
                  />

                  <h4 className="mt-5 text-lg font-bold">
                    {project.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    {project.subtitle}
                  </p>
                </div>
              </BrowserMockup>

              <div className="flex flex-col flex-1">

                <span className="mt-6 text-sm text-blue-600 font-semibold">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="mt-auto pt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  View on GitHub
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}