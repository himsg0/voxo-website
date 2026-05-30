import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Plus, Globe, Target, Pencil, BarChart3, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import heroAbout from "@/assets/hero-about.jpg";
import cardPink from "@/assets/card-pink.jpg";
import cardYellow from "@/assets/card-yellow.jpg";
import cardBlue from "@/assets/card-blue.jpg";
import cardPurple from "@/assets/card-purple.jpg";
import cardPeach from "@/assets/card-peach.jpg";
import { BrandsMarquee } from "@/components/BrandsMarquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Voxo Media" },
      { name: "description", content: "We're a new-age creative powerhouse turning brands into cultural movements. Culture first. Obsession always." },
      { property: "og:title", content: "About Voxo Media" },
      { property: "og:description", content: "Built to move culture." },
      { property: "og:image", content: heroAbout },
    ],
  }),
  component: About,
});

const PILLARS = [
  { t: "Culture First", b: "If people can't feel it, they won't remember it.", img: cardPink, icon: Globe, c: "text-pink" },
  { t: "Story Above Noise", b: "Algorithms change. Human emotion doesn't.", img: cardYellow, icon: Target, c: "text-orange" },
  { t: "Design with Attitude", b: "Beautiful is common. Memorable is rare.", img: cardPurple, icon: Pencil, c: "text-purple" },
  { t: "Performance with Taste", b: "Data matters. But taste decides impact.", img: cardBlue, icon: BarChart3, c: "text-blue" },
  { t: "Internet Native", b: "We build for feeds, conversations and culture shifts.", img: cardPeach, icon: Zap, c: "text-cyan" },
];

function About() {
  return (
    <main>
      {/* HERO */}
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(252,251,248,0.85), rgba(252,251,248,0.35)), url(${heroAbout})` }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 grid items-center min-h-[70vh]">
          <div className="max-w-2xl">
            <p className="chip text-pink mb-4">● About Voxo Media</p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.88]">
              BUILT TO<br />
              <span className="text-gradient-sunset">MOVE CULTURE.</span>
            </h1>
            <p className="mt-6 max-w-md text-foreground/80">We're a new-age creative powerhouse turning brands into cultural movements for the past 15 years. Strategy. Storytelling. Performance. All driven by obsession.</p>
            <div className="mt-8 flex items-center gap-5">
              <a href="#manifesto" className="btn-pink">Our story <ArrowUpRight size={14} /></a>
              <button className="flex items-center gap-3 text-sm font-semibold">
                <span className="w-11 h-11 rounded-full border-2 border-foreground grid place-items-center"><Play size={14} fill="currentColor" /></span>
                Watch reel
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* MANIFESTO */}
      <section id="manifesto" className="py-20 bg-gradient-to-br from-[#fff5f9] to-[#fde5d3]">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
          <SectionReveal>
            <p className="chip text-pink mb-3">Our manifesto</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              WE DON'T <span className="text-pink">FOLLOW</span> TRENDS.<br />
              WE <span className="text-pink">START</span> CONVERSATIONS.
            </h2>
            <p className="mt-6 text-foreground/80 max-w-md">Voxo Media was built on the belief that creativity isn't a service — it's a responsibility. We exist to shape how brands show up in culture and how culture remembers them.</p>
            <p className="mt-8 font-hand text-3xl">Rohini</p>
            <p className="text-[11px] uppercase tracking-wider font-bold">Rohini Kapoor<br /><span className="text-muted-foreground font-normal">Founder & CEO</span></p>
          </SectionReveal>
          </div>
          <div className="relative grid grid-cols-3 gap-3">
            {[cardPink, cardYellow, cardBlue, cardPurple, cardPeach, cardPink].map((src, i) => (
              <img key={i} src={src} alt="" width={200} height={200} loading="lazy" className={`w-full aspect-square object-cover rounded-md shadow rotate-[${(i % 2 ? -3 : 3)}deg]`} style={{ transform: `rotate(${i % 2 ? -4 : 3}deg)` }} />
            ))}
            <div className="absolute -bottom-4 right-0 bg-pink text-white px-4 py-2 font-hand text-2xl rotate-[-4deg]">MAKE ICONIC SH+T</div>
          </div>
        </div>
      </section>

      {/* PEOPLE DON'T REMEMBER ADS */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <p className="chip text-pink mb-3">The internet changed. So did storytelling.</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              PEOPLE DON'T<br />REMEMBER ADS.<br />
              THEY REMEMBER<br /><span className="text-gradient-sunset">FEELINGS.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
            <ul className="space-y-4 text-sm">
              <li>Attention became <strong>currency.</strong></li>
              <li className="text-center">+</li>
              <li>Culture became <strong>strategy.</strong></li>
              <li className="text-center">+</li>
              <li>Brands had to <strong>become experiences.</strong></li>
            </ul>
            <img src={cardPurple} alt="" width={400} height={500} loading="lazy" className="rounded-xl aspect-[3/4] object-cover" />
            <div className="flex flex-col gap-3">
              <div className="border border-border rounded-md p-3 bg-white shadow-sm">
                <div className="flex gap-1 mb-2">{[1,2,3].map(i=> <span key={i} className="w-2 h-2 rounded-full bg-muted" />)}</div>
                <p className="font-display text-sm">VIRALITY IS THE NEW VISIBILITY.</p>
              </div>
              <div className="border border-border rounded-md p-3 bg-white shadow-sm">
                <div className="flex gap-1 mb-2">{[1,2,3].map(i=> <span key={i} className="w-2 h-2 rounded-full bg-muted" />)}</div>
                <p className="font-display text-sm">AESTHETIC ISN'T ENOUGH. CONNECTION IS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT BUILDS A VOXO BRAND */}
      <section className="py-20 bg-gradient-to-b from-background to-[#faf5fb]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <h2 className="font-display text-4xl md:text-5xl">WHAT BUILDS<br />A <span className="text-pink">VOXO</span> BRAND?</h2>
              <p className="text-xs text-muted-foreground max-w-xs">Our philosophy isn't complicated.<br />It's just not common.</p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {PILLARS.map(({ icon: Icon, ...p }) => (
              <motion.article key={p.t} whileHover={{ y: -6 }} className="rounded-xl border border-border bg-white p-4 flex flex-col">
                <div className="aspect-square overflow-hidden rounded-md mb-3 relative">
                  <img src={p.img} alt="" width={300} height={300} loading="lazy" className="w-full h-full object-cover" />
                  <Icon size={20} className={`absolute top-2 left-2 ${p.c} bg-white rounded-full p-1`} />
                </div>
                <h3 className="font-display text-xs uppercase">{p.t}</h3>
                <p className="text-xs text-muted-foreground mt-2 flex-1">{p.b}</p>
                <Plus size={14} className="self-end text-muted-foreground mt-2" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 mb-6">
          <p className="chip text-muted-foreground mb-1">Not clients. Collaborators.</p>
          <h2 className="font-display text-3xl md:text-4xl">BRANDS WE'VE<br />BUILT WITH.</h2>
        </div>
        <BrandsMarquee />
      </section>

      {/* CTA */}
      <section className="bg-pink-grad text-white py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl">LET'S BUILD<br />WHAT PEOPLE TALK ABOUT NEXT.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-full text-xs uppercase tracking-[0.2em] font-bold">
            Let's Create Culture <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
