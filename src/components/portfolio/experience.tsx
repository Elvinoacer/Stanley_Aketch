"use client";

import { CardImage } from "./card-image";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  BookOpenCheck,
  ClipboardCheck,
  Clock,
  FileCheck2,
  FlaskConical,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Chip, Ph, Reveal, Section, SectionHeading } from "./primitives";

const DAY = [
  {
    image: "day-opening" as const,
    time: "08:00",
    title: "Open the lab properly",
    body: "PPE on, bench set-up, reagent expiry dates and fridge temperatures checked before anything else.",
    icon: Clock,
  },
  {
    image: "day-reception" as const,
    time: "08:30",
    title: "Sample reception",
    body: "Match labels to request forms and log every single sample — the chain of custody starts here.",
    icon: ClipboardCheck,
  },
  {
    image: "day-batch" as const,
    time: "09:30",
    title: "QC, then the batch",
    body: "Run internal QC, and only then process the day's batch of assays.",
    icon: FlaskConical,
  },
  {
    image: "day-verification" as const,
    time: "12:30",
    title: "Verify & flag",
    body: "Verify results, flag out-of-range values to the supervisor, enter data in the LIMS / register.",
    icon: FileCheck2,
  },
  {
    image: "day-housekeeping" as const,
    time: "14:00",
    title: "Housekeeping",
    body: "Prepare reagents and buffers, check calibration, clean up, segregate waste.",
    icon: BookOpenCheck,
  },
  {
    image: "day-debrief" as const,
    time: "16:00",
    title: "Close the loop",
    body: "Debrief with the supervisor and update the logbook.",
    icon: UserCheck,
  },
];

const TAKEAWAYS = [
  "How internal QC — Levey–Jennings charts, for example — decides whether a run can be trusted at all",
  "Why traceability and turnaround time matter as much as the result itself",
  "How to work alongside technologists, clinicians / QA officers and support staff",
];

export function Experience() {
  const reducedMotion = useReducedMotion();
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 70%", "end 65%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience" className="bg-paper">
      <SectionHeading
        index="05"
        kicker="Experience"
        title={
          <>
            Attachment: where the bench met the{" "}
            <em className="text-ember">clock</em>.
          </>
        }
        lede={
          <>
            Industrial attachment at <Ph>Organisation</Ph> —{" "}
            <Ph>Department / Laboratory</Ph>, <Ph>Town</Ph>, Kenya ·{" "}
            <Ph>N weeks</Ph> · Supervisor: <Ph>Name, Title</Ph> ·{" "}
            <Ph>sector</Ph>
          </>
        }
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* typical day timeline */}
        <div>
          <CardImage name="lab-bench" className="mb-8" sizes="(min-width: 1024px) 560px, 100vw" />
          <Reveal>
            <h3 className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.22em] text-ink-soft">
              A typical day
              <span aria-hidden className="h-px flex-1 bg-line" />
            </h3>
          </Reveal>

          <div ref={lineRef} className="relative mt-8 pl-2">
            {/* rail */}
            <div
              aria-hidden
              className="absolute bottom-2 left-[1.15rem] top-2 w-px bg-line"
            />
            <m.div
              aria-hidden
              style={{ scaleY: reducedMotion ? 1 : lineScale, transformOrigin: "top", height: "calc(100% - 1rem)" }}
              className="absolute bottom-2 left-[1.15rem] top-2 w-px origin-top bg-ember"
            />
            <div className="space-y-8">
              {DAY.map((d, i) => (
                <m.div
                  key={d.time}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex gap-5"
                >
                  <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ember/35 bg-cardwash text-ember-deep shadow-sm">
                    <d.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1 rounded-2xl border border-line bg-cardwash p-4 sm:p-5">
                    <CardImage name={d.image} className="mb-4 aspect-[2/1]" sizes="(min-width: 1024px) 480px, 100vw" />
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ember">
                      {d.time}
                    </p>
                    <h4 className="mt-1 font-display text-lg font-semibold tracking-tight">
                      {d.title}
                    </h4>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                      {d.body}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>

        {/* side column: QC chart + takeaways */}
        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}>
            <m.figure
              whileHover={{ scale: 0.99 }}
              className="group overflow-hidden rounded-2xl border border-line bg-cardwash"
            >
              <div className="relative aspect-[8/4.6]">
                <Image
                  src="/images/stanley/chart-qc.png"
                  alt="Levey-Jennings quality control chart with one flagged point beyond two standard deviations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 34rem, 24rem"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                  why a run gets trusted — Levey–Jennings, live
                </span>
                <span className="font-mono text-[10px] text-ember-deep">
                  fig. 04
                </span>
              </figcaption>
            </m.figure>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-line bg-cream/70 p-6 sm:p-7">
              <CardImage name="method-quality" className="mb-5" sizes="(min-width: 1024px) 480px, 100vw" />
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-ink-soft">
                What I took away
              </h3>
              <ul className="mt-4 space-y-3.5">
                {TAKEAWAYS.map((t) => (
                  <li key={t} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                <Chip tone="outline">Attachment logbook</Chip>
                <Chip tone="outline">Supervisor assessment PDF</Chip>
                <Chip tone="outline">Final attachment report PDF</Chip>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* research assistant block */}
      <Reveal delay={0.08}>
        <div className="mt-10 grid gap-6 rounded-2xl border border-dashed border-line bg-cream/50 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-7">
          <CardImage name="research-support" className="w-full sm:w-48" sizes="(min-width: 640px) 192px, 100vw" />

          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint"><Ph>Month YYYY – Month YYYY</Ph></p>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Research assistant / volunteer — <Ph>Lab or project</Ph>
            </h3>
            <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-ink-soft">
              <li>· Prepared samples for a named project, batch after batch.</li>
              <li>· Kept the reagent inventory current and the shelf honest.</li>
              <li>
                · <Ph>Outcome — e.g. named in the acknowledgements of a report</Ph>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
