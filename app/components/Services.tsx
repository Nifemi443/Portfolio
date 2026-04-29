"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const services = [
  {
    name: "AI-Powered Web Applications",
    description:
      "Custom AI workflows, product interfaces, prompts, retrieval, and integrations wrapped in a usable web product.",
    price: "From $500 · 2-4 weeks",
  },
  {
    name: "SaaS Development",
    description:
      "End-to-end SaaS builds covering auth, payments, dashboards, background jobs, and clean customer onboarding.",
    price: "From $800 · 4-8 weeks",
  },
  {
    name: "API & Backend Systems",
    description:
      "Reliable APIs, database schemas, queues, webhooks, admin tooling, and the backend glue your product needs.",
    price: "From $300 · 1-2 weeks",
  },
  {
    name: "Websites & Landing Pages",
    description:
      "Sharp editorial websites and conversion-focused landing pages for founders, creators, and small teams.",
    price: "From $200 · 3-7 days",
  },
  {
    name: "Automation & Workflows",
    description:
      "Business process automation across CRMs, forms, chat tools, databases, and AI-assisted internal operations.",
    price: "From $250 · 1-3 weeks",
  },
  {
    name: "Technical Consulting",
    description:
      "Architecture reviews, product planning, MVP scoping, AI feature strategy, and engineering direction.",
    price: "Hourly / retainer",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Services() {
  return (
    <motion.section
      id="services"
      className="section-shell bg-surfaceAlt"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="section-inner">
        <div className="section-kicker">02 / Services</div>
        <h2 className="serif mt-7 max-w-4xl text-6xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
          Build the product, fix the system, ship the thing.
        </h2>

        <div className="mt-16 grid border-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="group min-h-[270px] border-b border-line p-7 transition hover:bg-accent/[0.055] md:border-r [&:nth-child(3n)]:lg:border-r-0 [&:nth-child(even)]:md:border-r-0 [&:nth-child(even)]:lg:border-r [&:nth-last-child(-n+3)]:lg:border-b-0"
            >
              <span className="mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-2xl font-bold leading-tight tracking-[-0.04em]">
                {service.name}
              </h3>
              <p className="mt-5 text-sm leading-7 text-muted">{service.description}</p>
              <p className="mono mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {service.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
