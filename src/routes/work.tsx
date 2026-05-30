import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import heroWork from "@/assets/hero-work.jpg";
import food from "@/assets/ind-food.jpg";
import d2c from "@/assets/ind-d2c.jpg";
import beauty from "@/assets/ind-beauty.jpg";
import realestate from "@/assets/ind-realestate.jpg";
import travel from "@/assets/ind-travel.jpg";
import edu from "@/assets/ind-education.jpg";
import tech from "@/assets/ind-tech.jpg";
import ent from "@/assets/ind-entertainment.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Voxo Media" },
      { name: "description", content: "Culture looks different in every industry. From D2C brands to hospitality experiences, we build strategies tailored to how each category behaves online." },
      { property: "og:title", content: "Work — Voxo Media" },
      { property: "og:description", content: "Culture looks different in every industry." },
      { property: "og:image", content: heroWork },
    ],
  }),
  component: Work,
});

const INDUSTRIES = [
  { n: "01", t: "Food & Beverage", b: "Craving attention. Serving obsession. Building loyal communities.", img: food, brands: "Happilo • Le Gourmet • Paper Boat", color: "text-pink" },
  { n: "02", t: "D2C & Lifestyle", b: "Built for the scroll. Brands that become part of daily life.", img: d2c, brands: "The Sleep Co • Mamaearth • Plix", color: "text-pink" },
  { n: "03", t: "Beauty & Wellness", b: "Beauty that goes beyond the mirror. Built on trust, driven by results.", img: beauty, brands: "Gulabari • Sanfe • Plum", color: "text-pink" },
  { n: "04", t: "Real Estate", b: "Spaces people aspire for. Stories they connect with.", img: realestate, brands: "Godrej • Sobha • Emaar", color: "text-orange" },
  { n: "05", t: "Hospitality & Travel", b: "Experiences that stay long after the trip is over.", img: travel, brands: "Taj • BHL • Radisson", color: "text-cyan" },
  { n: "06", t: "Education & Edtech", b: "Making learning aspirational, accessible and actually engaging.", img: edu, brands: "upGrad • Sunstone • toprankers", color: "text-purple" },
  { n: "07", t: "Corporate & Tech", b: "Complex solutions. Clear communication. Powerful positioning.", img: tech, brands: "Zscaler • Dell • Freshworks", color: "text-blue" },
  { n: "08", t: "Entertainment & Culture", b: "Stories that move, entertain and stay in culture.", img: ent, brands: "Pooja Ent • Sony Music • Power", color: "text-purple" },
];

const FEATURED = [
  { t: "Happilo", s: "Diwali Campaign", img: work3 },
  { t: "The Sleep Co", s: "Hero Campaign", img: work2 },
  { t: "Godrej Properties", s: "Reels Campaign", img: work1 },
  { t: "Gulabari", s: "TV Campaign", img: work4 },
];

const BELIEFS = [
  { icon: Zap, t: "Strategy First", b: "Every idea begins with insight, not assumptions." },
  { icon: Heart, t: "Culture Obsessed", b: "We build what the internet cares about right now." },
  { icon: Star, t: "Crafted to Convert", b: "Creativity that looks good and gets results." },
];

function Work() {
  return (
    <main>
      {/* HERO */}
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(252,251,248,0.85), rgba(252,251,248,0.35)), url(${heroWork})` }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 grid items-center min-h-[70vh]">
          <div className="max-w-2xl">
            <p className="font-hand text-3xl text-pink mb-2">Our Work</p>
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.88]">
              CULTURE LOOKS<br />DIFFERENT<br />IN EVERY <span className="text-pink">INDUSTRY<span className="text-foreground">.</span></span>
            </h1>
            <p className="mt-6 max-w-md text-foreground/80">From D2C brands to hospitality experiences, we build strategies, campaigns and content systems tailored to how each category behaves online.</p>
            <div className="mt-8 flex items-center gap-5">
              <a href="#cases" className="btn-pink">Explore case studies <ArrowUpRight size={14} /></a>
              <p className="font-hand text-2xl">↓ pick your industry</p>
            </div>
          </div>
        </div>
      </section>


      {/* CASE STUDIES */}
      <section id="cases" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-3xl"><span className="scribble-underline">CASE STUDIES BY INDUSTRY</span></h2>
            <p className="text-xs text-muted-foreground">Different industries. Different challenges.<br />Same obsession — iconic results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((i, idx) => (
              <motion.article 
                key={i.n} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                whileHover={{ y: -6 }} 
                className="rounded-2xl bg-white border border-border overflow-hidden flex flex-col"
              >
                <div className="p-5">
                  <p className={`font-display text-3xl ${i.color}`}>{i.n}</p>
                  <h3 className="font-display text-xl uppercase leading-tight mt-1">{i.t}</h3>
                  <p className="mt-3 text-xs text-muted-foreground">{i.b}</p>
                </div>
                <div className="aspect-square">
                  <img src={i.img} alt={i.t} width={500} height={500} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="px-5 py-3 text-[11px] text-muted-foreground border-t border-border">{i.brands}</div>
                <a href="#" className="px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-pink inline-flex items-center gap-2 border-t border-border">View case studies <ArrowUpRight size={12} /></a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-16 bg-gradient-to-b from-background to-[#fff5f9]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-3xl">FEATURED WORK ACROSS INDUSTRIES</h2>
            <p className="text-xs text-muted-foreground">Great work doesn't fit in one box.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURED.map((f) => (
              <motion.a key={f.t} whileHover={{ y: -6 }} href="#" className="group rounded-xl overflow-hidden bg-white border border-border">
                <div className="aspect-[4/3]">
                  <img src={f.img} alt={f.t} width={400} height={300} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-3">
                  <p className="text-[11px] uppercase tracking-wider font-bold">{f.t}</p>
                  <p className="text-[10px] text-muted-foreground">{f.s}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
          <div>
            <p className="chip text-muted-foreground mb-3">We believe in</p>
            <p className="font-hand text-4xl text-pink scribble-underline">Iconic Impact</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BELIEFS.map(({ icon: Icon, ...b }) => (
              <div key={b.t} className="rounded-xl">
                <Icon size={20} className="text-pink mb-2" />
                <h3 className="font-display text-base uppercase">{b.t}</h3>
                <p className="text-xs text-muted-foreground mt-2">{b.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-grad text-white py-14">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-3xl md:text-5xl">READY TO BUILD<br />SOMETHING ICONIC?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-pink rounded-full text-xs uppercase tracking-[0.2em] font-bold">
            Let's Create Together <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
