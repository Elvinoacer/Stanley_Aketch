"use client";

import { CardImage } from "./card-image";
import { m } from "framer-motion";
import { Gauge, HeartHandshake } from "lucide-react";
import { Chip, Reveal, Section, SectionHeading } from "./primitives";

const GROUPS = [
  {
    image: "skills-independent" as const,
    label: "Daily drivers",
    caption: "I do these independently and can troubleshoot them",
    meter: 92,
    bar: "bg-ember",
    text: "text-ember-deep",
    skills: [
      { name: "Buffer & solution prep · pH · serial dilutions", ev: "all lab courses, final-year project" },
      { name: "UV-Vis spectrophotometry & standard curves", ev: "final-year project, practicals" },
      { name: "Micropipetting & aseptic technique", ev: "Microbiology, Molecular Biology" },
      { name: "Excel for tidy data and charts", ev: "case files 1 & 3" },
      { name: "Scientific writing & poster design", ev: "thesis, [event]" },
    ],
  },
  {
    image: "skills-comfortable" as const,
    label: "Comfortable",
    caption: "I need little guidance",
    meter: 70,
    bar: "bg-sage",
    text: "text-sage-deep",
    skills: [
      { name: "Kit-based serum assays & internal QC", ev: "final-year project, attachment" },
      { name: "Proximate analysis — titration, gravimetry, Soxhlet, Kjeldahl", ev: "case file 2" },
      { name: "R for data cleaning & plotting — tidyverse, ggplot2", ev: "case file 3" },
      { name: "Agarose-gel electrophoresis & DNA extraction", ev: "Molecular Biology" },
      { name: "Culturing, Gram staining, plate counts", ev: "Microbiology" },
      { name: "GLP · SOP use · SDS · waste handling", ev: "attachment" },
    ],
  },
  {
    image: "skills-learning" as const,
    label: "Still learning",
    caption: "Used with supervision — and I say so",
    meter: 40,
    bar: "bg-ink-faint",
    text: "text-ink-faint",
    skills: [
      { name: "PCR & qPCR", ev: "[course / attachment]" },
      { name: "HPLC & atomic absorption spectroscopy", ev: "[practicals / attachment]" },
      { name: "ELISA", ev: "[course / attachment]" },
      { name: "Statistics beyond the basics — regression", ev: "[course in progress]" },
    ],
  },
];

const PEOPLE = [
  "teamwork",
  "time management",
  "attention to detail",
  "explaining results to non-specialists",
];

export function Toolbox() {
  return (
    <Section id="toolbox" className="bg-cream">
      <SectionHeading
        index="06"
        kicker="Toolbox"
        title={
          <>
            Grouped by confidence, with the{" "}
            <em className="text-ember">evidence</em> beside each item.
          </>
        }
        lede="An honest self-assessment — the bars say how independently I can work; the small print says where each skill was earned."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {GROUPS.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.09}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-cardwash p-6 sm:p-7">
              <CardImage name={g.image} className="mb-6" />
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {g.label}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                  {g.meter}% independent
                </span>
              </div>
              <p className="mt-1 text-[13px] italic text-ink-faint">
                {g.caption}
              </p>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-sand">
                <m.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  style={{ width: `${g.meter}%`, transformOrigin: "left" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.1, delay: 0.2 + gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`h-full rounded-full ${g.bar}`}
                />
              </div>

              <ul className="mt-6 flex-1 space-y-4">
                {g.skills.map((s) => (
                  <li key={s.name} className="group border-b border-line/70 pb-4 last:border-0 last:pb-0">
                    <p className="text-[14.5px] font-medium leading-snug text-ink">
                      {s.name}
                    </p>
                    <p className={`mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] ${g.text}`}>
                      ← {s.ev}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-espresso px-6 py-5">
          <CardImage name="people-skills" className="h-24 w-full sm:h-20 sm:w-32" sizes="(min-width: 640px) 128px, 100vw" />
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ember-soft">
            <HeartHandshake className="h-4 w-4" aria-hidden />
            People skills
          </span>
          <div className="flex flex-wrap gap-2">
            {PEOPLE.map((p) => (
              <Chip key={p} tone="dark">
                {p}
              </Chip>
            ))}
          </div>
          <span className="ml-auto hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint sm:flex">
            <Gauge className="h-3.5 w-3.5" aria-hidden />
            honest bars, no inflation
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
