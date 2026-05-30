import { ArrowUpRight, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      {/* Newsletter band */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid lg:grid-cols-2 gap-10">
        <div className="relative overflow-hidden rounded-3xl p-10 bg-pink-grad text-white">
          <h3 className="font-display text-4xl md:text-5xl leading-[0.95]">
            LET'S BUILD<br />SOMETHING ICONIC.
          </h3>
          <p className="mt-4 text-white/90 max-w-sm">Ready to create culture with us?</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-pink rounded-full text-xs font-bold uppercase tracking-[0.2em]">
            Let's Talk <ArrowUpRight size={14} />
          </Link>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <p className="chip text-muted-foreground mb-3">● Stay in the loop</p>
            <form className="flex items-center gap-2 border-b-2 border-foreground pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                required
                className="flex-1 bg-transparent outline-none text-sm py-2"
              />
              <button className="p-2 rounded-full bg-foreground text-background" aria-label="Subscribe"><ArrowUpRight size={14} /></button>
            </form>
            <label className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <input type="checkbox" /> I agree to receive updates from Voxo Media
            </label>
          </div>
          <div>
            <p className="chip text-muted-foreground mb-3">● Follow us</p>
            <ul className="space-y-2 text-sm">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a href="#" aria-label={`Follow us on ${label}`} className="flex items-center justify-between gap-3 py-1 border-b border-border group">
                    <span className="flex items-center gap-3"><Icon size={16} /> {label}</span>
                    <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <Logo className="text-base" />
            <span>© 2026 Voxo Media. All rights reserved.</span>
          </div>
          <span className="font-hand text-base text-foreground">Made with culture. Built to last.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

