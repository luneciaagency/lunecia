"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black leading-tight"
        >
          Ready to Build
          <br />
          Something Amazing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-8"
        >
          Whether you need AI automation, a modern website,
          or SEO that drives real growth, let's build it together.
        </motion.p>

        <div className="mt-12 flex justify-center">

          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Free Consultation
          </Button>

        </div>

      </div>
    </section>
  );
}