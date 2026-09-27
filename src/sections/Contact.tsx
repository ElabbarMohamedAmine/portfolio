import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-40 border-t border-ink-line">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-6xl text-paper max-w-2xl leading-[1.05]">
          If you're working on data, software or reporting, I'd be glad to talk.
        </h2>
        <p className="mt-8 max-w-prose text-lg text-paper-dim leading-relaxed">
          Second-year DUT student in Decision-Making Computing and Statistics at EST Fkih
          Ben Salah. The fastest way to reach me is email.
        </p>

        <ul className="mt-14 flex flex-col gap-y-3 font-mono text-[13px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
          <li>
            <a href={`mailto:${profile.email}`} className="text-paper link-underline pb-0.5">
              {profile.email}
            </a>
          </li>
          <li aria-hidden="true" className="hidden text-steel sm:inline">
            ·
          </li>
          <li>
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim link-underline pb-0.5 hover:text-paper transition-colors"
            >
              {profile.github.label}
            </a>
          </li>
          <li aria-hidden="true" className="hidden text-steel sm:inline">
            ·
          </li>
          <li>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim link-underline pb-0.5 hover:text-paper transition-colors"
            >
              {profile.linkedin.label}
            </a>
          </li>
        </ul>

        <p className="mt-10 max-w-xs border-t border-ink-line pt-6 font-mono text-[13px] text-paper-dim">
          {profile.location}
        </p>
      </div>
    </section>
  );
}
