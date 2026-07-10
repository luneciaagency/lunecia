"use client";

import { Bot, TrendingUp, Globe, Search } from "lucide-react";
import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="grid gap-5"
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-5">
          <Bot className="text-blue-600" />
          <h3 className="font-bold text-lg">AI Assistant</h3>
          <p className="text-sm text-slate-500 mt-1">
            Monitoring business activity...
          </p>
        </div>

        <div className="space-y-4 text-slate-700">
          <div className="flex justify-between">
            <span>Leads Generated</span>
            <Counter to={247} />
          </div>

          <div className="flex justify-between">
            <span>SEO Score</span>
            <span className="font-bold text-green-600">
              <Counter to={98} suffix="%" />
            </span>
          </div>

          <div className="flex justify-between">
            <span>Automation</span>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-bold text-green-600">
                  Running
              </span>
</div>


          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-3xl bg-slate-900 text-white p-6 shadow-2xl">
          <TrendingUp size={30} />
          <h2 className="text-3xl font-bold mt-5">
            +<Counter to={248} suffix="%" />
          </h2>
          <p className="text-slate-300 mt-2">Traffic Growth</p>
        </div>

        <div className="rounded-3xl bg-blue-600 text-white p-6 shadow-2xl">
          <Search size={30} />
          <h2 className="text-3xl font-bold mt-5">#1</h2>
          <p className="mt-2">SEO Ready</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="text-green-600" />
          <span className="font-medium">Website Status</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
          <span className="font-bold text-green-600">
            Online
          </span>
        </div>
      </div>
    </motion.div>
  );
}