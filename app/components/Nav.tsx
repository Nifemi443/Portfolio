"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme === "dark" || (!storedTheme && prefersDark) ? "dark" : "light";

    document.documentElement.dataset.theme = initialTheme;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <header className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-2 rounded-full border border-line bg-background/72 py-[0.3rem] pl-4 pr-[0.3rem] shadow-[0_20px_80px_rgba(20,18,16,0.1)] backdrop-blur-xl"
      >
        <a
          href="#home"
          className="hidden rounded-full py-1.5 pr-1 text-[0.65rem] font-bold tracking-tight text-ink sm:block"
        >
          oluwanifemi
        </a>

        <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />

        <div className="flex items-center gap-0.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-[0.72rem] font-semibold transition ${
                activeSection === link.id
                  ? "bg-[var(--green)] text-white"
                  : "text-muted hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-accent px-4 py-1.5 text-[0.72rem] font-bold text-background transition hover:bg-ink"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="mono rounded-full border border-line px-2.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-ink transition hover:border-accent hover:text-accent"
        >
          Theme
        </button>
      </nav>
    </header>
  );
}
