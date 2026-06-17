"use client";

import { motion } from "framer-motion";
import { appearEasing } from "./animations";

const products = [
  {
    badge: "Code",
    title: "Cloud IDE & Repositories",
    description:
      "Write, review, and merge code from anywhere. Branch protection rules, code owners, and automated PR checks keep your main branch green.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&auto=format",
  },
  {
    badge: "Deploy",
    title: "One-Click Deployments",
    description:
      "Push to main and watch your code ship globally. Preview environments for every pull request, instant rollbacks, and zero-downtime releases.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&auto=format",
  },
  {
    badge: "Monitor",
    title: "Application Monitoring",
    description:
      "Distributed tracing, structured logs, and real-time alerts. Find the root cause of bugs in seconds, not hours, with full-stack observability.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format",
  },
  {
    badge: "Scale",
    title: "Auto-Scaling Infrastructure",
    description:
      "Handle traffic spikes automatically with smart auto-scaling. Pay only for what you use, with usage-based pricing and detailed cost analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop&auto=format",
  },
];

export default function Product() {
  return (
    <section id="product" className="py-[62px] sm:py-[120px] px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0.001, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: appearEasing, delay: index * 0.05 }}
              className="rounded-[20px] border border-[#19191a] bg-[#0e0e10] overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-[100px] bg-white/5 text-[#949fa6] border border-[#19191a] mb-4">
                  {product.badge}
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-bold text-white leading-[1.2] mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-[#949fa6] leading-[1.6]">
                  {product.description}
                </p>
              </div>
              <div className="h-48 mx-6 sm:mx-8 mb-6 sm:mb-8 rounded-[12px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
