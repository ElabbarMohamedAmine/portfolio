import { stack, profile } from "../data/profile";

export default function Stack() {
  return (
    <section id="stack" className="px-6 md:px-10 py-28 md:py-36 border-t border-ink-line">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
        <h2 className="font-display text-2xl md:text-3xl text-paper">Stack</h2>

        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {stack.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-[13px] text-brass mb-3">{group.category}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-paper-dim">
                      {item}
                    </li>
                  ))}
                </ul>
                {group.note && (
                  <p className="mt-3 text-sm italic text-paper-dim leading-relaxed max-w-xs">
                    {group.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-t border-ink-line pt-6 mt-2 font-mono text-[13px] text-paper link-underline pb-0.5 hover:text-brass transition-colors"
          >
            Explore the code on GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
