import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Instagram, Linkedin, Youtube, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import cardPink from "@/assets/card-pink.jpg";
import cardYellow from "@/assets/card-yellow.jpg";
import cardBlue from "@/assets/card-blue.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Voxo Media" },
      { name: "description", content: "Let's build something they can't ignore. Get in touch with the Voxo Media team." },
      { property: "og:title", content: "Contact — Voxo Media" },
      { property: "og:description", content: "Let's create culture together." },
      { property: "og:image", content: cardPink },
    ],
  }),
  component: Contact,
});

const SERVICES = ["Brand Strategy", "Design Systems", "Content & Social", "Video & Production", "Performance", "AI & Future", "Not sure yet"];
const BUDGETS = ["< ₹5L", "₹5–15L", "₹15–50L", "₹50L+", "Let's discuss"];

const OFFICES = [
  { city: "Mumbai", addr: "Andheri West, Floor 4 — the loud one with the dog.", img: cardPink },
  { city: "Delhi", addr: "Hauz Khas Village — corner studio, neon sign outside.", img: cardYellow },
  { city: "Bengaluru", addr: "Indiranagar — coffee, code, chaos.", img: cardBlue },
];

const FAQ = [
  { q: "What size brands do you work with?", a: "From scrappy seed-stage D2C to Fortune 500. If you have ambition and an opinion, we're in." },
  { q: "Do you do project-based or retainer work?", a: "Both. Most partnerships start with a defined sprint and evolve into long-term retainers." },
  { q: "How fast can you start?", a: "Most engagements kick off within 2–3 weeks. If it's urgent, we'll make it work." },
  { q: "Do you work with agencies?", a: "Yes — we white-label strategy, design and production for select agency partners." },
];

function Contact() {
  return (
    <main>
      {/* HERO + FORM */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <p className="chip text-pink mb-4">● Let's talk</p>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.88]">
              LET'S CREATE<br />
              <span className="text-gradient-sunset">CULTURE.</span>
            </h1>
            <p className="mt-6 max-w-md text-foreground/80">Tell us about your brand, your ambition, or your wild idea. We reply within one business day — sometimes faster, because we can't help ourselves.</p>

            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3"><span className="w-9 h-9 rounded-full bg-pink/10 text-pink grid place-items-center"><Mail size={14} /></span> hello@voxomedia.com</li>
              <li className="flex items-center gap-3"><span className="w-9 h-9 rounded-full bg-pink/10 text-pink grid place-items-center"><Phone size={14} /></span> +91 98765 43210</li>
              <li className="flex items-center gap-3"><span className="w-9 h-9 rounded-full bg-pink/10 text-pink grid place-items-center"><MapPin size={14} /></span> Mumbai • Delhi • Bengaluru</li>
            </ul>

            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-3">Follow the chaos</p>
              <div className="flex gap-3">
                {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 rounded-full border-2 border-foreground grid place-items-center hover:bg-foreground hover:text-background transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-[#fff5f9] border border-pink/20">
              <p className="font-hand text-2xl text-pink">Pssst…</p>
              <p className="text-sm mt-1">Looking for a job? Head to <Link to="/culture" className="font-bold underline">Culture</Link> — we're always hunting for sharp minds.</p>
            </div>
          </div>

          <form className="rounded-3xl bg-pink-grad text-white p-8 space-y-5 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
              <Sparkles size={14} /> Start a project
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@brand.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Brand / Company" placeholder="Brand name" />
              <Field label="Phone (optional)" placeholder="+91…" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">What do you need?</p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <label key={s} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs cursor-pointer hover:bg-white/25">
                    <input type="checkbox" className="accent-white" /> {s}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Ballpark budget</p>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <label key={b} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs cursor-pointer hover:bg-white/25">
                    <input type="radio" name="budget" className="accent-white" /> {b}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold">What can we build?</label>
              <textarea rows={4} className="mt-2 w-full bg-white/10 border border-white/30 rounded-xl p-3 outline-none placeholder-white/60 focus:border-white" placeholder="Tell us about your project, brand, ambition or wild idea…" />
            </div>

            <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-pink rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-foreground hover:text-white transition-colors">
              Send it <ArrowUpRight size={14} />
            </button>
            <p className="text-[10px] text-white/70 text-center">We reply within 1 business day. Promise.</p>
          </form>
        </div>
      </section>

      {/* OFFICES */}
      <section className="py-20 bg-gradient-to-b from-background to-[#fff5f9]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="font-display text-4xl md:text-5xl">THREE CITIES.<br />ONE <span className="text-pink scribble-underline">OBSESSION.</span></h2>
            <p className="text-xs text-muted-foreground max-w-xs">Drop by. Coffee's on us.<br />(And so is the dog.)</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {OFFICES.map((o) => (
              <motion.div key={o.city} whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden border border-border bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={o.img} alt={o.city} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-display text-2xl uppercase">{o.city}</p>
                  <p className="text-xs text-muted-foreground mt-2">{o.addr}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-bold text-pink">Get directions <ArrowUpRight size={12} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="chip text-pink mb-3">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl">QUESTIONS<br />WE GET A LOT.</h2>
            <p className="mt-5 text-sm text-muted-foreground">Still curious? <a href="mailto:hello@voxomedia.com" className="text-pink font-bold underline">Email us.</a></p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg uppercase">{f.q}</h3>
                  <span className="w-8 h-8 rounded-full border border-foreground grid place-items-center text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-foreground/80 max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sunset text-white py-14">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-3xl md:text-5xl">YOUR COMPETITORS<br />WON'T LIKE THIS.</h2>
          <a href="#top" className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-pink transition-colors">
            Start a project <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.2em] font-bold">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-1 w-full bg-transparent border-b border-white/40 py-2 outline-none placeholder-white/60 focus:border-white" />
    </div>
  );
}
