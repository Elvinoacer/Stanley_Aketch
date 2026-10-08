"use client";

import { CardImage } from "./card-image";
import { m } from "framer-motion";
import {
  FileText,
  GitBranch,
  Link2,
  Microscope,
  Sprout,
  TerminalSquare,
  Users,
} from "lucide-react";
import { portfolioImages } from "@/lib/portfolio-images";
import Image from "next/image";
import { Chip, Ph, Reveal, Section, SectionHeading, Stagger, StaggerItem } from "./primitives";

/* ---------------------------------------------------------------- */
/* Case file 1 — flagship thesis                                     */
/* ---------------------------------------------------------------- */
const META = [
  ["Type", "Undergraduate thesis · B.Sc. Biochemistry"],
  ["Supervisor", "Dr./Prof. Name · Department · Moi University"],
  ["Period", "Month YYYY – Month YYYY"],
  ["Setting", "Moi University / hospital / partner laboratory"],
  ["Ethics", "Approval reference & body (e.g. MU/MTRH IREC)"],
  ["Outputs", "Thesis PDF · Poster · Defence slides"],
];

const STEPS = [
  {
    image: "method-sampling" as const,
    n: "1",
    title: "Sample",
    body: "N participants recruited with informed consent; blood collected by trained staff; serum separated and stored at −20 °C until analysis.",
  },
  {
    image: "method-assays" as const,
    n: "2",
    title: "Assays",
    body: "Glucose, total cholesterol, triglycerides, HDL-C, ALT and AST by kit-based methods on a spectrophotometer; LDL-C via the Friedewald equation.",
  },
  {
    image: "method-quality" as const,
    n: "3",
    title: "Quality",
    body: "Calibrators and two control levels with every batch — results released only when controls sat inside their limits.",
  },
  {
    image: "method-analysis" as const,
    n: "4",
    title: "Analysis",
    body: "Mean ± SD, t-test / ANOVA, Pearson or Spearman correlation and chi-square in SPSS / R / Excel; p < 0.05 the threshold.",
  },
];

const RESULTS = [
  ["Fasting glucose", "X ± Y mmol/L", "3.9 – 6.1", "N% above range"],
  ["Total cholesterol", "X ± Y mmol/L", "< 5.2", "comment"],
  ["ALT", "X ± Y U/L", "0 – 41", "comment"],
];

