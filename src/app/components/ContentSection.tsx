"use client";

import { motion } from "framer-motion";
import { appearEasing } from "./animations";

interface ContentSectionProps {
  imageSide: "left" | "right";
  badge: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ContentSection({
  imageSide,
  badge,
  title,
  description,
  image,
}: ContentSectionProps) {
  return (
    <section className="py-[62px] sm:py-[120px] px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div
          className={`flex flex-col ${imageSide === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
        >
          <motion.div
            initial={{ opacity: 0.001, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: appearEasing }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-[20px] border border-[#19191a] bg-[#0e0e10] p-4 shadow-xl">
              <div className="aspect-video rounded-[12px] overflow-hidden bg-[#141417]">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.001, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: appearEasing, delay: 0.1 }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-[100px] bg-white/5 text-[#949fa6] border border-[#19191a] mb-4">
              {badge}
            </span>
            <h3 className="text-[28px] sm:text-[32px] font-bold text-white leading-[1.3]">
              {title}
            </h3>
            <p className="mt-4 text-base text-[#949fa6] leading-[1.6] max-w-lg">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
