import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import heroCulture from "@/assets/hero-culture.jpg";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import t5 from "@/assets/team-5.jpg";
import t6 from "@/assets/team-6.jpg";
import t7 from "@/assets/team-7.jpg";
import t8 from "@/assets/team-8.jpg";
import t9 from "@/assets/team-9.jpg";
import t10 from "@/assets/team-10.jpg";
import t11 from "@/assets/team-11.jpg";
import t12 from "@/assets/team-12.jpg";
import t13 from "@/assets/team-13.jpg";
import t14 from "@/assets/team-14.jpg";
import t15 from "@/assets/team-15.jpg";
import t16 from "@/assets/team-16.jpg";
import dog from "@/assets/dog.jpg";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Culture — Voxo Media" },
      { name: "description", content: "Meet the creative thinkers, deadline survivors and culture builders behind Voxo Media." },
      { property: "og:title", content: "Culture — Voxo Media" },
      { property: "og:description", content: "The people who make it iconic." },
      { property: "og:image", content: heroCulture },
    ],
  }),
  component: Culture,
});

const CREW = [
  { role: "Founder & CEO", n: "Rohini Kapoor", big: "Vision First", color: "bg-[#fff6d8]", img: t1, tags: ["Empathy Led", "Vision Builder", "Big Picture Thinker"] },
  { role: "Head of Rev & Partnerships", n: "Vaishnavi Sharma Tandon", big: "Strategic Closer", color: "bg-[#e6f4ff]", img: t2, tags: ["Global Vision", "Relationship First", "Partnership Brain"] },
  { role: "Head of Content & Comms", n: "Ojaswini Gul Priya", big: "Content. Culture. Communication.", color: "bg-[#ffe6f0]", img: t4, tags: ["Voiceover Brain", "Dramatic Storyteller", "Internet Instinct"] },
  { role: "Head of Design", n: "Ankit Verma", big: "Design Systems", color: "bg-[#ffebe6]", img: t5, tags: ["Product Brain", "Detail Detective", "Figma Resident"] },
  { role: "Business Head", n: "Ritik Gupta", big: "Calm Operator", color: "bg-[#eefadc]", img: t3, tags: ["Deals Closed", "Calm Operator", "Smooth Under Pressure"] },
  { role: "Head of Post Production", n: "Ravindra Singh", big: "Post. Motion. Cinema.", color: "bg-[#f0e6ff]", img: t6, tags: ["Edit Magician", "Storage Almost Full", "Transition Nerd"] },
  { role: "Trend Spotter", n: "Shilpa Mehta", big: "Trend Spotter", color: "bg-[#fff0f0]", img: t7, tags: ["Reel Master", "Trend Radar", "Scroll Queen"] },
  { role: "AI Explorer", n: "Rajnish Kumar", big: "Future is Now!", color: "bg-[#f5eeff]", img: t8, tags: ["Prompt Crafter", "AI Whisperer", "Bot Bestie"] },
  { role: "Type Lover", n: "Anu Priya", big: "Words That Work", color: "bg-[#fff6d8]", img: t9, tags: ["Typography", "Grid Obsessive", "Language Nerd"] },
  { role: "Concept King", n: "Abu Zayab", big: "Big Ideas Bigger Impact", color: "bg-[#ffebe6]", img: t10, tags: ["Conceptual Thinker", "Campaign Architect", "Big Picture"] },
  { role: "ROAS Hunter", n: "Ritika Singh", big: "ROAS rules all", color: "bg-[#e6f4ff]", img: t11, tags: ["Performance Nerd", "Analytics Lover", "Ad Cost Dictator"] },
  { role: "Code Ninja", n: "Aman Khan", big: "Code. Sleep. Repeat.", color: "bg-[#eefadc]", img: t12, tags: ["Problem Solver", "Full Stack Genius", "Clean Code Fan"] },
  { role: "Pitch Perfect", n: "Devyank Thapar", big: "Pitch Perfect Win", color: "bg-[#fff6d8]", img: t14, tags: ["Persuasive", "Story Wrapper", "Relationship Pro"] },
  { role: "Networking Mode", n: "Hriday Makkar", big: "Network Maker", color: "bg-[#eefadc]", img: t15, tags: ["Always Online", "Connection Maker", "Collaborator"] },
  { role: "Client Whisperer", n: "Ritika Khanna", big: "Client's Bestie", color: "bg-[#fff0f0]", img: t13, tags: ["Crisis Averter", "Inbox Zero Hero", "Smooth Talker"] },
  { role: "Everything Manager", n: "Raju Bhaiya", big: "Office Savior", color: "bg-[#ffebe6]", img: t16, tags: ["Operations", "Problem Solver", "Go-To Person"] },
];

