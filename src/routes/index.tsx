import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Plus, Infinity as InfinityIcon, Globe, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";
import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import heroHome from "@/assets/hero-home.jpg";
import cardPink from "@/assets/card-pink.jpg";
import cardYellow from "@/assets/card-yellow.jpg";
import cardBlue from "@/assets/card-blue.jpg";
import cardPurple from "@/assets/card-purple.jpg";
import cardGlitch from "@/assets/card-glitch.jpg";
import cardPeach from "@/assets/card-peach.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voxo Media — A New Attitude" },
      { name: "description", content: "We blend culture, creativity and performance to build brands that don't just exist — they lead." },
      { property: "og:title", content: "Voxo Media — A New Attitude" },
      { property: "og:description", content: "Built on culture. Driven by obsession." },
      { property: "og:image", content: heroHome },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { title: "Brand Strategy", body: "Positioning that makes an impact.", img: cardPink },
  { title: "Content Creation", body: "Stories that speak. Content that sticks.", img: cardYellow },
  { title: "Influencer Marketing", body: "Real people. Real influence.", img: cardBlue },
  { title: "Performance Marketing", body: "Data-led. Results obsessed.", img: cardPurple },
  { title: "Web & Digital Experiences", body: "Designs that move. Experiences that stay.", img: cardGlitch },
  { title: "AI & Innovation", body: "Future-ready creative solutions.", img: cardPeach },
];

const STATS = [
  { v: 50, suffix: "+", l: "Years of Legacy" },
  { v: 500, suffix: "+", l: "Brands Served" },
  { v: 1000, suffix: "+", l: "Campaigns Delivered" },
  { v: 0, symbol: "∞", l: "Culture Impact" },
];

const FEATURED = [
  { tag: "Branding", title: "Disruptive Brand", img: work1 },
  { tag: "Campaign", title: "Tech Launch Campaign", img: work2 },
  { tag: "Branding", title: "Lifestyle Branding", img: work3 },
  { tag: "Campaign", title: "Gen Z Campaign", img: work4 },
];

function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cover bg-center min-h-[80vh] flex items-center">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0.35)), url(${heroHome})`,
            y: yHero,
            opacity: opacityHero
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pt-32 md:pt-40 pb-20 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">

            <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] tracking-tighter">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block"
              >
                A NEW
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="text-gradient-sunset inline-block"
              >
                A<span className="mr-[0.02em]">T</span>TITUDE.
              </motion.span>
            </h1>
            <p className="mt-6 max-w-md text-base text-foreground/80">
              Voxo Media is a new-age creative powerhouse built on over 50 years of impact. We blend culture, creativity and performance to build brands that don't just exist, they lead.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <Magnetic>
                <Link to="/work" className="btn-pink">View our work <ArrowUpRight size={14} /></Link>
              </Magnetic>
              <Magnetic>
                <button onClick={() => setIsVideoOpen(true)} className="flex items-center gap-3 text-sm font-semibold">
                  <span className="w-12 h-12 rounded-full border-2 border-foreground grid place-items-center transition-transform hover:scale-110"><Play size={16} fill="currentColor" /></span>
                  Play reel
                </button>
              </Magnetic>
            </div>
            <div className="mt-10 flex gap-3">
              {[cardPink, cardBlue, cardPurple, cardYellow].map((src, i) => (
                <img key={i} src={src} alt="" width={80} height={60} loading="lazy" className="w-20 h-16 object-cover rounded-md border-2 border-white shadow" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* WE BUILD ICONIC */}
      <section className="bg-gradient-to-b from-[#fde5d3] to-[#f6d6dd] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div>
                <p className="chip text-muted-foreground mb-3">What we do <Plus size={14} /></p>
                <h2 className="font-display text-5xl md:text-6xl">WE BUILD ICONIC.</h2>
              </div>
              <p className="chip text-muted-foreground">Strategy meets <br />storytelling. <Plus size={14} /></p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={s.img} alt={s.title} width={400} height={400} loading="lazy" className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                </div>
                <div className="p-4 relative">
                  <h3 className="text-[11px] uppercase tracking-wider font-bold leading-tight">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{s.body}</p>
                  <Plus size={14} className="absolute bottom-3 right-3 text-muted-foreground" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-6">
          <SectionReveal direction="left">
            <p className="font-display text-2xl leading-none">NOT NEW.<br />NOT NORMAL.</p>
            <p className="font-display text-gradient-rainbow text-xl mt-1">VOXO.</p>
          </SectionReveal>
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-gradient-sunset">
                {s.symbol ? s.symbol : <AnimatedCounter target={s.v} suffix={s.suffix} className="" />}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-cream/70 mt-1">{s.l}</p>
            </div>
          ))}
          <div className="flex gap-3 opacity-60">
            <Globe size={42} className="border border-cream/30 rounded-full p-2" />
            <InfinityIcon size={42} className="border border-cream/30 rounded-full p-2" />
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[260px_1fr] gap-10 items-start">
          <SectionReveal direction="left">
            <p className="chip text-pink mb-3">● Featured work</p>
            <h2 className="font-display text-5xl leading-none">
              IDEAS THAT<br />HIT DIFFERENT.
            </h2>
            <Magnetic>
              <Link to="/work" className="mt-6 inline-flex btn-outline">View all work <ArrowUpRight size={14} /></Link>
            </Magnetic>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURED.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/5]"
              >
                <img src={f.img} alt={f.title} width={400} height={500} loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-[11px] uppercase tracking-wider font-bold">{f.title}</p>
                  <p className="text-[10px] text-white/70">{f.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="w-full h-full flex items-center justify-center text-white/50">
                {/* Placeholder for video player */}
                <p className="font-display tracking-widest uppercase">Video Player Placeholder</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
