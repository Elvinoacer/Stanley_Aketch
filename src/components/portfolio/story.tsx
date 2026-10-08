"use client";

import { CardImage } from "./card-image";
import { m } from "framer-motion";
import {
  FlaskConical,
  History,
  Compass,
  PenLine,
  ShieldCheck,
  HardHat,
  MessagesSquare,
  Quote,
} from "lucide-react";
import { portfolioImages } from "@/lib/portfolio-images";
import Image from "next/image";
import { Ph, Reveal, Section, SectionHeading, Stagger, StaggerItem } from "./primitives";

/* ================================================================ */
/* 01 — The short version                                           */
/* ================================================================ */
const SHORT = [
  {
    icon: FlaskConical,
    image: "what-i-do" as const,
    title: "What I do",
    body: (
      <>
        I run careful, well-documented laboratory assays — mostly
        colorimetric and spectrophotometric — and I check my own numbers
        before anyone else has to. If a control drifts, I say so out loud.
      </>
    ),
  },
  {
    icon: History,
    image: "what-ive-done" as const,
    title: "What I've done",
    body: (
      <>
        <Ph>N</Ph> weeks on attachment at <Ph>Organisation</Ph>, a final-year
        project on <Ph>topic</Ph>, and two further projects in food chemistry
        and health data — each with a result you can point at.
      </>
    ),
  },
  {
    icon: Compass,
    image: "what-next" as const,
    title: "What I want next",
    body: (
      <>
        An entry-level role in a <Ph>clinical / QC / public-health</Ph>{" "}
        laboratory where I can learn fast and contribute early — then an MSc
        in <Ph>field</Ph> within <Ph>timeframe</Ph>.
      </>
    ),
  },
];

export function ShortVersion() {
  return (
    <Section id="story" className="bg-paper">
      <SectionHeading
        index="01"
        kicker="The short version"
        title={
          <>
            Three sentences before the scroll gets{" "}
            <em className="text-ember">serious</em>.
          </>
        }
        lede="The elevator pitch, the evidence, and the ambition — in that order."
      />

      <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
        {SHORT.map((card) => (
          <StaggerItem key={card.title}>
            <m.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group h-full rounded-2xl border border-line bg-cardwash p-6 sm:p-7"
            >
              <CardImage name={card.image} className="mb-6" />
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember-mist text-ember-deep transition-colors group-hover:bg-ember group-hover:text-paper">
                <card.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {card.body}
              </p>
            </m.article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ================================================================ */
/* 02 — Why biochemistry + working principles                        */
/* ================================================================ */
const PRINCIPLES = [
  {
    icon: PenLine,
    n: "01",
    image: "notebook" as const,
    title: "Write it down",
    body: "Methods, volumes, lot numbers and odd observations all go in the notebook — in ink, same day.",
  },
  {
    icon: ShieldCheck,
    n: "02",
    image: "controls-first" as const,
    title: "Controls first",
    body: "I run standards and controls before samples, and I say so when they fail. A pretty result with a dead control is not a result.",
  },
  {
    icon: HardHat,
    n: "03",
    image: "lab-safety" as const,
    title: "Safety is not optional",
    body: "PPE on, waste labelled, bench tidy — even when nobody is watching. Especially then.",
  },
  {
    icon: MessagesSquare,
    n: "04",
    image: "explain-results" as const,
    title: "Explain the result",
    body: "A number is only useful when the next person knows what it means. I write for the reader, not the archive.",
  },
];

export function WhyBiochem() {
  return (
    <Section id="why" className="bg-cream">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        <div>
          <SectionHeading
            index="02"
            kicker="Why biochemistry"
            title={
              <>
                The moment chemistry met{" "}
                <em className="text-ember">everyday health</em>.
              </>
            }
          />
          <Reveal delay={0.18}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft sm:text-[17px]">
              <p className="drop-cap">
                <Ph>Two or three sentences of origin story — the school
                practical, the hospital visit, or the lecture that made the
                chemistry of the body click.</Ph>{" "}
                That curiosity pulled me toward the parts of the course where
                chemistry meets everyday health: what a blood test{" "}
                <em className="font-display">really</em> measures, what is
                actually in the food we eat, and how a number on a report
                becomes a decision.
              </p>
              <p>
                Biochemistry turned out to be the rare subject where being
                careful is the whole job. Every assay is a small promise:
                this number is traceable, this run was controlled, this
                result can be defended.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <figure className="relative mt-9 rounded-2xl border border-ember/25 bg-espresso p-7 sm:p-8">
              <Quote
                className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-ember p-1.5 text-paper"
                aria-hidden
              />
              <blockquote className="pt-2">
                <p className="font-display text-xl italic leading-snug text-paper sm:text-2xl">
                  My rule at the bench:{" "}
                  <span className="text-ember-soft">
                    if it isn&apos;t written down, it didn&apos;t happen.
                  </span>
                </p>
              </blockquote>
              <figcaption className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-faint">
                — the sentence my lab mates got tired of hearing
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="self-start">
          <m.figure
            whileHover={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-line shadow-[0_24px_50px_-24px_rgba(37,26,18,0.45)]"
          >
            <div className="relative aspect-[4/3.4]">
              <Image
                src={portfolioImages["notebook"]}
                placeholder="blur"
                alt="An open laboratory notebook with handwritten methods beside a pen and safety glasses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 40rem, 24rem"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-line bg-cardwash px-5 py-3.5">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-soft">
                Bench notebook, dated and in ink
              </span>
              <span className="font-mono text-[10.5px] text-ember-deep">
                fig. 01
              </span>
            </figcaption>
          </m.figure>
        </Reveal>
      </div>

      {/* working principles */}
      <div className="mt-16 sm:mt-20">
        <Reveal>
          <h3 className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.22em] text-ink-soft">
            Working principles
            <span aria-hidden className="h-px flex-1 bg-line" />
          </h3>
        </Reveal>
        <Stagger className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <StaggerItem key={p.n}>
              <m.div
                whileHover={{ y: -5 }}
                className="h-full rounded-2xl border border-line bg-cardwash p-6"
              >
                <CardImage name={p.image} className="mb-5" sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw" />
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-ember/30 bg-ember-mist text-ember-deep">
                    <p.icon className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  <span className="font-display text-3xl font-semibold text-sand">
                    {p.n}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {p.title}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </m.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
