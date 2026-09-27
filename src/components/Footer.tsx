import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-ink-line">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] text-paper-dim">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
        <span>&copy; {year}</span>
      </div>
    </footer>
  );
}
