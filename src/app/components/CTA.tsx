"use client";

import { motion } from "framer-motion";
import { appearEasing } from "./animations";

export default function CTA() {
  return (
    <section className="py-[62px] sm:py-[120px] px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: appearEasing }}
          className="relative rounded-[32px] border border-[#19191a] bg-[#0e0e10] p-12 sm:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#eaa879] rounded-full opacity-[0.05] blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#eaa879] rounded-full opacity-[0.08] blur-[40px]" />
          </div>

          <div className="relative">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-[1.3] mb-6">
              Ready to ship better software, faster?
            </h2>
            <p className="text-base text-[#949fa6] mb-10 max-w-xl mx-auto leading-[1.6]">
              Join 10,000+ engineering teams who trust Era Engines for their CI/CD,
              monitoring, and cloud infrastructure. Start free in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="inline-block bg-white text-[#0b0b0d] px-10 py-4 rounded-[100px] text-sm font-semibold hover:opacity-90 transition-opacity shadow-[inset_0px_1px_10px_0px_rgba(255,255,255,0.05)]"
              >
                Start free trial
              </a>
              <a
                href="https://calendly.com"
                className="inline-block text-[#949fa6] px-10 py-4 rounded-[100px] text-sm font-semibold border border-[#19191a] hover:border-[#eaa879]/30 hover:text-white transition-colors"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
