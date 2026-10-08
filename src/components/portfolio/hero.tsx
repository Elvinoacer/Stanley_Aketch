"use client";

import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FlaskConical, MousePointer2, BadgeCheck, TrendingUp } from "lucide-react";
import { portfolioImages } from "@/lib/portfolio-images";
import Image from "next/image";
import { useRef } from "react";
import { Ph } from "./primitives";

const easeOut = [0.22, 1, 0.36, 1] as const;

function RotatingBadge() {
  return (
    <div className="absolute -left-7 top-8 hidden h-28 w-28 sm:block lg:-left-10">
      <div className="animate-spin-slow absolute inset-0">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path
              id="badge-circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-ink font-mono text-[8.2px] uppercase tracking-[0.24em]">
            <textPath href="#badge-circle">
              careful · documented · repeated · checked ·
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-ember text-paper shadow-lg">
          <FlaskConical className="h-5 w-5" aria-hidden />
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const artOpacity = useTransform(scrollYProgress, [0, 0.85], [0.3, 0.08]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div id="top" ref={ref} className="relative overflow-hidden bg-paper">
      {/* ambient molecular art */}
      <m.div
        aria-hidden
        style={reducedMotion ? { opacity: 0.3 } : { y: artY, opacity: artOpacity }}
        className="pointer-events-none absolute inset-y-0 right-0 w-full"
      >
        <Image
          src={portfolioImages["hero-art"]}
          placeholder="blur"
          alt=""
          fill
          loading="eager"
          className="object-cover object-right [mask-image:linear-gradient(to_left,black_35%,transparent_88%)]"
          sizes="100vw"
        />
      </m.div>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-ember-mist blur-3xl opacity-70"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-24">
        {/* ---------------- left column ---------------- */}
        <div className="flex flex-col justify-center">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-cardwash px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ember-deep">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
              </span>
              Open to lab roles & internships
            </span>
            <span className="inline-flex items-center rounded-full border border-line bg-cream px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-soft">
              <Ph>[Town/City], Kenya</Ph>
            </span>
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: easeOut }}
            className="mt-7 font-mono text-xs uppercase tracking-[0.3em] text-ink-soft"
          >
            Stanley Aketch — biochemist in the making
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: easeOut }}
            className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink text-balance sm:text-6xl lg:text-[4.4rem]"
          >
            I turn{" "}
            <em className="relative inline-block text-clay">
              messy
              <svg
                aria-hidden
                viewBox="0 0 120 12"
                className="absolute -bottom-1.5 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 20 2, 35 10, 55 6 S 95 3, 118 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
            </em>{" "}
            samples into{" "}
            <em className="text-ember">clean, trustworthy</em> numbers.
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: easeOut }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Clinical diagnostics, food analysis and health data — with the
            notebook discipline to back every figure. Careful assays, honest
            controls, and results the next person can actually use.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: easeOut }}
            className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] sm:text-xs"
          >
            {["B.Sc. Biochemistry", "Moi University", "Class of [YYYY]"].map(
              (t) => {
                const isPh = t.includes("[");
                return (
                  <span
                    key={t}
                    className={
                      isPh
                        ? "rounded-full border border-dashed border-ember/45 bg-ember-mist/60 px-3 py-1.5 text-ember-deep"
                        : "rounded-full border border-line bg-cardwash px-3 py-1.5 text-ink-soft"
                    }
                  >
                    {isPh ? <Ph>{t.replace(/[[]|]/g, "")}</Ph> : t}
                  </span>
                );
              },
            )}
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: easeOut }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-espresso hover:shadow-[0_14px_30px_-12px_rgba(31,21,16,0.5)]"
            >
              <MousePointer2 className="h-4 w-4" aria-hidden />
              Read the case files
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cardwash px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ember/50 hover:text-ember-deep"
            >
              <FlaskConical className="h-4 w-4" aria-hidden />
              Let&apos;s talk
            </a>
          </m.div>

          {/* by the numbers */}
          <m.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: easeOut }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:grid-cols-4"
          >
            {[
              { v: <Ph>N</Ph>, l: "weeks in a working laboratory" },
              { v: <Ph>N</Ph>, l: "projects with real results" },
              { v: <Ph>N</Ph>, suffix: "+", l: "lab techniques at the bench" },
              { v: <Ph>N</Ph>, l: "certificates earned" },
            ].map((s, i) => (
              <div key={i}>
                <dt className="font-display text-3xl font-semibold text-ink sm:text-[2.1rem]">
                  {s.v}
                  {s.suffix ? (
                    <span className="text-ember">+</span>
                  ) : null}
                </dt>
                <dd className="mt-1.5 text-[12.5px] leading-snug text-ink-faint">
                  {s.l}
                </dd>
              </div>
            ))}
          </m.dl>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint"
          >
            English <Ph>level</Ph> · Kiswahili <Ph>level</Ph> ·{" "}
            <Ph>Other</Ph>
          </m.p>
        </div>

        {/* ---------------- right column — portrait ---------------- */}
        <m.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
          style={reducedMotion ? undefined : { y: portraitY }}
          className="relative mx-auto w-full max-w-sm self-center lg:max-w-none"
        >
          <RotatingBadge />

          <div className="arch relative aspect-[4/5] overflow-hidden border-[6px] border-cardwash bg-cream shadow-[0_30px_60px_-25px_rgba(37,26,18,0.45)] ring-1 ring-line">
            <Image
              src={portfolioImages["portrait"]}
              placeholder="blur"
              alt="Portfolio portrait of a biochemist in a warmly lit laboratory"
              fill
              preload
              className="object-cover"
              sizes="(min-width: 1024px) 30rem, 22rem"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
          </div>

          {/* floating cards */}
          <div className="animate-floaty absolute -right-3 top-16 hidden rounded-2xl border border-line bg-cardwash/95 px-4 py-3 shadow-[0_16px_36px_-18px_rgba(37,26,18,0.4)] backdrop-blur sm:block lg:-right-8">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-sage-deep">
              <BadgeCheck className="h-4 w-4" aria-hidden />
              Internal QC
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-ink">
              every run, controlled
            </p>
          </div>

          <div
            className="animate-floaty absolute -left-2 bottom-14 hidden rounded-2xl border border-line bg-cardwash/95 px-4 py-3 shadow-[0_16px_36px_-18px_rgba(37,26,18,0.4)] backdrop-blur sm:block lg:-left-8"
            style={{ animationDelay: "-3s" }}
          >
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ember-deep">
              <TrendingUp className="h-4 w-4" aria-hidden />
              Last calibration
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-ink">
              R² = 0.9995
            </p>
          </div>

          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            Portrait is placeholder art — swap in a recent photo
          </p>
        </m.div>
      </div>
    </div>
  );
}
