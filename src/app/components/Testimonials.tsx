"use client";

import { motion } from "framer-motion";
import { appearEasing } from "./animations";

const testimonials = [
  {
    quote:
      "We migrated our entire CI/CD pipeline to Era Engines in two weeks. Build times dropped 60% and our developers actually enjoy shipping now. It's a no-brainer for any SaaS team.",
    name: "Lucas Chen",
    role: "Staff Engineer, Vercel",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    quote:
      "The monitoring and observability features are best-in-class. We catch production issues before our users do, and the integration with our GitHub workflow is seamless.",
    name: "Nick Waritn",
    role: "Engineering Lead, Stripe",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "Era Engines replaced four different tools in our stack. Now our team writes code, ships it, and monitors it — all from one platform. It paid for itself in the first month.",
    name: "Anna Koralina",
    role: "CTO, Linear",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[62px] sm:py-[120px] px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: appearEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-[1.3]">
            Trusted by 10,000+ engineering teams
          </h2>
          <p className="mt-4 text-base text-[#949fa6] max-w-[600px] mx-auto leading-[1.6]">
            From early-stage startups to public companies, developers ship better
            software with Era Engines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0.001, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: appearEasing, delay: index * 0.1 }}
              className="p-6 rounded-[12px] border border-[#19191a] bg-[#0e0e10]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#eaa879] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#949fa6] text-sm leading-[1.6] mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-[#949fa6] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
