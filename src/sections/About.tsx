import { about } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-36 border-t border-ink-line">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
        <h2 className="font-display text-2xl md:text-3xl text-paper">
          About
        </h2>
        <div className="max-w-prose space-y-6 text-lg text-paper-dim leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-paper" : undefined}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
