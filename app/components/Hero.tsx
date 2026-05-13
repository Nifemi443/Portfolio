"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import AvatarSVG from "./AvatarSVG";

const bullets = [
  "AI product strategy with real shipping discipline",
  "Full-stack execution from schema to interface",
  "Clean systems, polished UI, and useful automation",
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const bulletList: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const bulletItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 lg:px-16 lg:pt-36"
    >
      <div className="mesh-gradient pointer-events-none absolute right-[-14rem] top-[-10rem] h-[34rem] w-[42rem] opacity-90" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.p
            variants={item}
            className="mono mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent"
          >
            it&apos;s me, Nifemi
          </motion.p>

          <motion.h1
            variants={item}
            className="serif max-w-4xl text-[clamp(4rem,12vw,9.8rem)] font-normal leading-[0.84] tracking-[-0.055em]"
          >
            Hello! I&apos;m{" "}
            <span className="italic tracking-[-0.035em]">Oluwanifemi</span>
          </motion.h1>

          <motion.div variants={item} className="mt-7 flex items-center gap-3">
            <span className="h-px w-12 bg-ink/30" />
            <p className="text-xl font-bold uppercase tracking-[-0.02em]">
              Software Engineer ✦
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-8 text-muted"
          >
            Full-stack software engineer focused on AI-powered products and
            scalable web systems. I work across the entire stack, from database
            schema to polished UI, and I ship things that matter.
          </motion.p>

          <motion.ul variants={bulletList} className="mt-8 grid gap-3 text-sm font-semibold">
            {bullets.map((bullet) => (
              <motion.li key={bullet} variants={bulletItem} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs text-background">
                  ✓
                </span>
                {bullet}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-7 py-4 text-sm font-bold text-background transition hover:bg-accent"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="avatar-wrap relative order-1 mx-auto w-full max-w-[390px] lg:order-2 lg:max-w-none"
        >
          <div
            className="absolute left-0 top-0 z-20 rounded-[100px] border-[0.5px] border-[rgba(24,22,14,0.12)] bg-[#ffffff] px-[0.85rem] py-[0.35rem] text-[0.68rem] font-bold tracking-[0.06em] text-[#18160e] shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
            style={{ fontFamily: "var(--ff-mono), 'Geist Mono', monospace" }}
          >
            Hello 👋
          </div>
          <div className="avatar-card relative aspect-[3/4] rounded-[2.5rem] border-[0.5px] border-line bg-[#faf8f3]/45 p-3 shadow-[0_34px_120px_rgba(20,18,16,0.18)]">
            <div className="h-full overflow-hidden rounded-[2rem]">
              <AvatarSVG />
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex gap-2">
              <span className="mono rounded-[3px] border-[0.5px] border-line bg-[var(--bg3)] px-2 py-[0.2rem] text-[0.55rem] text-[var(--ink3)]">
                3+ yrs experience
              </span>
              <span className="mono rounded-[3px] border-[0.5px] border-line bg-[var(--bg3)] px-2 py-[0.2rem] text-[0.55rem] text-[var(--ink3)]">
                10+ projects shipped
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
