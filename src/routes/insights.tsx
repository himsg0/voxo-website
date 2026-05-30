import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Search, TrendingUp, Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import cardPink from "@/assets/card-pink.jpg";
import cardYellow from "@/assets/card-yellow.jpg";
import cardBlue from "@/assets/card-blue.jpg";
import cardPurple from "@/assets/card-purple.jpg";
import cardPeach from "@/assets/card-peach.jpg";
import cardGlitch from "@/assets/card-glitch.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Voxo Media" },
      { name: "description", content: "Cultural intelligence, brand essays and trend reports from the Voxo Media studio." },
      { property: "og:title", content: "Insights — Voxo Media" },
      { property: "og:description", content: "Field notes from the culture lab." },
      { property: "og:image", content: cardPink },
    ],
  }),
  component: Insights,
});

const CATEGORIES = ["All", "Culture", "Strategy", "Performance", "Design", "AI"];

const FEATURED = {
  tag: "Culture",
  t: "Why Algorithms Don't Build Brands. People Do.",
  d: "Mar 2026",
  read: "6 min",
  by: "Rohini Kapoor",
  img: cardPink,
  excerpt: "Every brand wants the algorithm. Almost none want to do the work the algorithm rewards. Here's the uncomfortable truth nobody's putting on a slide.",
};

const POSTS = [
  { tag: "Strategy", t: "The Death of the Demographic. Long Live the Subculture.", d: "Feb 2026", read: "8 min", img: cardYellow, c: "text-orange" },
  { tag: "Performance", t: "Creative is the Real Performance Lever.", d: "Feb 2026", read: "5 min", img: cardBlue, c: "text-blue" },
  { tag: "AI", t: "AI Won't Replace Creatives. It'll Replace Mediocre Ones.", d: "Jan 2026", read: "7 min", img: cardGlitch, c: "text-purple" },
  { tag: "Design", t: "Brand Systems That Survive The Internet.", d: "Jan 2026", read: "6 min", img: cardPurple, c: "text-pink" },
  { tag: "Culture", t: "Memes Are A Media Channel Now. Plan Accordingly.", d: "Dec 2025", read: "4 min", img: cardPeach, c: "text-pink" },
  { tag: "Strategy", t: "Why Most Brand Refreshes Fail (And How To Not).", d: "Dec 2025", read: "9 min", img: cardPink, c: "text-pink" },
];

const REPORTS = [
  { icon: TrendingUp, t: "State of Indian D2C 2026", b: "Where attention is shifting and who's winning it." },
  { icon: Sparkles, t: "The Vibe Economy Report", b: "How aesthetic tribes became the new demographic." },
  { icon: Search, t: "Search Is Dead. Long Live Discovery.", b: "TikTok, Reels, Reddit — the new SEO." },
];

function Insights() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="chip text-pink mb-4">● Insights</p>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.88]">
            FIELD NOTES FROM<br />
            <span className="text-gradient-sunset">THE CULTURE LAB.</span>
          </h1>
          <p className="mt-6 max-w-xl text-foreground/80">Brand essays, strategy breakdowns and trend reports from the people obsessing over the internet so you don't have to.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c, i) => (
              <button key={c} className={`px-4 py-2 rounded-full border text-[11px] uppercase tracking-[0.2em] font-bold ${i === 0 ? "bg-foreground text-background border-foreground" : "border-border text-foreground/70 hover:border-foreground"}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="pb-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <p className="chip text-pink mb-4">★ Featured essay</p>
          <a href="#" className="group grid lg:grid-cols-2 gap-8 rounded-3xl border border-border bg-white overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img src={FEATURED.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider">
                <span className="chip text-pink">● {FEATURED.tag}</span>
                <span className="text-muted-foreground inline-flex items-center gap-1"><Clock size={12} /> {FEATURED.read} • {FEATURED.d}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">{FEATURED.t}</h2>
              <p className="mt-6 text-foreground/80">{FEATURED.excerpt}</p>
              <p className="mt-6 text-xs text-muted-foreground">By <span className="font-bold text-foreground">{FEATURED.by}</span></p>
              <p className="mt-6 text-pink inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold">Read essay <ArrowUpRight size={12} /></p>
            </div>
          </a>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl mb-8">LATEST <span className="scribble-underline text-pink">DISPATCHES</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.map((p, i) => (
              <motion.a 
                key={p.t} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }} 
                href="#" 
                className="group rounded-2xl border border-border bg-white overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider">
                    <span className={`font-bold ${p.c}`}>● {p.tag}</span>
                    <span className="text-muted-foreground inline-flex items-center gap-1"><Clock size={12} /> {p.read}</span>
                  </div>
                  <h3 className="font-display text-xl mt-4 leading-snug flex-1">{p.t}</h3>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{p.d}</span>
                    <ArrowUpRight size={16} className="text-pink" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className="py-20 bg-gradient-to-br from-[#fde5f1] via-[#f0d8ff] to-[#d6e8ff]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="chip text-pink mb-3">Download</p>
              <h2 className="font-display text-4xl md:text-5xl">FREE TREND<br /><span className="text-pink">REPORTS.</span></h2>
            </div>
            <p className="font-hand text-3xl text-pink max-w-xs">No fluff. No gated PDFs.<br />Just sharp thinking.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REPORTS.map(({ icon: Icon, ...r }) => (
              <motion.article key={r.t} whileHover={{ y: -6 }} className="rounded-2xl bg-white border border-border p-6 flex flex-col">
                <Icon size={28} className="text-pink mb-4" />
                <h3 className="font-display text-xl uppercase leading-tight">{r.t}</h3>
                <p className="mt-3 text-xs text-muted-foreground flex-1">{r.b}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-pink">Download free <ArrowUpRight size={12} /></a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ink text-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Mail size={28} className="mx-auto text-pink mb-4" />
          <h2 className="font-display text-4xl md:text-5xl">THE VOXO DISPATCH.</h2>
          <p className="mt-3 text-white/70">One sharp essay. Every other Tuesday. No spam, no fluff.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@brand.com" className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 outline-none focus:border-pink placeholder-white/40 text-sm" />
            <button className="px-6 py-3 bg-pink rounded-full text-[11px] uppercase tracking-[0.2em] font-bold inline-flex items-center justify-center gap-2">Subscribe <ArrowUpRight size={14} /></button>
          </form>
        </div>
      </section>
    </main>
  );
}
