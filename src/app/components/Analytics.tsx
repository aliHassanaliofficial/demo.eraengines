"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Track Your Finances with Ease",
    description:
      "Get a comprehensive overview of your financial performance. Monitor net sales, visualize trends over time, and make data-driven decisions to optimize your revenue growth.",
    badge: "Text, File, Video, Link",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Manage Your Discounts Effectively",
    description:
      "Easily organize and track all active discounts in one place. Keep your promotions up-to-date and ensure your customers enjoy the best offers tailored to their needs.",
    badge: "Analytics",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Boost Your Marketing Impact",
    description:
      "Understand your marketing performance at a glance. Track online sessions, monitor conversions, and adjust your strategies to drive better engagement and sales.",
    badge: "Marketing",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Deep Dive into Your Analytics",
    description:
      "Gain insights into key metrics, compare performance over time, and stay on top of trends. From sales data to customer behavior, make informed decisions with powerful analytics at your fingertips.",
    badge: "Insights",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Analytics() {
  return (
    <section id="product" className="py-20 sm:py-32 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1">
                <span
                  className={`inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${section.gradient} text-white mb-4`}
                >
                  {section.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed max-w-lg">
                  {section.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-200/50">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-50 to-zinc-100 p-6">
                      <div className="grid grid-cols-4 gap-3 h-full">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-lg bg-gradient-to-br ${section.gradient} opacity-20`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
