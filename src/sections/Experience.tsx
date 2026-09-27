import { experience, education } from "../data/profile";

export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="px-6 md:px-10 py-28 md:py-36 border-t border-ink-line"
      >
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          <h2 className="font-display text-2xl md:text-3xl text-paper">Experience</h2>

          <div className="space-y-14">
            {experience.map((item) => (
              <div
                key={item.org}
                className={
                  item.secondary
                    ? "border-t border-ink-line pt-6 opacity-80"
                    : "border-t border-ink-line pt-6"
                }
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3
                    className={
                      item.secondary
                        ? "font-body font-medium text-paper-dim"
                        : "font-body text-lg font-medium text-paper"
                    }
                  >
                    {item.role}
                    <span className="text-paper-dim"> — {item.org}</span>
                  </h3>
                  <p
                    className={
                      item.secondary
                        ? "font-mono text-[12px] text-paper-dim"
                        : "font-mono text-[13px] text-brass"
                    }
                  >
                    {item.period}
                  </p>
                </div>
                <p className="mt-1.5 font-mono text-[12px] text-paper-dim">
                  {item.roleAlt} · {item.location}
                </p>
                <ul
                  className={
                    item.secondary
                      ? "mt-4 space-y-3 max-w-prose text-sm text-paper-dim leading-relaxed"
                      : "mt-5 space-y-3 max-w-prose text-paper-dim leading-relaxed"
                  }
                >
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="text-brass">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-6 md:px-10 py-24 md:py-32 border-t border-ink-line">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          <h2 className="font-display text-2xl md:text-3xl text-paper">Education</h2>

          <div className="border-t border-ink-line pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-body text-lg font-medium text-paper">
                {education.degree}
                <span className="text-paper-dim"> — {education.program}</span>
              </h3>
              <p className="font-mono text-[13px] text-brass">{education.period}</p>
            </div>
            <p className="mt-1.5 font-mono text-[12px] text-paper-dim">
              {education.institution} · {education.status}
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
              {education.areas.map((area) => (
                <li
                  key={area}
                  className="border border-ink-line px-2.5 py-1 font-mono text-[12px] text-paper-dim"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
