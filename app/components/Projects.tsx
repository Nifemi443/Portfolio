"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const projects = [
  {
    name: "Quantum Financial System",
    url: "",
    type: "Client Work",
    description:
      "Premium digital asset wealth management platform with an internal token, five sovereign digital assets, crypto deposit rails abstracted behind wealth management language, and a bespoke design system.",
    stack: ["Next.js", "TypeScript", "Supabase", "Inngest", "Web3"],
  },
  {
    name: "SellBetter",
    url: "#contact",
    type: "Own Venture",
    description:
      "AI-powered Instagram audit and WhatsApp coaching tool for Nigerian small businesses, turning social presence into actionable sales strategy for fashion and beauty brands.",
    stack: ["Next.js", "OpenAI API", "WhatsApp Business API", "Supabase"],
  },
  {
    name: "Omni",
    url: "https://omnichannel-saas-theta.vercel.app/",
    type: "Own Venture",
    description:
      "AI SEO platform that repurposes YouTube videos into TikTok and Shorts content with a full background job pipeline.",
    stack: ["Next.js 15", "Inngest", "Cloudinary", "Clerk", "Prisma", "Paystack"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <motion.section
      id="work"
      className="section-shell bg-background"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="section-inner">
        <div className="section-kicker">01 / Selected work</div>
        <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="serif max-w-3xl text-6xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Systems with taste and traction.
          </h2>
          <p className="max-w-sm text-sm leading-7 text-muted">
            A mix of client platforms and owned ventures built around AI,
            infrastructure, and practical business outcomes.
          </p>
        </div>

        <div className="mt-16 border-t border-line">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group grid gap-6 border-b border-line py-9 md:grid-cols-[72px_1fr_1.2fr_64px] md:items-start"
            >
              <span className="mono text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <a
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                  className="serif text-4xl leading-none tracking-[-0.03em] transition group-hover:translate-x-2 group-hover:text-accent md:text-5xl"
                >
                  {project.name}
                </a>
                <div className="mt-4">
                  <span className="mono rounded-full border border-ink/15 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                    {project.type}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm leading-7 text-muted">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-ink/[0.04] px-3 py-1 text-xs font-semibold text-ink/75"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`Open ${project.name}`}
                className="text-3xl transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
