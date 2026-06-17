"use client";

import { motion } from "framer-motion";
import { appearEasing } from "./animations";

const features = [
  {
    title: "Version Control",
    description:
      "Built-in Git workflows, pull request reviews, and branch management that helps your engineering team collaborate on code without friction.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop&auto=format",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Deploy to AWS, GCP, or Azure with zero-downtime rollouts. Auto-scaling, load balancing, and SSL managed out of the box.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop&auto=format",
  },
  {
    title: "Team Collaboration",
    description:
      "Real-time code review, inline comments, and shared debugging sessions that keep distributed engineering teams in sync.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop&auto=format",
  },
  {
    title: "API Integrations",
    description:
      "Connect with GitHub, GitLab, Jira, Slack, and 200+ developer tools through our open API and pre-built connectors.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop&auto=format",
  },
  {
    title: "Performance Monitoring",
    description:
      "Real-time APM with distributed tracing, error tracking, and custom metrics to help you debug production issues in seconds.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&auto=format",
  },
  {
    title: "CI/CD Pipelines",
    description:
      "YAML-configurable pipelines with parallel test runs, artifact caching, and instant rollbacks. Ship to production 10x faster.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=300&fit=crop&auto=format",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-[62px] sm:py-[120px] px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: appearEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-[1.3]">
            Built for modern engineering teams
          </h2>
          <p className="mt-4 text-base text-[#949fa6] max-w-[600px] mx-auto leading-[1.6]">
            Everything you need to write, ship, and monitor production software —
            all in one developer-first platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0.001, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: appearEasing, delay: index * 0.05 }}
              className="p-6 rounded-[12px] border border-[#19191a] bg-[#0e0e10] hover:border-[#eaa879]/20 transition-colors duration-300"
            >
              <div className="mb-4 w-full aspect-[2/1] rounded-lg overflow-hidden bg-[#141417]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[18px] font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-[#949fa6] leading-[1.6]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
