"use client";

import { CardImage } from "./card-image";
import Image from "next/image";
import { portfolioImages } from "@/lib/portfolio-images";
import { m } from "framer-motion";
import { Flag, Quote, TrendingUp, Rocket } from "lucide-react";
import { Ph, Reveal, Section, SectionHeading, Stagger, StaggerItem } from "./primitives";

/* ================================================================ */
/* 09 — What others say                                              */
/* ================================================================ */
const QUOTES = [
  {
    image: "supervisor-feedback" as const,
    quote:
      "[One or two sentences from an attachment supervisor on reliability, accuracy and attitude at the bench.]",
    name: "Name",
    role: "Title, Organisation",
  },
  {
    image: "academic-feedback" as const,
    quote:
      "[One sentence from a lecturer or project supervisor on curiosity, writing or analysis.]",
    name: "Name",
    role: "Title, Moi University",
  },
];

export function Testimonials() {
  return (
    <section id="voices" className="relative overflow-hidden bg-espresso py-20 sm:py-28">
      {/* ambient art */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        }}
      >
        <Image src={portfolioImages["molecules-dark"]} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          dark
          index="09"
          kicker="What others say"
          title={
            <>
              Words I&apos;m working to{" "}
              <em className="text-ember-soft">keep earning</em>.
            </>
          }
          lede="Testimonials land here once referees approve the wording — their contact details stay in the downloadable CV, never on the page."
        />

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2" gap={0.12}>
          {QUOTES.map((q, i) => (
            <StaggerItem key={i}>
              <m.blockquote
                whileHover={{ y: -5 }}
                className="relative h-full rounded-2xl border border-ember-soft/20 bg-espresso-soft/80 p-7 backdrop-blur sm:p-8"
              >
                <CardImage name={q.image} className="mb-6" sizes="(min-width: 768px) 540px, 100vw" />
                <Quote
                  className="absolute right-6 bottom-6 h-7 w-7 text-ember-soft/40"
                  aria-hidden
                />
                <p className="font-display text-lg italic leading-relaxed text-paper/90 sm:text-xl">
                  {q.quote}
                </p>
                <footer className="mt-6 flex items-center gap-3.5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ember font-display text-sm font-bold text-paper">
                    {q.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-paper">
                      <Ph dark>{q.name}</Ph>
                    </p>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-faint">
                      <Ph dark>{q.role}</Ph>
                    </p>
                  </div>
                </footer>
              </m.blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ================================================================ */
/* 10 — If you hire me                                               */
/* ================================================================ */
const PLAN = [
  {
    image: "first-thirty-days" as const,
    window: "Days 1–30",
    title: "Learn the ground",
    body: "SOPs, safety rules and instruments. Shadow, ask questions, keep a clean notebook.",
  },
  {
    image: "next-thirty-days" as const,
    window: "Days 31–60",
    title: "Own the routine",
    body: "Take ownership of routine assays under supervision and keep QC records without being reminded.",
  },
  {
    image: "ninety-days" as const,
    window: "Days 61–90",
    title: "Run solo, improve one thing",
    body: "Run a full batch independently and suggest one small improvement — a labelling step, a logging step.",
  },
];

const ARC = [
  { image: "research-support" as const, period: "Year 1", body: "Deepen one specialism — clinical chemistry or food analysis; join a relevant professional body." },
  { image: "research-presentation" as const, period: "Years 2–3", body: "Turn the thesis into a paper; finish any pending certifications." },
  { image: "postgraduate-study" as const, period: "Years 3–5", body: "MSc in [field], targeting [programmes]." },
];

export function HireMe() {
  return (
    <Section id="hire" className="bg-paper">
      <SectionHeading
        index="10"
        kicker="If you hire me"
        title={
          <>
            The first 90 days, then the{" "}
            <em className="text-ember">longer arc</em>.
          </>
        }
        lede="A plan I'd be happy to be held to — milestones you can check at each review."
      />

      <Stagger className="mt-12 grid gap-5 md:grid-cols-3" gap={0.1}>
        {PLAN.map((p, i) => (
          <StaggerItem key={p.window}>
            <m.div
              whileHover={{ y: -6 }}
              className="relative h-full rounded-2xl border border-line bg-cardwash p-6 sm:p-7"
            >
              <CardImage name={p.image} className="mb-5" />
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-ember px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-paper">
                  {p.window}
                </span>
                {i === 2 ? (
                  <Rocket className="h-5 w-5 text-ember" aria-hidden />
                ) : (
                  <Flag className="h-5 w-5 text-ink-faint" aria-hidden />
                )}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">
                {p.body}
              </p>
              {i < 2 && (
                <m.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                  className="absolute -right-3 top-1/2 hidden h-px w-6 origin-left bg-ember/50 md:block"
                />
              )}
            </m.div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-10 rounded-2xl border border-line bg-cream/70 p-6 sm:p-8">
          <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-soft">
            <TrendingUp className="h-4 w-4 text-ember" aria-hidden />
            The longer arc
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {ARC.map((a) => (
              <div key={a.period} className="relative border-l-2 border-ember/30 pl-5">
                <CardImage name={a.image} className="mb-4" />
                <p className="font-display text-lg font-semibold text-ink">
                  {a.period}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
