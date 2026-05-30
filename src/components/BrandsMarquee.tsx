const BRANDS = [
  "Happilo", "NYKAA", "AJIO", "SUGAR", "EMAAR", "WROGN",
  "JORDAN", "Honeywell", "ContactMe", "URBAN HARVEST",
  "SaveLIFE", "Brookfield", "Pearson", "Lifestyle", "Maxstar", "TREVEL",
];

export function BrandsMarquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <div className="overflow-hidden border-y border-border/50 bg-background py-8">
      <div className="flex w-max gap-16 animate-marquee">
        {row.map((b, i) => (
          <span key={i} className="font-display text-2xl tracking-tight text-foreground/70 whitespace-nowrap">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
