"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Cpu,
  Database,
  Cloud,
  Server,
  Globe,
  BarChart3,
  Workflow,
  Code2,
  Search,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    name: "OpenAI",
    category: "AI Models",
    description: "GPT-powered assistants, AI workflows and intelligent automation.",
  },
  {
    icon: Bot,
    name: "Claude",
    category: "LLMs",
    description: "Advanced reasoning and long-context AI applications.",
  },
  {
    icon: Workflow,
    name: "LangChain",
    category: "Framework",
    description: "Production-ready AI agents and workflow orchestration.",
  },
  {
    icon: Cpu,
    name: "LangGraph",
    category: "AI Agents",
    description: "Stateful AI agents for complex business automation.",
  },
  {
    icon: Database,
    name: "LlamaIndex",
    category: "RAG",
    description: "Knowledge retrieval and intelligent document search.",
  },
  {
    icon: Code2,
    name: "Next.js",
    category: "Frontend",
    description: "Lightning-fast SEO-friendly web applications.",
  },
  {
    icon: Server,
    name: "FastAPI",
    category: "Backend",
    description: "High-performance APIs powering scalable applications.",
  },
  {
    icon: Cloud,
    name: "Docker",
    category: "DevOps",
    description: "Reliable deployment and containerized infrastructure.",
  },
  {
    icon: Globe,
    name: "Cloudflare",
    category: "Performance",
    description: "Global CDN, security and edge optimization.",
  },
  {
    icon: BarChart3,
    name: "Google Analytics",
    category: "Analytics",
    description: "Measure traffic, conversions and business growth.",
  },
  {
    icon: Search,
    name: "Google Search Console",
    category: "SEO",
    description: "Technical SEO monitoring and indexing insights.",
  },
  {
    icon: ShieldCheck,
    name: "Microsoft Clarity",
    category: "User Behavior",
    description: "Heatmaps and session recordings to improve conversions.",
  },
];

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Technology Stack
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Built Using Modern Technologies
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We combine AI, cloud infrastructure, modern web technologies,
            automation frameworks and analytics to build scalable digital
            systems that grow with your business.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/10"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/20">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  {tech.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {tech.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}