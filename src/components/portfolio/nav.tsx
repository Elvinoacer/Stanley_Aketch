"use client";

import { AnimatePresence, m, useScroll } from "framer-motion";
import { FlaskConical, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#fit", label: "Where I'd fit" },
  { href: "#work", label: "Case files" },
  { href: "#experience", label: "Experience" },
  { href: "#toolbox", label: "Toolbox" },
  { href: "#contact", label: "Contact" },
];

export function DraftBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-50 bg-espresso text-paper">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-2 sm:px-8">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ember-soft">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-soft opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember-soft" />
          </span>
          Draft
        </span>
        <p className="flex-1 truncate font-mono text-[10px] sm:text-[11px] text-ink-faint">
          Placeholder portfolio — dotted items await Stanley&apos;s real details.
          See the publishing checklist at the end.
        </p>
        <button
          onClick={() => setOpen(false)}
          aria-label="Dismiss draft notice"
          className="rounded-md p-1 text-ink-faint transition-colors hover:text-paper"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 24)), [scrollY]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
    focusable?.[0]?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", handleDesktop);
    document.addEventListener("keydown", handleKeyDown);
    const menuButton = menuButtonRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", handleDesktop);
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <m.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "border-b border-line bg-paper/90 backdrop-blur-md shadow-[0_1px_0_rgba(180,84,10,0.06)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Stanley Aketch — back to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-espresso text-ember-soft transition-transform duration-300 group-hover:rotate-12">
              <FlaskConical className="h-4.5 w-4.5" aria-hidden />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[15px] font-semibold tracking-tight">
                Stanley Aketch
              </span>
              <span className="mt-0.5 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint sm:block">
                Biochemistry · Moi University
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-ember px-4.5 py-2.5 text-[13px] font-semibold text-paper shadow-[0_8px_20px_-8px_rgba(180,84,10,0.55)] transition-all hover:bg-ember-deep hover:shadow-[0_10px_24px_-8px_rgba(143,66,7,0.6)] sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              ref={menuButtonRef}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-cardwash text-ink transition-colors hover:border-ember/40 lg:hidden"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </nav>
      </m.header>

      {/* mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-sm lg:hidden"
          >
            <div className="flex h-full flex-col px-8 py-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ember-soft">
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ember-soft/30 text-paper"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-10 flex flex-1 flex-col justify-center gap-2">
                {LINKS.map((l, i) => (
                  <m.li
                    key={l.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.45 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-ember-soft/15 py-4"
                    >
                      <span className="font-mono text-xs text-ember-soft/70">
                        0{i + 1}
                      </span>
                      <span className="font-display text-3xl font-medium text-paper transition-colors group-hover:text-ember-soft">
                        {l.label}
                      </span>
                    </a>
                  </m.li>
                ))}
              </ul>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                I turn messy samples into clean, trustworthy numbers.
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
