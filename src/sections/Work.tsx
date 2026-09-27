import { useLayoutEffect, useRef, type ReactNode } from "react";
import { projects } from "../data/profile";

const SMALL_SCREEN = "(max-width: 767px)";

/**
 * Technical detail. Open on desktop, collapsed on small screens so a long page
 * stays navigable on a phone. Runs before paint, so there is no visible flash,
 * and the reader keeps control afterwards.
 */
function ProjectDetail({ title, children }: { title: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia(SMALL_SCREEN);
    const apply = () => {
      el.open = !mq.matches;
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <details ref={ref} className="group mt-14 border-t border-ink-line pt-8">
      <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-brass transition-colors hover:text-paper [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true" className="transition-transform duration-200 group-open:rotate-90">
          →
        </span>
        {title}
      </summary>

      <div className="pt-10">
        <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-10">{children}</dl>
      </div>
    </details>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-36 border-t border-ink-line">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl text-paper mb-4">Selected Work</h2>
        <p className="max-w-prose text-paper-dim mb-16">
          Two projects: one built inside a company, one I am shaping on my own.
        </p>

        {projects.map((project, index) => {
          const featured = Boolean(project.featured);

          return (
            <article
              key={project.title}
              className={index === 0 ? "mb-24" : "border-t border-ink-line pt-16 md:pt-20"}
            >
              <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-6 mb-10">
                <div>
                  <h3
                    className={
                      featured
                        ? "font-display text-4xl md:text-6xl leading-[1.02] text-paper"
                        : "font-display text-3xl md:text-4xl leading-[1.05] text-paper"
                    }
                  >
                    {project.title}
                  </h3>
                  <p className="font-mono text-[13px] text-brass mt-3 max-w-prose leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {project.badge ? (
                  <ul className="max-w-full">
                    {project.meta.map((line) => (
                      <li
                        key={line}
                        className="max-w-full border border-brass/40 px-2.5 py-1.5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-brass"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  /* Stacked lines: each entry is self-contained, so wrapping can never run two fields together. */
                  <ul className="shrink-0 text-right font-mono text-[12px] text-paper-dim leading-relaxed">
                    {project.meta.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>

              <p
                className={
                  featured
                    ? "max-w-prose text-xl text-paper-dim leading-relaxed mb-10"
                    : "max-w-prose text-lg text-paper-dim leading-relaxed mb-10"
                }
              >
                {project.summary}
              </p>

              {project.pipeline && (
                <p className="font-mono text-[12px] text-paper-dim mb-10 break-words">
                  {project.pipeline.join("  →  ")}
                </p>
              )}

              {project.repoUrl && (
                <div className="font-mono text-[13px]">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 -my-1 py-1 text-paper link-underline pb-0.5 hover:text-brass transition-colors"
                  >
                    View repository
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}

              <ProjectDetail title="Technical detail">
                {project.sections.map((s) => (
                  <div key={s.label}>
                    <dt className="font-mono text-[12px] uppercase tracking-[0.18em] text-brass mb-3">
                      {s.label}
                    </dt>
                    <dd className="text-paper-dim leading-relaxed max-w-prose">{s.body}</dd>
                  </div>
                ))}
              </ProjectDetail>

              {project.areas && (
                <div className="mt-12 border-t border-ink-line pt-8">
                  <h4 className="font-mono text-[12px] uppercase tracking-[0.18em] text-brass mb-4">
                    Areas
                  </h4>
                  <ul className="flex flex-wrap gap-x-3 gap-y-2">
                    {project.areas.map((area) => (
                      <li
                        key={area}
                        className="border border-ink-line px-2.5 py-1 font-mono text-[12px] text-paper-dim"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
