"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Search } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Bot,
    title: "AI Systems",
    description:
      "Automate repetitive work with AI chatbots, AI agents, workflow automation, and custom integrations.",
    features: [
      "AI Chatbots",
      "AI Agents",
      "Workflow Automation",
      "Knowledge Base",
    ],
  },
  {
    icon: Globe,
    title: "Web Experiences",
    description:
      "Fast, modern, SEO-first websites built to convert visitors into customers.",
    features: [
      "Business Websites",
      "Landing Pages",
      "Dashboards",
      "Performance Optimization",
    ],
  },
  {
    icon: Search,
    title: "Growth & SEO",
    description:
      "Improve visibility, attract qualified traffic, and turn clicks into customers.",
    features: [
      "Technical SEO",
      "Local SEO",
      "Analytics",
      "Conversion Optimization",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
            badge="Services"
            title="AI Automation, Website Development & SEO Services"
            description="From AI automation and modern websites to SEO and digital growth, we build solutions that help businesses attract more customers and scale efficiently."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600" size={28} aria-hidden="true"/>
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-slate-700 flex items-center gap-3"
                    >
                      <span aria-hidden="true" className="w-2 h-2 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}