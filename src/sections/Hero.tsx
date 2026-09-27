import { useRef } from "react";
import { hero, profile } from "../data/profile";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-10 overflow-hidden"
      style={
        {
          "--x": "50%",
          "--y": "40%",
          backgroundImage:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(192,138,78,0.08), transparent 65%)",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto max-w-6xl w-full">
        <p className="font-mono text-[13px] text-brass mb-6 motion-safe:animate-[fadeUp_0.7s_ease_forwards] opacity-0">
          {hero.eyebrow}
        </p>

        <h1 className="font-display font-medium leading-[0.98] text-[13vw] sm:text-[9vw] md:text-[6.4vw] lg:text-[5.5rem] text-paper motion-safe:animate-[fadeUp_0.8s_ease_forwards_0.1s] opacity-0">
          Mohamed Amine
          <br />
          El Abbar
        </h1>

        <p className="mt-7 font-display text-2xl md:text-3xl leading-tight text-paper-dim italic motion-safe:animate-[fadeUp_0.8s_ease_forwards_0.2s] opacity-0">
          {hero.headline}
        </p>

        <p className="mt-7 max-w-prose font-body text-lg md:text-xl text-paper-dim leading-relaxed motion-safe:animate-[fadeUp_0.8s_ease_forwards_0.3s] opacity-0">
          {hero.support}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 motion-safe:animate-[fadeUp_0.8s_ease_forwards_0.45s] opacity-0">
          <a
            href="#work"
            className="inline-flex items-center gap-2 border border-ink-line px-5 py-3 font-mono text-[13px] text-paper hover:border-brass hover:text-brass transition-colors"
          >
            See the work
          </a>
          <a
            href="#about"
            className="font-mono text-[13px] text-paper-dim link-underline pb-0.5 hover:text-paper transition-colors"
          >
            About me
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-[13px] text-paper-dim link-underline pb-0.5 hover:text-paper transition-colors"
          >
            Get in touch
          </a>
        </div>

        <p className="mt-14 font-mono text-[12px] text-paper-dim motion-safe:animate-[fadeUp_0.8s_ease_forwards_0.55s] opacity-0">
          {hero.institution}
        </p>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
