"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const contactLinks = [
  { label: "Email", href: "mailto:hello@ayo4dev.com" },
  { label: "X/Twitter", href: "https://x.com/ayo4dev" },
  { label: "Instagram", href: "https://instagram.com/ayo4dev" },
  { label: "GitHub", href: "https://github.com/ayo4dev" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    reset();
    setStatus("success");
  }

  return (
    <motion.section
      id="contact"
      className="section-shell bg-section text-sectionText"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="section-inner">
        <div className="mono flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-sectionText/50">
          04 / Contact
          <span className="h-px flex-1 bg-sectionText/15" />
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="serif max-w-4xl text-6xl italic leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-sectionText/65">
              Available for freelance projects globally. Send a note about what
              you&apos;re building, where you are in the process, and what kind
              of help you need.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-sectionText/18 px-5 py-3 text-sm font-bold text-sectionText/80 transition hover:border-sectionText hover:bg-sectionText hover:text-section"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[2rem] border border-sectionText/10 bg-sectionText/[0.04] p-5 backdrop-blur md:p-7"
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="mono text-xs uppercase tracking-[0.16em] text-sectionText/50">
                  Name
                </span>
                <input
                  {...register("name", { required: "Please enter your name." })}
                  className="rounded-2xl border border-sectionText/10 bg-sectionText/10 px-4 py-4 text-sm outline-none transition placeholder:text-sectionText/35 focus:border-sectionText/45"
                  placeholder="Your name"
                />
                {errors.name ? (
                  <span className="text-xs text-[#ffb3b3]">{errors.name.message}</span>
                ) : null}
              </label>

              <label className="grid gap-2">
                <span className="mono text-xs uppercase tracking-[0.16em] text-sectionText/50">
                  Email
                </span>
                <input
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email.",
                    },
                  })}
                  type="email"
                  className="rounded-2xl border border-sectionText/10 bg-sectionText/10 px-4 py-4 text-sm outline-none transition placeholder:text-sectionText/35 focus:border-sectionText/45"
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <span className="text-xs text-[#ffb3b3]">{errors.email.message}</span>
                ) : null}
              </label>

              <label className="grid gap-2">
                <span className="mono text-xs uppercase tracking-[0.16em] text-sectionText/50">
                  Message
                </span>
                <textarea
                  {...register("message", {
                    required: "Please tell me about the project.",
                    minLength: {
                      value: 20,
                      message: "Please share at least 20 characters.",
                    },
                  })}
                  rows={5}
                  className="resize-none rounded-2xl border border-sectionText/10 bg-sectionText/10 px-4 py-4 text-sm leading-6 outline-none transition placeholder:text-sectionText/35 focus:border-sectionText/45"
                  placeholder="Tell me what you want to build..."
                />
                {errors.message ? (
                  <span className="text-xs text-[#ffb3b3]">
                    {errors.message.message}
                  </span>
                ) : null}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-sectionText px-6 py-4 text-sm font-bold text-section transition hover:bg-accent hover:text-sectionText disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status === "success" ? (
                <p className="text-sm text-sectionText/70">
                  Message sent. I&apos;ll reply as soon as possible.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-[#ffb3b3]">
                  Something went wrong. Please email hello@ayo4dev.com directly.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
