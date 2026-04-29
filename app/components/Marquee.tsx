const items = [
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "Supabase",
  "Inngest",
  "LLM APIs",
  "PostgreSQL",
  "React",
  "Tailwind CSS",
  "✦",
];

export default function Marquee() {
  const repeatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden bg-section py-5 text-sectionText">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {[...repeatedItems, ...repeatedItems].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mono text-sm font-semibold uppercase tracking-[0.22em] text-sectionText/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
