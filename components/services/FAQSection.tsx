"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know before working with Lunecia.",
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >

          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-indigo-400">
            FAQ
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            {subtitle}
          </p>

        </motion.div>

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = index === openIndex;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >

                  <span className="text-lg font-semibold text-white">

                    {faq.question}

                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition duration-300 ${
                      isOpen ? "rotate-180 text-indigo-400" : "text-gray-400"
                    }`}
                  />

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >

                      <div className="border-t border-white/10 px-7 py-6 leading-8 text-gray-400">

                        {faq.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}