import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/culture", label: "Culture" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]);
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderBottom = useTransform(scrollY, [0, 50], ["1px solid transparent", "1px solid rgba(0, 0, 0, 0.05)"]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header 
        style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom }}
        className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
      >
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  aria-current={active ? "page" : undefined}
                  className={`text-[11px] uppercase tracking-[0.22em] font-semibold relative ${
                    active ? "text-pink" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-pink rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-foreground hover:text-background transition-colors"
          >
            Let's Create <ArrowUpRight size={14} />
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-foreground/20"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col md:hidden"
          >
            {/* Top bar with logo + close */}
            <div className="mx-auto w-full max-w-7xl px-6 h-20 flex items-center justify-between shrink-0">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 grid place-items-center rounded-full border border-foreground/20"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-10 gap-2" aria-label="Mobile navigation">
              {links.map((l, i) => {
                const active = pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={l.to}
                      className={`font-display text-4xl uppercase tracking-tight py-2 block ${
                        active ? "text-pink" : "text-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA at bottom */}
            <div className="px-10 pb-10 shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--gradient-pink)" }}
                >
                  Let's Create <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
