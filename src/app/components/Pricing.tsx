"use client";

import { motion } from "framer-motion";
import { appearEasing } from "./animations";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    period: "/month",
    description: "Free forever for solo developers",
    features: [
      "1 developer seat",
      "Unlimited public repos",
      "100 build minutes/month",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$20",
    period: "/developer/month",
    description: "For growing engineering teams",
    features: [
      "Unlimited team members",
      "Unlimited private repos",
      "10,000 build minutes/month",
      "Priority email support",
      "Preview environments",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited everything",
      "Self-hosted option",
      "99.99% uptime SLA",
      "Dedicated CSM",
      "SOC 2 + HIPAA compliance",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-[62px] sm:py-[120px] px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: appearEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-[1.3]">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base text-[#949fa6] max-w-[600px] mx-auto">
            Start free, scale as you grow. No surprise bills, no vendor lock-in.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0.001, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: appearEasing, delay: index * 0.1 }}
              className={`p-6 rounded-[12px] border bg-[#0e0e10] ${
                index === 1
                  ? "border-[#eaa879]/40 shadow-[0_0_40px_rgba(234,168,121,0.08)]"
                  : "border-[#19191a]"
              }`}
            >
              {index === 1 && (
                <div className="inline-block text-xs font-semibold px-3 py-1 rounded-[100px] bg-[#eaa879] text-[#0b0b0d] mb-4">
                  Most popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-[#949fa6] mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[28px] font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-[#949fa6]">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#949fa6]"
                  >
                    <svg
                      className="w-4 h-4 text-[#eaa879] shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-2.5 rounded-[100px] text-sm font-semibold transition-colors ${
                  index === 1
                    ? "bg-white text-[#0b0b0d] hover:opacity-90"
                    : "border border-[#19191a] text-white hover:bg-white/5"
                }`}
              >
                {index === 2 ? "Contact sales" : "Get started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
