"use client";

import { CardImage } from "./card-image";
import { m } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  Medal,
  Mic,
  Presentation,
  School,
} from "lucide-react";
import { Ph, Reveal, Section, SectionHeading, Stagger, StaggerItem } from "./primitives";

const YEARS = [
  {
    image: "year-one" as const,
    year: "Year 1",
    focus: "Foundations",
    units: ["General Chemistry", "Cell Biology", "Mathematics & Statistics", "Communication Skills"],
  },
  {
    image: "year-two" as const,
    year: "Year 2",
    focus: "Core biochemistry",
    units: ["Metabolism & Bioenergetics", "Protein Chemistry", "Analytical Chemistry", "Microbiology", "Genetics"],
  },
  {
    image: "year-three" as const,
    year: "Year 3",
    focus: "Specialisation",
    units: ["Enzymology", "Molecular Biology", "Clinical Biochemistry", "Immunology", "Instrumental Methods"],
  },
  {
    image: "year-four" as const,
    year: "Year 4",
    focus: "Applied & research",
    units: ["Nutritional Biochemistry", "Toxicology", "Bioinformatics", "Biostatistics", "Research Methods", "final-year project"],
  },
];

const CREDS = [
  { type: "Certificate", title: "Good Laboratory Practice / lab safety", issuer: "Provider", year: "YYYY" },
  { type: "Certificate", title: "Good Clinical Practice (GCP)", issuer: "Provider", year: "YYYY" },
  { type: "Certificate", title: "Data analysis with R", issuer: "Provider", year: "YYYY" },
  { type: "Certificate", title: "First aid", issuer: "Provider", year: "YYYY" },
  { type: "Award", title: "Dean's list / academic merit", issuer: "Moi University", year: "YYYY" },
  { type: "Scholarship", title: "Bursary or scholarship", issuer: "Provider", year: "YYYY" },
  { type: "Competition", title: "Best poster / best project", issuer: "Organiser", year: "YYYY" },
];

const TALKS = [
  {
    icon: Presentation,
    text: "Poster — [Title], University research week / symposium, [Month YYYY]",
  },
  {
    icon: Mic,
    text: "Oral defence — [Thesis title], Moi University, [Department], [Month YYYY]",
  },
  {
    icon: BookOpen,
    text: "In preparation — [Working title], target journal [name]",
  },
];

