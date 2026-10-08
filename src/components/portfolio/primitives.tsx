"use client";

import { m, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Reveal — soft scroll-in reveal used across every section           */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

/* ------------------------------------------------------------------ */
/* Stagger container + item                                            */
/* ------------------------------------------------------------------ */
export function Stagger({
  children,
  className,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <m.div
      className={className}
      variants={{
        hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </m.div>
  );
}

/* ------------------------------------------------------------------ */
/* SectionHeading — numbered kicker + display title + optional lede    */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  index,
  kicker,
  title,
  lede,
  dark = false,
  className,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em]">
          <span
            className={cn(
              "inline-flex h-6 w-6 items-center justify-center rounded-full border font-semibold",
              dark
                ? "border-ember-soft/40 text-ember-soft"
                : "border-ember/40 text-ember",
            )}
          >
            {index}
          </span>
          <span className={dark ? "text-ink-faint" : "text-ink-soft"}>
            {kicker}
          </span>
          <span
            aria-hidden
            className={cn(
              "h-px flex-1",
              dark ? "bg-ember-soft/25" : "bg-line",
            )}
          />
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-3xl sm:text-4xl lg:text-[2.9rem] font-semibold leading-[1.08] tracking-tight text-balance",
            dark ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 text-base sm:text-lg leading-relaxed",
              dark ? "text-ink-faint" : "text-ink-soft",
            )}
          >
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ph — a deliberate placeholder token (dotted underline)              */
/* ------------------------------------------------------------------ */
export function Ph({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={dark ? "ph ph-dark" : "ph"}
      title="Placeholder — replace before publishing"
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Chip — small mono tag with evidence styling                         */
/* ------------------------------------------------------------------ */
export function Chip({
  children,
  tone = "sand",
  className,
}: {
  children: ReactNode;
  tone?: "sand" | "ember" | "sage" | "outline" | "dark";
  className?: string;
}) {
  const tones: Record<string, string> = {
    sand: "bg-cream text-ink-soft border-line",
    ember: "bg-ember-mist text-ember-deep border-ember/25",
    sage: "bg-sage/10 text-sage-deep border-sage/25",
    outline: "bg-transparent text-ink-soft border-line",
    dark: "bg-espresso-soft text-ember-soft border-ember-soft/25",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp — animated number that counts into view                      */
/* ------------------------------------------------------------------ */
export function CountUp({
  to,
  suffix = "",
  className,
  duration = 1.4,
}: {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      if (reducedMotion) spring.jump(to);
      else mv.set(to);
    }
  }, [inView, mv, to, reducedMotion, spring]);

  useEffect(
    () =>
      spring.on("change", (v) => {
        if (ref.current)
          ref.current.textContent = `${Math.round(v).toLocaleString()}${suffix}`;
      }),
    [spring, suffix],
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Section shell — consistent vertical rhythm                          */
/* ------------------------------------------------------------------ */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 sm:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
