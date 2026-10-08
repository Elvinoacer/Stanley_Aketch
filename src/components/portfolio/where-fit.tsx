"use client";

import { CardImage } from "./card-image";
import { m } from "framer-motion";
import {
  Stethoscope,
  PackageCheck,
  Microscope,
  HeartPulse,
  GraduationCap,
  ArrowRight,
  MapPin,
  CalendarClock,
  FileUser,
  MoveRight,
} from "lucide-react";
import { Chip, Ph, Reveal, Section, SectionHeading, Stagger, StaggerItem } from "./primitives";

const FITS = [
  {
    icon: Stethoscope,
    rank: "1",
    match: "Strongest fit",
    image: "clinical-diagnostics" as const,
    title: "Clinical & diagnostic laboratory support",
    where: ["MTRH", "AMPATH", "NPHL", "county referral hospitals"],
    bring: "sample handling · colorimetric assays · internal QC · accurate result entry",
  },
  {
    icon: PackageCheck,
    rank: "2",
    match: "Strong fit",
    image: "food-quality" as const,
    title: "Quality control & food analysis",
    where: ["food & beverage manufacturers", "KEBS", "Kenya Dairy Board", "KEPHIS"],
    bring: "proximate analysis · GLP awareness · instrument checks · SOP discipline",
  },
  {
    icon: Microscope,
    rank: "3",
    match: "Strong fit",
    image: "research-support" as const,
    title: "Research assistant / laboratory technologist",
    where: ["KEMRI", "KALRO", "KIRDI", "universities"],
    bring: "assay support · careful data capture · tidy statistics in R or Excel",
  },
  {
    icon: HeartPulse,
    rank: "4",
    match: "Good fit",
    image: "public-health" as const,
    title: "Public-health & nutrition programmes",
    where: ["NGOs", "county health teams", "research programmes"],
    bring: "data cleaning · indicator analysis · plain-language reporting",
  },
  {
    icon: GraduationCap,
    rank: "5",
    match: "The longer arc",
    image: "postgraduate-study" as const,
    title: "Postgraduate study",
    where: ["MSc Biochemistry", "Clinical Chemistry", "Nutrition", "Biotechnology", "Public Health"],
    bring: "a research record and academic referees",
  },
];

const QUICK = [
  { image: "what-next" as const, icon: MapPin, q: "Relocate within Kenya?", a: "Yes / No / Depends on the role" },
  { image: "day-opening" as const, icon: CalendarClock, q: "Shifts, weekends, field days?", a: "Yes / No" },
  { image: "looking-for" as const, icon: CalendarClock, q: "Start date?", a: "Immediately / Month YYYY" },
  { image: "supervisor-feedback" as const, icon: FileUser, q: "References?", a: "Available on request" },
];

export function WhereFit() {
  return (
    <Section id="fit" className="bg-paper">
      <SectionHeading
        index="03"
        kicker="Where I'd fit"
        title={
          <>
            Five doors, ranked by how well they{" "}
            <em className="text-ember">open</em>.
          </>
        }
        lede="In order of fit — reorder to match Stanley's real preferences. Each door names the kind of employer and what I'd carry through it."
      />

      <Stagger className="mt-12 flex flex-col gap-4" gap={0.08}>
        {FITS.map((f) => (
          <StaggerItem key={f.rank}>
            <m.article
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="group grid gap-5 rounded-2xl border border-line bg-cardwash p-6 sm:grid-cols-[12rem_1fr_auto] sm:items-center sm:gap-7 sm:p-7"
            >
              <div className="relative">
                <CardImage name={f.image} sizes="(min-width: 640px) 192px, 100vw" />
                <span className="absolute bottom-3 left-3 rounded-full bg-espresso/90 px-3 py-1 font-mono text-[10px] text-paper">{f.rank} · {f.match}</span>
              </div>


              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-[1.35rem]">
                  {f.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {f.where.map((w) => (
                    <Chip key={w} tone="sand">
                      {w}
                    </Chip>
                  ))}
                </div>
                <p className="mt-3.5 text-[14px] leading-relaxed text-ink-soft">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                    What I bring —{" "}
                  </span>
                  {f.bring}
                </p>
              </div>

              <span className="hidden h-11 w-11 place-items-center rounded-full border border-line text-ink-faint transition-all duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-paper sm:grid">
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </span>
            </m.article>
          </StaggerItem>
        ))}
      </Stagger>

      {/* quick answers */}
      <Reveal delay={0.1}>
        <div className="mt-10 rounded-2xl border border-dashed border-ember/40 bg-ember-mist/60 p-6 sm:p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-ember-deep">
            Quick answers for recruiters
          </h3>
          <dl className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK.map((q) => (
              <div key={q.q} className="flex flex-col gap-3">
                <CardImage name={q.image} className="w-full aspect-[2/1]" sizes="(min-width: 1024px) 250px, (min-width: 640px) 50vw, 100vw" />
                <q.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ember" aria-hidden />
                <div>
                  <dt className="text-[13px] font-semibold text-ink">{q.q}</dt>
                  <dd className="mt-0.5 text-[13px] text-ink-soft">
                    {q.a.includes("/") && q.a !== "Available on request" ? (
                      <Ph>{q.a}</Ph>
                    ) : (
                      q.a
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
          <MoveRight className="h-4 w-4 text-ember" aria-hidden />
          The evidence for each door sits in the case files below.
        </p>
      </Reveal>
    </Section>
  );
}
