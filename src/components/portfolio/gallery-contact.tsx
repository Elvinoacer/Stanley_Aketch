"use client";

import { m } from "framer-motion";
import {
  AtSign,
  Copy,
  Check,
  FileDown,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import { CardImage } from "./card-image";
import { portfolioImages, type PortfolioImageName } from "@/lib/portfolio-images";
import Image from "next/image";
import { useState, type ComponentType, type SVGProps } from "react";
import { Github, Linkedin } from "./brand-icons";
import { Ph, Reveal, Section, SectionHeading, Stagger, StaggerItem } from "./primitives";

/* ================================================================ */
/* 11 — Gallery                                                      */
/* ================================================================ */
const SHOTS = [
  {
    src: portfolioImages["lab-bench"],
    alt: "Laboratory bench with a spectrophotometer, pipettes and amber sample tubes in warm light",
    caption: "The bench: spectrophotometer, pipettes, day's queue",
    span: "md:col-span-2 md:row-span-2",
    ratio: "aspect-[4/3]",
  },
  {
    src: portfolioImages["what-i-do"],
    alt: "Gloved hands using a micropipette beside a spectrophotometer",
    caption: "At the pipette — one careful volume at a time",
    span: "",
    ratio: "aspect-square",
  },
  {
    src: portfolioImages["method-assays"],
    alt: "Cuvettes holding a colour gradient of assay solutions",
    caption: "The colour gradient that becomes a number",
    span: "",
    ratio: "aspect-square",
  },
  {
    src: portfolioImages["notebook"],
    alt: "Open lab notebook with handwritten methods beside safety glasses",
    caption: "If it isn't written down…",
    span: "",
    ratio: "aspect-square",
  },
  {
    src: portfolioImages["food-quality"],
    alt: "Grains and porridge flour with laboratory glassware",
    caption: "Food chemistry: what the label claims vs what the bench says",
    span: "md:col-span-2",
    ratio: "aspect-[2/1]",
  },
];

export function Gallery() {
  return (
    <Section id="gallery" className="bg-cream">
      <SectionHeading
        index="11"
        kicker="Gallery"
        title={
          <>
            The bench, in{" "}
            <em className="text-ember">pictures</em>.
          </>
        }
        lede="Publish only images the laboratory or organisation has cleared — crop or blur anything showing patient, participant or sample identifiers."
      />

      <Stagger className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3" gap={0.08}>
        {SHOTS.map((s) => (
          <StaggerItem key={s.src.src} className={s.span}>
            <m.figure
              whileHover="hover"
              className="group relative h-full w-full overflow-hidden rounded-2xl border border-line bg-cardwash"
            >
              <div className={`relative h-full w-full ${s.ratio}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.06]"
                  sizes="(min-width: 768px) 32rem, 24rem"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 sm:translate-y-3 bg-gradient-to-t from-espresso/90 via-espresso/55 to-transparent px-4 pb-3.5 pt-12 sm:opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper/90">
                  {s.caption}
                </span>
              </figcaption>
            </m.figure>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <p className="mt-6 flex items-center gap-2.5 rounded-xl border border-dashed border-clay/40 bg-clay/5 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft">
          <ShieldAlert className="h-4 w-4 shrink-0 text-clay" aria-hidden />
          Privacy first — no patient, participant or sample identifiers anywhere on the page.
        </p>
      </Reveal>
    </Section>
  );
}

/* ================================================================ */
/* 12 — Let's talk                                                   */
/* ================================================================ */
function ContactCard({
  icon: Icon,
  image,
  label,
  value,
  href,
  copyable,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: PortfolioImageName;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <m.a
      whileHover={{ y: -4 }}
      href={href ?? "#contact"}
      className="group flex items-center gap-4 rounded-2xl border border-ember-soft/20 bg-espresso-soft/70 p-5 transition-colors hover:border-ember-soft/50"
    >
      <div className="relative shrink-0">
        <CardImage name={image} className="h-16 w-16 rounded-lg" sizes="64px" />
        <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-ember text-paper ring-2 ring-espresso">
          <Icon className="h-3 w-3" aria-hidden />
        </span>
      </div>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          {label}
        </span>
        <span className="mt-1 block truncate font-display text-[15px] font-semibold text-paper sm:text-base">
          {value}
        </span>
      </span>
      {copyable && (
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ember-soft/30 text-ember-soft transition-colors hover:bg-ember-soft/15"
        >
          {copied ? (
            <Check className="h-4 w-4 text-sage" aria-hidden />
          ) : (
            <Copy className="h-4 w-4" aria-hidden />
          )}
        </button>
      )}
    </m.a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-espresso py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-25"
        style={{
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      >
        <Image src={portfolioImages["contact-background"]} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              dark
              index="12"
              kicker="Let's talk"
              title={
                <>
                  Messy samples welcome.{" "}
                  <em className="text-ember-soft">Clean numbers</em> returned.
                </>
              }
              lede={
                <>
                  I&apos;m open to laboratory roles, internships and
                  graduate-trainee programmes across Kenya. The fastest way to
                  reach me is email — <Ph dark>name@example.com</Ph>.
                </>
              }
            />
            <Reveal delay={0.2}>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                References available on request · CV carries the contact details
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:name@example.com"
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-ember-deep hover:shadow-[0_16px_34px_-14px_rgba(180,84,10,0.7)]"
                >
                  <AtSign className="h-4 w-4" aria-hidden />
                  Email Stanley
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ember-soft/35 px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:border-ember-soft/70"
                >
                  <FileDown className="h-4 w-4" aria-hidden />
                  Download the CV — <Ph dark>PDF</Ph>
                </a>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid content-center gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" gap={0.09}>
            <StaggerItem>
              <ContactCard
                image="contact-background"
                icon={AtSign}
                label="Email"
                value="name@example.com"
                href="mailto:name@example.com"
                copyable
              />
            </StaggerItem>
            <StaggerItem>
              <ContactCard
                image="contact-background"
                icon={MessageCircle}
                label="Phone / WhatsApp"
                value="+254 7XX XXX XXX"
                href="tel:+2547XXXXXXX"
              />
            </StaggerItem>
            <StaggerItem>
              <ContactCard
                image="supervisor-feedback"
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/your-handle"
                href="https://linkedin.com/in/your-handle"
              />
            </StaggerItem>
            <StaggerItem>
              <ContactCard
                image="health-data"
                icon={Github}
                label="GitHub / ORCID"
                value="github.com/your-handle"
                href="https://github.com/your-handle"
              />
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
