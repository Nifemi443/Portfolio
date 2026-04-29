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
        className="flex items-center gap-2 rounded-full border border-ink/10 bg-background/72 p-2 shadow-[0_20px_80px_rgba(20,18,16,0.12)] backdrop-blur-xl"
      >
        <a
          href="#home"
          className="hidden rounded-full px-4 py-2 text-sm font-bold tracking-tight text-ink sm:block"
        >
          ayo4dev
        </a>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === link.id
                  ? "bg-ink text-background"
                  : "text-muted hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-background transition hover:bg-ink"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="mono rounded-full border border-ink/10 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink transition hover:border-accent hover:text-accent"
        >
          Theme
        </button>
      </nav>
    </header>
  );
}