export function LearningPath() {
  return (
    <Section id="path" className="bg-paper">
      <SectionHeading
        index="07"
        kicker="Learning path"
        title={
          <>
            Four years of Moi University,{" "}
            <em className="text-ember">year by year</em>.
          </>
        }
        lede={
          <>
            B.Sc. Biochemistry · <Ph>Month YYYY – Month YYYY</Ph> ·{" "}
            <Ph>Classification</Ph> · <Ph>School / Department</Ph> · Campus,
            Eldoret
          </>
        }
      />

      {/* degree timeline */}
      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
        {YEARS.map((y, i) => (
          <StaggerItem key={y.year}>
            <m.div
              whileHover={{ y: -5 }}
              className="relative h-full overflow-hidden rounded-2xl border border-line bg-cardwash p-6"
            >
              <CardImage name={y.image} className="mb-5" sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw" />
              <span
                aria-hidden
                className="absolute -right-3 -top-5 font-display text-[4.5rem] font-bold leading-none text-sand/80"
              >
                {i + 1}
              </span>
              <p className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-ember-deep">
                {y.year}
              </p>
              <h3 className="relative mt-2 font-display text-lg font-semibold tracking-tight">
                {y.focus}
              </h3>
              <ul className="relative mt-3.5 space-y-1.5">
                {y.units.map((u) => (
                  <li key={u} className="text-[12.5px] leading-snug text-ink-soft">
                    · {u}
                  </li>
                ))}
              </ul>
            </m.div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.08}>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {[
            "Industrial attachment — [Year / period]",
            "Honours — Dean's list / merit awards",
            "Secondary school — [School], [County], KCSE [YYYY], mean grade [X]",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-dashed border-line bg-cream/60 px-4 py-2 font-mono text-[11px] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      {/* credentials + talks */}
      <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-cardwash">
            <CardImage name="credentials" className="aspect-[3/1] rounded-none" sizes="(min-width: 1024px) 640px, 100vw" />
            <div className="flex items-center gap-3 border-b border-line bg-espresso px-6 py-4">
              <Medal className="h-4 w-4 text-ember-soft" aria-hidden />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper">
                Credentials & recognition
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-[13.5px]">
                <thead>
                  <tr className="border-b border-line font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                    <th className="px-5 py-3 font-medium">Type</th>
                    <th className="px-5 py-3 font-medium">Title</th>
                    <th className="px-5 py-3 font-medium">Issuer</th>
                    <th className="px-5 py-3 font-medium">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {CREDS.map((c, i) => (
                    <tr
                      key={c.title}
                      className={`transition-colors hover:bg-ember-mist/50 ${i % 2 === 0 ? "bg-cardwash" : "bg-cream/50"}`}
                    >
                      <td className="whitespace-nowrap px-5 py-3">
                        <span className="inline-flex items-center gap-1.5">
                          {c.type === "Award" ? (
                            <Award className="h-3.5 w-3.5 text-ember" aria-hidden />
                          ) : c.type === "Competition" ? (
                            <GraduationCap className="h-3.5 w-3.5 text-ember" aria-hidden />
                          ) : (
                            <School className="h-3.5 w-3.5 text-ember" aria-hidden />
                          )}
                          <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                            {c.type}
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-3 font-medium text-ink">{c.title}</td>
                      <td className="px-5 py-3 text-ink-soft">
                        {c.issuer === "Moi University" ? (
                          "Moi University"
                        ) : (
                          <Ph>{c.issuer}</Ph>
                        )}
                      </td>
                      <td className="px-5 py-3 font-mono text-xs text-ink-soft">
                        <Ph>{c.year}</Ph>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-cream/70 p-6 sm:p-7">
            <CardImage name="research-presentation" className="mb-6" />
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              Posters, talks & papers
            </h3>
            <ul className="mt-5 flex-1 space-y-5">
              {TALKS.map((t) => (
                <li key={t.text} className="flex gap-3.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ember/30 bg-cardwash text-ember-deep">
                    <t.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-ink-soft">{t.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
              links land here once PDFs are uploaded
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ================================================================ */
/* 08 — Beyond the lab                                               */
/* ================================================================ */
const BEYOND = [
  {
    image: "people-skills" as const,
    title: "Leadership",
    body: "[Role], Biochemistry / Science students' association, [Year] — what I led or organised.",
  },
  {
    image: "peer-tutoring" as const,
    title: "Peer tutor",
    body: "[Units], [Year] — [number] of students supported through the hard chapters.",
  },
  {
    image: "volunteering" as const,
    title: "Volunteering",
    body: "[Community or health initiative], [Year] — what I did and who it helped.",
  },
  {
    image: "off-the-clock" as const,
    title: "Off the clock",
    body: "[Sport / music / faith group / club], [Year] — the line that shows personality.",
  },
];

const NOW = [
  { image: "currently-reading" as const, label: "Reading", value: "[paper, book or blog]" },
  { image: "currently-learning" as const, label: "Learning", value: "[R for biostatistics, or a new assay]" },
  { image: "looking-for" as const, label: "Looking for", value: "[role and type of organisation]" },
];

export function BeyondLab() {
  return (
    <Section id="beyond" className="bg-cream">
      <SectionHeading
        index="08"
        kicker="Beyond the lab"
        title={
          <>
            A person, not just a{" "}
            <em className="text-ember">pipette arm</em>.
          </>
        }
      />

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" gap={0.08}>
        {BEYOND.map((b) => (
          <StaggerItem key={b.title}>
            <m.div
              whileHover={{ y: -4 }}
              className="h-full rounded-2xl border border-line bg-cardwash p-6"
            >
              <CardImage name={b.image} className="mb-5" sizes="(min-width: 640px) 540px, 100vw" />
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {b.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                {b.body}
              </p>
            </m.div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-8 grid gap-4 rounded-2xl border border-ember/25 bg-espresso p-6 sm:grid-cols-3 sm:p-7">
          {NOW.map((n) => (
            <div key={n.label} className="flex flex-col gap-4">
              <CardImage name={n.image} className="w-full aspect-[2/1]" />
              <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ember-soft" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-soft">
                  {n.label}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-snug text-paper/85">
                  {n.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
