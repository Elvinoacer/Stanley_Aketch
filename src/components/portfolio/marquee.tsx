const ITEMS = [
  "UV-Vis spectrophotometry",
  "standard curves",
  "Kjeldahl protein",
  "Soxhlet fat",
  "Friedewald LDL",
  "Levey–Jennings QC",
  "micropipette discipline",
  "proximate analysis",
  "ggplot2",
  "SOP-first",
  "aseptic technique",
  "serial dilutions",
  "tidy data in R",
  "plain-language reporting",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="relative z-10 -rotate-[0.6deg] scale-[1.01] overflow-hidden border-y border-espresso/60 bg-espresso py-3.5 text-paper"
    >
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap pr-8">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-[11.5px] uppercase tracking-[0.22em] text-ink-faint"
          >
            {item}
            <span className="text-ember-soft">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