function CaseFile1() {
  return (
    <m.article
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-3xl border border-line bg-cardwash shadow-[0_30px_60px_-35px_rgba(37,26,18,0.4)]"
    >
      <CardImage name="thesis-research" className="aspect-[3/1] rounded-none" sizes="(min-width: 1024px) 1100px, 100vw" />
      {/* header */}
      <div className="border-b border-line bg-espresso px-6 py-7 sm:px-9 sm:py-9">
        <p className="flex flex-wrap items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ember-soft">
          <span className="rounded-full border border-ember-soft/40 px-2.5 py-1">
            Case file 01
          </span>
          <span className="text-ink-faint">flagship · final-year research</span>
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-paper sm:text-[2rem]">
          <span className="text-ember-soft">Fasting Glucose, Lipid Profile and
          Liver Enzymes in</span>{" "}
          <Ph dark>[Population]</Ph>
          <span className="text-ember-soft">: A Cross-Sectional Laboratory Study</span>
        </h3>
      </div>

      <div className="px-6 py-8 sm:px-9 sm:py-10">
        {/* meta grid */}
        <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {META.map(([k, v]) => (
            <div key={k} className="border-l-2 border-ember/30 pl-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                {k}
              </dt>
              <dd className="mt-1 text-[13.5px] leading-snug text-ink-soft">
                {v.match(/(Dr\.|Month|Moi University \/|Approval)/) ? (
                  <Ph>{v}</Ph>
                ) : (
                  v
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* problem + image */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-ember-deep">
              The problem
            </h4>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Routine data on <Ph>[markers]</Ph> in <Ph>[population]</Ph> is
              sparse, so it is hard to say how common abnormal values are.
              This study measured <Ph>N</Ph> markers in{" "}
              <Ph>N participants</Ph> to describe{" "}
              <Ph>[the outcome of interest]</Ph> — with every batch
              controlled before a single sample was reported.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip tone="ember">
                <Microscope className="h-3 w-3" aria-hidden /> kit-based serum assays
              </Chip>
              <Chip tone="ember">internal QC, two levels</Chip>
              <Chip tone="ember">Friedewald LDL-C</Chip>
            </div>
          </div>
          <m.figure
            whileHover={{ scale: 0.99 }}
            className="group relative overflow-hidden rounded-2xl border border-line"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={portfolioImages["method-assays"]}
                placeholder="blur"
                alt="A row of cuvettes holding colour-graded assay solutions from pale yellow to deep amber"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 32rem, 20rem"
              />
            </div>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-espresso/85 to-transparent px-4 pb-3 pt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/90">
              Colour speaks before numbers do — the assay line-up
            </figcaption>
          </m.figure>
        </div>

        {/* how it worked */}
        <h4 className="mt-12 font-mono text-xs uppercase tracking-[0.22em] text-ember-deep">
          How it worked
        </h4>
        <Stagger className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <div className="h-full rounded-2xl border border-line bg-cream/70 p-5">
                <CardImage name={s.image} className="mb-4" sizes="(min-width: 1024px) 250px, (min-width: 640px) 50vw, 100vw" />
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ember font-mono text-xs font-bold text-paper">
                  {s.n}
                </span>
                <h5 className="mt-3.5 font-display text-lg font-semibold tracking-tight">
                  {s.title}
                </h5>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* results */}
        <h4 className="mt-12 font-mono text-xs uppercase tracking-[0.22em] text-ember-deep">
          What I found
        </h4>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[430px] border-collapse text-left text-[13.5px]">
              <thead>
                <tr className="bg-espresso font-mono text-[10px] uppercase tracking-[0.16em] text-ember-soft">
                  <th className="px-4 py-3 font-medium">Marker</th>
                  <th className="px-4 py-3 font-medium">Result (mean ± SD)</th>
                  <th className="px-4 py-3 font-medium">Reference</th>
                  <th className="px-4 py-3 font-medium">Comment</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS.map((r, i) => (
                  <tr
                    key={r[0]}
                    className={
                      i % 2 === 0 ? "bg-cardwash" : "bg-cream/60"
                    }
                  >
                    <td className="px-4 py-3 font-semibold text-ink">{r[0]}</td>
                    <td className="px-4 py-3 text-ink-soft">
                      <Ph>{r[1]}</Ph>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-ink-soft">
                      {r[2]}
                    </td>
                    <td className="px-4 py-3 text-ink-soft">
                      <Ph>{r[3]}</Ph>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-line bg-ember-mist/50 px-4 py-2.5 font-mono text-[10.5px] text-ink-soft">
              Replace with real results — the charts below show the shape of
              the story, not the final numbers.
            </p>
          </div>

          <m.figure
            whileHover={{ scale: 0.99 }}
            className="group relative overflow-hidden rounded-2xl border border-line bg-paper"
          >
            <div className="relative aspect-[8/5.2]">
              <Image
                src="/images/stanley/chart-results.png"
                alt="Bar chart comparing study means against clinical reference ranges for glucose, cholesterol, triglycerides, HDL-C and ALT"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 28rem, 20rem"
              />
            </div>
            <figcaption className="flex items-center justify-between border-t border-line bg-cardwash px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
              <span>means ± SD against reference ranges</span>
              <span className="text-ember-deep">fig. 02</span>
            </figcaption>
          </m.figure>
        </div>

        <m.figure
          whileHover={{ scale: 0.995 }}
          className="group relative mt-6 overflow-hidden rounded-2xl border border-line bg-paper"
        >
          <div className="relative aspect-[8/3.4]">
            <Image
              src="/images/stanley/chart-calibration.png"
              alt="Glucose assay calibration curve plotting absorbance against standard concentration with a fitted linear regression"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="60rem"
            />
          </div>
          <figcaption className="flex items-center justify-between border-t border-line bg-cardwash px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
            <span>the calibration curve behind every reported value — R² = 0.9995</span>
            <span className="text-ember-deep">fig. 03</span>
          </figcaption>
        </m.figure>

        {/* limits + my part */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-line bg-cream/60 p-6">
            <CardImage name="research-support" className="mb-4 aspect-[2/1]" />
            <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-faint">
              Limits & next step
            </h4>
            <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">
              <Ph>One or two honest limitations — small sample, single site,
              self-reported fasting status.</Ph>{" "}
              Next: repeat with a larger sample, or add follow-up
              measurements.
            </p>
          </div>
          <div className="rounded-2xl border border-ember/25 bg-ember-mist/50 p-6">
            <CardImage name="what-i-do" className="mb-4 aspect-[2/1]" />
            <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ember-deep">
              My part
            </h4>
            <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">
              Planned the sampling protocol with my supervisor, ran every
              assay, kept the QC records, analysed the data, wrote the thesis
              and defended it at <Ph>[event]</Ph>.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {["Thesis PDF", "Poster", "Defence slides"].map((l) => (
            <Chip key={l} tone="outline" className="cursor-pointer transition-colors hover:border-ember/50 hover:text-ember-deep">
              <Link2 className="h-3 w-3" aria-hidden /> {l} —{" "}
              <Ph>link</Ph>
            </Chip>
          ))}
        </div>
      </div>
    </m.article>
  );
}

/* ---------------------------------------------------------------- */
/* Case file 2 — food chemistry                                      */
/* ---------------------------------------------------------------- */
function CaseFile2() {
  return (
    <m.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid overflow-hidden rounded-3xl border border-line bg-cardwash shadow-[0_24px_50px_-35px_rgba(37,26,18,0.35)] lg:grid-cols-[0.95fr_1.05fr]"
    >
      <m.figure whileHover={{ scale: 0.99 }} className="group relative min-h-64 overflow-hidden">
        <Image
          src={portfolioImages["food-analysis"]}
          placeholder="blur"
          alt="Sorghum and millet grains and bowls of porridge flour beside laboratory glassware on a wooden table"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 30rem, 24rem"
        />
        <span className="absolute left-4 top-4 rounded-full bg-espresso/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ember-soft backdrop-blur">
          Case file 02 · food chemistry
        </span>
      </m.figure>

      <div className="p-6 sm:p-9">
        <h3 className="font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
          Proximate Composition and Mineral Content of Locally Processed
          Porridge Flours
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
          <Ph>[Semester, YYYY]</Ph> · team of <Ph>N</Ph> · lead on protein & fat
          determination
        </p>

        <dl className="mt-6 space-y-4 text-[14px] leading-relaxed">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-deep">
              Problem
            </dt>
            <dd className="mt-1 text-ink-soft">
              Composition claims on packaged flours are rarely checked against
              measured values.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-deep">
              Approach
            </dt>
            <dd className="mt-1 text-ink-soft">
              Standard AOAC methods — moisture by oven drying, ash in a muffle
              furnace, crude protein by Kjeldahl, crude fat by Soxhlet, fibre,
              carbohydrate by difference — plus <Ph>Fe / Zn / Ca</Ph> by
              atomic absorption spectroscopy under supervision.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-deep">
              Result
            </dt>
            <dd className="mt-1 text-ink-soft">
              Sample C had the highest protein (<Ph>X g/100 g</Ph>), but its
              measured iron fell below the label claim.
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-2">
          {["proximate analysis", "titration", "gravimetric methods", "supervised AAS", "technical reporting"].map(
            (s) => (
              <Chip key={s} tone="sage">
                {s}
              </Chip>
            ),
          )}
        </div>
        <p className="mt-5 font-mono text-[11px] text-ink-faint">
          <FileText className="mr-1.5 inline h-3.5 w-3.5" aria-hidden />
          Full report — <Ph>link</Ph>
        </p>
      </div>
    </m.article>
  );
}

/* ---------------------------------------------------------------- */
/* Case file 3 — health data (dark terminal card)                    */
/* ---------------------------------------------------------------- */
function CaseFile3() {
  return (
    <m.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-espresso bg-espresso text-paper shadow-[0_30px_60px_-35px_rgba(31,21,16,0.8)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 opacity-25 mix-blend-screen"
        style={{
          maskImage: "radial-gradient(closest-side, black, transparent)",
          WebkitMaskImage: "radial-gradient(closest-side, black, transparent)",
        }}
      >
        <Image src={portfolioImages["molecules-dark"]} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <CardImage name="health-data" className="aspect-[3/1] rounded-none" sizes="(min-width: 1024px) 1100px, 100vw" />
      <div className="relative p-6 sm:p-9 lg:p-10">
        <p className="flex flex-wrap items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ember-soft">
          <TerminalSquare className="h-4 w-4" aria-hidden />
          <span className="rounded-full border border-ember-soft/40 px-2.5 py-1">
            Case file 03 · health data
          </span>
          <span className="text-ink-faint">solo project</span>
        </p>

        <h3 className="mt-4 font-display text-xl font-semibold leading-tight tracking-tight text-paper sm:text-2xl">
          Child Nutrition Indicators Across Kenyan Counties: An Exploratory
          Analysis
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
          <Ph dark>[Semester, YYYY]</Ph>
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto]">
          <div className="space-y-4 text-[14px] leading-relaxed text-ink-faint">
            <p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-soft">
                Problem —{" "}
              </span>
              Which counties carry the heaviest child-nutrition burden, and
              does the pattern follow wealth, geography or both?
            </p>
            <p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-soft">
                Approach —{" "}
              </span>
              Cleaned <Ph dark>[KNBS / DHS survey tables]</Ph> in R, summarised
              indicators by county, charted with ggplot2 — and kept every step
              in a script so the whole analysis can be rerun with one command.
            </p>
            <p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-soft">
                Result —{" "}
              </span>
              <Ph dark>[the main pattern found, one sentence]</Ph>
            </p>
            <p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-soft">
                Next —{" "}
              </span>
              Link survey indicators to lab-measured nutrition markers.
            </p>
          </div>

          <div className="lg:w-72">
            <div className="rounded-2xl border border-ember-soft/20 bg-espresso-soft p-4 font-mono text-[11.5px] leading-relaxed">
              <p className="text-ink-faint">
                <span className="text-sage"># reproducible by design</span>
              </p>
              <p className="mt-2 text-paper/85">
                county_nutrition <span className="text-ember-soft">|&gt;</span>
              </p>
              <p className="pl-3 text-paper/70">group_by(county)</p>
              <p className="pl-3 text-paper/70">
                summarise(stunting, wasting, underweight)
              </p>
              <p className="pl-3 text-paper/70">ggplot(aes(x, y, fill = region))</p>
              <p className="mt-2 text-ink-faint">
                <span className="text-ember-soft">✓</span> script runs end-to-end ·
                seed set · data versioned
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["data cleaning", "R", "ggplot2", "reproducible analysis"].map((s) => (
                <Chip key={s} tone="dark">
                  {s}
                </Chip>
              ))}
            </div>
            <p className="mt-4 font-mono text-[11px] text-ink-faint">
              <GitBranch className="mr-1.5 inline h-3.5 w-3.5" aria-hidden />
              Code on GitHub — <Ph dark>link</Ph> · Report — <Ph dark>link</Ph>
            </p>
          </div>
        </div>
      </div>
    </m.article>
  );
}

/* ---------------------------------------------------------------- */
/* Section shell                                                     */
/* ---------------------------------------------------------------- */
export function SelectedWork() {
  return (
    <Section id="work" className="bg-cream">
      <SectionHeading
        index="04"
        kicker="Selected work"
        title={
          <>
            Three case files — problem, approach, result,{" "}
            <em className="text-ember">next step</em>.
          </>
        }
        lede="Strongest first. Every project here ended with something you can hold: a defended thesis, a checked label, a rerunnable script."
      />

      <div className="mt-12 flex flex-col gap-8 sm:gap-10">
        <Reveal>
          <CaseFile1 />
        </Reveal>
        <CaseFile2 />
        <CaseFile3 />
      </div>

      {/* also worth a line */}
      <Reveal delay={0.08}>
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-line bg-paper/70 px-6 py-5">
          <CardImage name="volunteering" className="h-24 w-full sm:w-36" sizes="(min-width: 640px) 144px, 100vw" />
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ember-mist text-ember-deep">
            <Users className="h-4.5 w-4.5" aria-hidden />
          </span>
          <p className="text-[14px] leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">
              Also worth a line —{" "}
            </span>
            Community talk: <em className="font-display">Reading Your Lab
            Results</em>, <Ph>[Month YYYY]</Ph>, <Ph>N</Ph> attendees ·
            explained the topic in plain Kiswahili and English.
          </p>
          <Sprout className="ml-auto hidden h-5 w-5 text-sage sm:block" aria-hidden />
        </div>
      </Reveal>
    </Section>
  );
}
