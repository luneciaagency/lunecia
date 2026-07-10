"use client";

import Dashboard from "./Dashboard";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section  id="home" className="pt-20 md:pt-32 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Background Glow */}
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-700">
            AI Automation • Websites • SEO
          </span>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none">
            AI Automation
            <br />
            Websites &
            <br />
            SEO That Grow
            <br />
            Your Business
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 md:leading-9 text-slate-600">
            Lunecia helps businesses automate repetitive work, build premium
            websites, improve Google rankings with SEO, and generate more qualified
            leads using AI-powered solutions.
          </p>

          <div className="mt-12 mb-8 flex flex-col sm:flex-row gap-5">

            <Button>
              Book Free Consultation
            </Button>

            <Button variant="secondary">
              View Portfolio
            </Button>

          </div>

        </motion.div>

        <Dashboard />

      </div>

    </section>
  );
}