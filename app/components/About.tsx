"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const facts = [
  ["Location", "Lagos, Nigeria"],
  ["Education", "CS Graduate"],
  ["Handle", "ayo4dev"],
  ["Availability", "Freelance projects globally"],
  ["Invoicing", "Wise / Payoneer"],
];

const stats = [
  ["3+", "Years"],
  ["10+", "Projects"],
  ["2", "SaaS ventures"],
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-shell bg-background"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="section-inner">
        <div className="section-kicker">03 / About</div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <blockquote className="serif text-5xl italic leading-[1.02] tracking-[-0.035em] md:text-6xl">
              “I build elegant software that actually works.”
            </blockquote>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              {facts.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[130px_1fr] gap-4 py-4">
                  <dt className="mono text-xs uppercase tracking-[0.18em] text-muted">
                    {label}
                  </dt>
                  <dd className="text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div>
            <div className="space-y-7 text-xl leading-9 tracking-[-0.02em] text-ink/80">
              <p>
                I&apos;m Akinwumi Oluwanifemi John, a full-stack software
                engineer focused on AI-powered products and scalable web
                systems. I work across the entire stack, from database schema to
                polished UI, and I care deeply about the parts users actually
                touch.
              </p>
              <p>
                My work moves between client platforms, SaaS experiments, and
                founder-led product builds. The through-line is practical:
                understand the business problem, design a system that can hold
                it, then ship an experience people can use without a manual.
              </p>
              <p>
                I&apos;m building in public on Instagram, documenting the honest
                process of being a developer and founder from Africa. That means
                the clean wins, the messy middle, and the lessons that only show
                up when real products meet real constraints.
              </p>
              <p>
                I&apos;m available for freelance projects globally, especially
                work involving AI features, web platforms, automation,
                dashboards, and fast-moving product teams that need someone who
                can own the stack.
              </p>
            </div>

            <div className="mt-12 grid gap-4 border-y border-line py-8 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <div className="serif text-6xl leading-none tracking-[-0.04em]">
                    {value}
                  </div>
                  <div className="mono mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