function Culture() {
  return (
    <main className="bg-[#fcfbf8]">
      {/* HERO */}
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(252,251,248,0.85), rgba(252,251,248,0.35)), url(${heroCulture})` }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 grid items-center min-h-[50vh]">
          <div className="max-w-2xl">
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.88] mt-10">
              <span className="text-pink">THE VOXO CREW</span>
            </h1>
            <p className="mt-4 text-foreground/80 font-serif italic text-lg max-w-2xl">
              The people behind the ideas, deadlines, campaigns, chaos, edits, coffee runs and iconic work.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-10 bg-[#fcfbf8]">
        <div className="mx-auto max-w-[1400px] px-6">
          {/* Top Categories Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { l: "THE BRAINIACS", d: "Strategy, Growth, Partnerships", c: "text-purple-600 border-purple-200" },
              { l: "THE CREATIVES", d: "Content, Communication, Creators", c: "text-pink border-pink/30" },
              { l: "THE MAKERS", d: "Design, Production, Editing", c: "text-orange-500 border-orange-200" },
              { l: "THE HUSTLERS", d: "Business, Sales, Operations", c: "text-green-600 border-green-200" },
              { l: "THE CHAOS MANAGERS", d: "Culture, Admin, Client Exp", c: "text-blue-500 border-blue-200" }
            ].map(cat => (
              <div key={cat.l} className={`px-4 py-2 rounded-xl border bg-white shadow-sm flex flex-col items-start ${cat.c}`}>
                <p className="font-display text-xs tracking-wider">{cat.l}</p>
                <p className="text-[9px] text-muted-foreground mt-0.5">{cat.d}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREW.map((p) => (
              <CrewCard key={p.n} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* FROOTI */}
      <section className="py-12 bg-[#fcfbf8]">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="rounded-3xl bg-[#dbeefb] p-8 md:p-12 border border-[#b8ddf5] shadow-sm grid md:grid-cols-[1fr_auto] gap-8 items-center relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 z-10">
              <img src={dog} alt="Frooti" width={240} height={240} loading="lazy" className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-white" />
              <div className="text-center md:text-left pt-4">
                <p className="font-display text-blue-600 tracking-wider text-sm uppercase">Meet our Chief Happiness Officer</p>
                <h2 className="font-display text-6xl md:text-7xl mt-1 text-[#1e3a8a]">FROOTI <PawPrint className="inline text-[#1e3a8a]" size={40} /></h2>
                <p className="text-sm font-medium text-blue-900/70 mt-3 max-w-sm">Responsible for morale, surprise inspections and emotionally distracting the entire office.</p>
              </div>
            </div>
            
            <div className="bg-yellow-100/80 p-6 rounded-lg rotate-2 shadow-sm border border-yellow-200 max-w-xs z-10 self-center md:justify-self-end">
              <p className="font-hand text-xl text-yellow-800 leading-snug">"Powered by treats & bellyrubs!"</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
                {["Mood Booster", "Snack Inspector", "Nap Professional"].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white text-yellow-900 border border-yellow-200 font-medium">● {t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFE AT VOXO (Placeholder for polaroids) */}
      <section className="py-14 bg-[#fcfbf8]">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-4xl mb-4">LIFE AT <span className="text-pink">VOXO</span></h2>
          <p className="font-hand text-2xl text-muted-foreground mb-12">Hustle hard. Laugh harder. Create iconic.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {/* Simple polaroid placeholders mapping to the mockup style */}
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`bg-white p-3 rounded shadow-md border border-gray-100 ${i%2===0 ? 'rotate-2' : '-rotate-1'} transition-transform hover:scale-105 hover:z-10`}>
                <div className="aspect-[4/3] bg-gray-100 rounded-sm mb-3"></div>
                <p className="font-hand text-lg text-center text-gray-600">Snapshot {i}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-border p-8 rounded-2xl shadow-sm">
            <div>
              <h3 className="font-display text-3xl">WANT TO BUILD<br />ICONIC THINGS TOO?</h3>
              <p className="text-sm text-muted-foreground mt-2">Join the culture. Create iconic. Leave your mark.</p>
            </div>
            <Link to="/contact" className="mt-6 md:mt-0 btn-pink px-8 py-4 text-sm inline-flex shadow-lg shadow-pink/20 hover:shadow-pink/40">JOIN THE VOXO CREW <ArrowUpRight size={16} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CrewCard({ role, n, big, color, img, tags }: typeof CREW[number]) {
  return (
    <div className={`relative rounded-3xl ${color} p-6 h-[340px] flex flex-col justify-between overflow-hidden group shadow-sm border border-black/5 transition-transform hover:-translate-y-1`}>
      {/* Text Content */}
      <div className="z-10 max-w-[60%]">
        <h3 className="font-display text-2xl leading-[0.9] uppercase tracking-tight">{n.split(' ').map((part, i) => <span key={i} className="block">{part}</span>)}</h3>
        <p className="text-[9px] uppercase tracking-wider font-bold mt-2 opacity-70">{role}</p>
        <p className="font-hand text-xl text-pink mt-4 leading-tight">{big}</p>
      </div>
      
      {/* Image on Right */}
      <div className="absolute bottom-0 right-0 w-[55%] h-[85%] z-0 origin-bottom transition-transform duration-500 group-hover:scale-105">
        <img src={img} alt={n} loading="lazy" className="w-full h-full object-cover object-top filter contrast-[1.05]" style={{ maskImage: 'linear-gradient(to top, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 85%, transparent 100%)' }} />
      </div>

      {/* Tags at Bottom */}
      <div className="z-10 mt-auto pt-4 flex flex-wrap gap-1.5 relative">
        {tags.map(t => (
          <span key={t} className="px-2 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-[8px] font-bold uppercase text-black/70 shadow-sm">{t}</span>
        ))}
      </div>
    </div>
  );
}
