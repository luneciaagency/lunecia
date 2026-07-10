"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto"
    >
      <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
        {badge}
      </p>

      <h2 className="mt-6 text-5xl font-black tracking-tight">
        {title}
      </h2>

      <p className="mt-6 text-xl text-slate-600 leading-8">
        {description}
      </p>
    </motion.div>
  );
}