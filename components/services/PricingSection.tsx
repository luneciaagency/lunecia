"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹25,000+",
    description: "Perfect for businesses starting their digital journey.",
    features: [
      "Professional Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "Google Analytics",
      "30 Days Support",
    ],
  },
  {
    name: "Growth",
    price: "₹60,000+",
    description: "Designed for businesses focused on generating leads.",
    popular: true,
    features: [
      "Premium Website",
      "Advanced UI/UX",
      "Technical SEO",
      "Performance Optimization",
      "Blog Setup",
      "Google Search Console",
      "Microsoft Clarity",
      "90 Days Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Complete AI automation and digital transformation.",
    features: [
      "Everything in Growth",
      "AI Automation",
      "Custom Dashboards",
      "CRM Integration",
      "Chatbots",
      "Workflow Automation",
      "Priority Support",
      "Dedicated Consultation",
    ],
  },
];

export default function PricingSection() {
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

          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Pricing
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Transparent Pricing. Built for Growth.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Whether you're launching your first website or automating your
            entire business, we have a solution designed to help you grow.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`relative overflow-hidden rounded-3xl border p-8 backdrop-blur transition-all duration-300 ${
                plan.popular
                  ? "border-indigo-500 bg-gradient-to-b from-indigo-500/15 to-cyan-500/10 shadow-2xl shadow-indigo-500/20"
                  : "border-white/10 bg-white/5 hover:border-indigo-400/50"
              }`}
            >

              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-3 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-8">

                <span className="text-5xl font-black text-white">
                  {plan.price}
                </span>

              </div>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >

                    <Check
                      className="mt-1 text-green-400"
                      size={18}
                    />

                    <span className="text-gray-300">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

              <Link
                href="/contact"
                className={`mt-10 flex w-full items-center justify-center rounded-xl px-6 py-4 font-semibold transition ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "border border-white/10 bg-white/5 text-white hover:border-indigo-500 hover:bg-white/10"
                }`}
              >

                Get Started

                <ArrowRight
                  size={18}
                  className="ml-2"
                />

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}