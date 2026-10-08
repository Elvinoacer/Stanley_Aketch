"use client";

import { CardImage } from "./card-image";
import { m } from "framer-motion";
import { ArrowUp, Check, FlaskConical, ListChecks } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

/* ================================================================ */
/* Appendix — before you publish (interactive checklist)              */
/* ================================================================ */
const GROUPS: { image: "credentials" | "supervisor-feedback" | "day-reception" | "notebook"; title: string; note: string; items: string[] }[] = [
  {
    image: "credentials",
    title: "Ask Stanley for",
    note: "the raw material of the real site",
    items: [
      "Preferred display name (confirm the spelling) and a recent portrait",
      "Transcript or degree certificate — graduation date, classification, units",
      "Final-year project: title, supervisor, abstract, results, thesis & poster PDFs",
      "Two other projects, each with a clear outcome",
      "Attachment details, supervisor name and the assessment letter",
      "An honest skills self-assessment, with evidence for each skill",
      "Certificates with issuer, year and credential links",
      "Current CV, LinkedIn and GitHub/ORCID links",
    ],
  },
  {
    image: "supervisor-feedback",
    title: "Get permission from others",
    note: "nothing borrowed, everything cleared",
    items: [
      "Referees agree to be listed (contact details live in the CV, not on the page)",
      "Laboratories or organisations approve any photos, figures or project details",
      "Ethics approval reference confirmed for any project that used human samples",
    ],
  },
  {
    image: "day-reception",
    title: "Privacy",
    note: "Kenya Data Protection Act, 2019",
    items: [
      "Written consent to publish contact details and photos",
      "No patient, participant or sample identifiers anywhere on the page — health data is sensitive personal data under the Act",
    ],
  },
  {
    image: "notebook",
    title: "Final pass",
    note: "the last five minutes before it goes live",
    items: [
      "Search the page for “[” and replace or delete every remaining placeholder",
      "Remove the read-me note and the design hints in the front matter",
      "Delete this appendix once everything is checked",
    ],
  },
];

function Checklist({ items }: { items: string[] }) {
  const [done, setDone] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => {
        const checked = done.has(i);
        return (
          <li key={i}>
            <button
              onClick={() => toggle(i)}
              aria-pressed={checked}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                checked ? "bg-sage/10" : "hover:bg-cream",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all",
                  checked
                    ? "border-sage bg-sage text-paper"
                    : "border-line bg-cardwash",
                )}
              >
                {checked && <Check className="h-3.5 w-3.5" aria-hidden />}
              </span>
              <span
                className={cn(
                  "text-[14px] leading-relaxed transition-colors",
                  checked
                    ? "text-ink-faint line-through decoration-sage/60"
                    : "text-ink-soft",
                )}
              >
                {item}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function Appendix() {
  return (
    <section id="appendix" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-espresso text-ember-soft">
              <ListChecks className="h-5.5 w-5.5" aria-hidden />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Appendix — before you publish
              </h2>
              <p className="mt-1 text-[14px] text-ink-soft">
                Tap items to tick them off. When the list is empty, the site is
                ready — then delete this section.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.07}>
              <m.div
                whileHover={{ y: -3 }}
                className="h-full rounded-2xl border border-line bg-cardwash p-6"
              >
                <CardImage name={g.image} className="mb-5 aspect-[2/1]" sizes="(min-width: 768px) 540px, 100vw" />
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {g.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ember-deep">
                    {g.note}
                  </span>
                </div>
                <div className="mt-4">
                  <Checklist items={g.items} />
                </div>
              </m.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ */
/* Footer                                                            */
/* ================================================================ */
export function Footer() {
  return (
    <footer className="mt-auto border-t border-ember-soft/20 bg-espresso text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ember text-paper">
                <FlaskConical className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Stanley Aketch
              </span>
            </a>
            <p className="mt-3 max-w-xs font-mono text-[11px] leading-relaxed uppercase tracking-[0.16em] text-ink-faint">
              I turn messy samples into clean, trustworthy numbers.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2.5 sm:grid-cols-3">
            {[
              ["#story", "Story"],
              ["#fit", "Where I'd fit"],
              ["#work", "Case files"],
              ["#experience", "Experience"],
              ["#toolbox", "Toolbox"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[13.5px] text-ink-faint transition-colors hover:text-ember-soft"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 self-start rounded-full border border-ember-soft/30 px-5 py-3 text-[13px] font-semibold text-paper transition-all hover:border-ember-soft/70 hover:bg-ember-soft/10"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden />
            Back to the top
          </button>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-ember-soft/15 pt-6 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-faint sm:flex-row sm:items-center">
          <p>Draft portfolio · placeholder content · [YYYY]</p>
          <p>
            B.Sc. Biochemistry · Moi University · Eldoret, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
