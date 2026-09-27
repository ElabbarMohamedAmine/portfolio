import { useEffect, useState } from "react";
import { nav, profile } from "../data/profile";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between"
      >
        <a
          href="#top"
          className="font-display text-sm tracking-tight text-paper"
        >
          {profile.shortName}
        </a>
        <ul className="hidden md:flex items-center gap-7 font-mono text-[13px] text-paper-dim">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="link-underline pb-0.5 hover:text-paper transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="md:hidden font-mono text-[13px] text-paper-dim hover:text-paper transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
