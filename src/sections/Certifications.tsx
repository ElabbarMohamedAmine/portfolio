import { certifications } from "../data/profile";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 md:px-10 py-24 md:py-28 border-t border-ink-line"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-paper">Certifications</h2>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.18em] text-brass">
            Learning credentials
          </p>
        </div>

        <div>
          <p className="max-w-prose text-paper-dim leading-relaxed">
            Completed courses from Cisco Networking Academy and IBM SkillsBuild. They record what
            I have studied so far — learning credentials, not professional certification, and no
            substitute for the work itself.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {certifications.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-brass mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.title} className="border-t border-ink-line pt-2.5">
                      <p className="text-sm text-paper leading-snug">{item.title}</p>
                      <p className="mt-1 font-mono text-[11px] text-paper-dim">
                        {[item.issuer, item.date].filter(Boolean).join(" · ")}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
