import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Search, Zap, Pencil, Send, Crown, ShoppingBag, Building, Sparkles, Heart, GraduationCap, Briefcase, Plane, Film } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import heroServices from "@/assets/hero-services.jpg";
import cardPink from "@/assets/card-pink.jpg";
import cardYellow from "@/assets/card-yellow.jpg";
import cardBlue from "@/assets/card-blue.jpg";
import cardPurple from "@/assets/card-purple.jpg";
import cardGlitch from "@/assets/card-glitch.jpg";
import cardPeach from "@/assets/card-peach.jpg";
import { BrandsMarquee } from "@/components/BrandsMarquee";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Voxo Media" },
      { name: "description", content: "Strategy. Creativity. Production. Performance. Built as one ecosystem designed to make brands impossible to ignore." },
      { property: "og:title", content: "Services — Voxo Media" },
      { property: "og:description", content: "An all-in-one growth engine for modern brands." },
      { property: "og:image", content: heroServices },
    ],
  }),
  component: Services,
});

const CARDS = [
  { n: "01", t: "Brand Strategy", b: "Positioning, communication and strategy that builds relevance and recall.", img: cardPink, c: "text-pink" },
  { n: "02", t: "Design & Creative Systems", b: "Visual identities and creative systems that are iconic, consistent and scalable.", img: cardYellow, c: "text-orange" },
  { n: "03", t: "Content & Social", b: "Scroll-native storytelling that sparks conversations and keeps brands top of mind.", img: cardBlue, c: "text-blue" },
  { n: "04", t: "Video & Production", b: "Premium visuals that stop attention, hit emotions and deliver results.", img: cardPurple, c: "text-pink" },
  { n: "05", t: "Performance & Digital", b: "From first click to final conversion — we optimize every touchpoint.", img: cardPeach, c: "text-blue" },
  { n: "06", t: "AI & Future Systems", b: "AI-powered workflows, automation and future-native creative for scale.", img: cardGlitch, c: "text-purple" },
];

const STEPS = [
  { n: "01", t: "Discover", b: "We deep dive till we find what others miss.", icon: Search },
  { n: "02", t: "Disrupt", b: "We challenge boring and predictable.", icon: Zap },
  { n: "03", t: "Design", b: "We create things people can't scroll past.", icon: Pencil },
  { n: "04", t: "Distribute", b: "Right content. Right place. Right time.", icon: Send },
  { n: "05", t: "Dominate", b: "We turn brands into category leaders.", icon: Crown },
];

const INDUSTRIES = [
  { l: "Food & D2C", sub: "Where competition is brutal", icon: ShoppingBag },
  { l: "Real Estate", sub: "Where perception equals sales", icon: Building },
  { l: "Fashion & Lifestyle", sub: "Culture-led branding", icon: Sparkles },
  { l: "Beauty & Wellness", sub: "Trust-first storytelling", icon: Heart },
  { l: "Education", sub: "Attention is everything", icon: GraduationCap },
  { l: "Corporate & Tech", sub: "Complex made compelling", icon: Briefcase },
  { l: "Hospitality & Travel", sub: "Selling experiences", icon: Plane },
  { l: "Entertainment & OTT", sub: "Narratives built for emotion", icon: Film },
];

function Services() {
  return (
    <main>
      {/* HERO */}
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(253,229,241,0.85), rgba(214,232,255,0.5)), url(${heroServices})` }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 grid items-center min-h-[70vh]">
          <div className="max-w-2xl">
            <p className="chip text-pink mb-4">● Services</p>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.88]">
              WE DON'T SELL SERVICES.<br />
              WE BUILD BRANDS<br />
              <span className="text-gradient-sunset">PEOPLE REMEMBER.</span>
            </h1>
            <p className="mt-6 max-w-md text-foreground/80">Strategy. Creativity. Production. Performance. Built as one ecosystem designed to make brands impossible to ignore.</p>
            <div className="mt-8 flex items-center gap-5">
              <a href="#what-we-build" className="btn-pink">Explore services <ArrowUpRight size={14} /></a>
              <button className="flex items-center gap-3 text-sm font-semibold">
                <span className="w-11 h-11 rounded-full border-2 border-foreground grid place-items-center"><Play size={14} fill="currentColor" /></span>
                View our work
              </button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">✻ An all-in-one growth engine for modern brands.</p>
          </div>
        </div>
      </section>


      {/* WHAT WE BUILD */}
      <section id="what-we-build" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <p className="chip text-pink mb-8">What we build</p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CARDS.map((c, i) => (
              <motion.article 
                key={c.n} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }} 
                className="rounded-2xl overflow-hidden border border-border bg-white flex flex-col"
              >
                <div className="aspect-square relative">
                  <img src={c.img} alt="" width={400} height={400} loading="lazy" className="w-full h-full object-cover" />
                  <span className={`absolute top-3 left-3 font-display text-2xl ${c.c}`}>{c.n}</span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-display text-base uppercase">{c.t}</h3>
                  <p className="mt-2 text-xs text-muted-foreground flex-1">{c.b}</p>
                  <a href="#" className={`mt-3 text-[10px] uppercase tracking-[0.2em] font-bold inline-flex items-center gap-1 ${c.c}`}>Explore <ArrowUpRight size={12} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-gradient-to-br from-[#0a0a1f] via-[#1a0a2e] to-[#0f1a3c] text-white py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionReveal>
              <div>
                <p className="chip text-pink mb-3">How we work →</p>
                <h2 className="font-display text-5xl md:text-6xl">NO GUESSWORK.<br />JUST A SYSTEM THAT WINS.</h2>
              </div>
            </SectionReveal>
            <p className="font-hand text-3xl text-pink">Not campaigns.<br />Takeovers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            {STEPS.map(({ icon: Icon, ...s }, i) => (
              <div key={s.n} className="relative text-center">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-pink grid place-items-center shadow-[0_0_30px] shadow-pink/40 bg-ink">
                  <Icon size={22} className="text-pink" />
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-pink to-purple" />
                )}
                <p className="font-display text-pink mt-4">{s.n}</p>
                <p className="font-display uppercase mt-1">{s.t}</p>
                <p className="text-xs text-white/70 mt-2 max-w-[180px] mx-auto">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-gradient-to-br from-[#fde5f1] via-[#fbd1e8] to-[#fde5d3]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="chip text-pink mb-10">Industries we shine in</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {INDUSTRIES.map((i) => (
              <div key={i.l} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-white/60 border border-foreground/10 grid place-items-center mb-3 text-pink shadow-sm transition-transform hover:scale-110">
                  <i.icon size={22} strokeWidth={1.5} />
                </div>
                <p className="font-display text-xs uppercase leading-tight">{i.l}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{i.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS WE'VE BUILT WITH */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 mb-6">
          <p className="chip text-pink mb-2">Brands we've built with</p>
          <h2 className="font-display text-4xl md:text-5xl">NOT CLIENTS.<br /><span className="text-pink scribble-underline">COLLABORATORS.</span></h2>
        </div>
        <BrandsMarquee />
        <p className="text-center mt-6 text-xs text-muted-foreground">Different industries. Same obsession: relevance.</p>
      </section>

      {/* CTA */}
      <section className="bg-sunset text-white py-16">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">LET'S BUILD SOMETHING<br />THEY CAN'T IGNORE.</h2>
            <p className="mt-2 text-white/90">Your competitors probably won't like this.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-pink transition-colors">
            Let's Create Culture <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
