"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { appearEasing } from "./animations";

const faqs = [
  {
    q: "How does Era Engines pricing work?",
    a: "We offer usage-based pricing for compute and bandwidth, plus a flat monthly fee per developer seat. You only pay for what your team actually uses, with generous free tiers for hobby projects and startups.",
  },
  {
    q: "Can I self-host Era Engines?",
    a: "Yes. Our Enterprise plan includes a self-hosted deployment option that runs in your own VPC or on-premise infrastructure. You get the same features as our cloud, with full data sovereignty.",
  },
  {
    q: "Which programming languages and frameworks are supported?",
    a: "Era Engines works with any language that can run in a Docker container — that's over 40 first-class adapters including Node.js, Python, Go, Rust, Java, Ruby, PHP, .NET, and Elixir. Framework-specific presets for Next.js, Django, Rails, Spring, and more.",
  },
  {
    q: "Is my source code and data secure?",
    a: "Absolutely. We're SOC 2 Type II certified, with encryption at rest and in transit. Source code never leaves your region, and we offer customer-managed encryption keys (CMEK) for enterprise customers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[62px] sm:py-[120px] px-4 sm:px-8">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: appearEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-[1.3]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#949fa6]">
            Everything you need to know about Era Engines.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.001, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: appearEasing, delay: index * 0.05 }}
              className="rounded-[20px] border border-[#19191a] bg-[rgba(11,11,13,0.8)] backdrop-blur-[30px] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-semibold text-white text-sm">{faq.q}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 text-[#949fa6] shrink-0 ml-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-[#949fa6] leading-[1.6]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
