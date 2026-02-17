import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("#");

  const sectionIds = useMemo(() => links.map((l) => l.href.replace("#", "")).filter(Boolean), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (!visible.length) return;

        const id = visible[0].target.id;
        setActiveSection(`#${id}`);
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.55],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/55 backdrop-blur-xl border-b border-border/60 supports-[backdrop-filter]:bg-background/40">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="group flex items-center">
          <span className="font-bold text-lg tracking-tight text-foreground leading-none">
            <span className="text-primary">Ustadz</span>
            <span className="text-foreground/90"> Coding</span>
            <span className="block text-[11px] font-medium tracking-wide text-muted-foreground/90 group-hover:text-muted-foreground transition-colors">
              Portfolio
            </span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-active={activeSection === link.href}
              className="group relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground transition-colors"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-x-2 top-1/2 -translate-y-1/2 -z-0 h-9 rounded-full bg-card/50 opacity-0 group-hover:opacity-100 data-[active=true]:opacity-100 transition-opacity" />
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 scale-x-75 group-hover:opacity-100 group-hover:scale-x-100 data-[active=true]:opacity-100 data-[active=true]:scale-x-100 transition-all" />
            </a>
          ))}
          <button
            onClick={toggle}
            className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-card/30 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card/50 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-card/30 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card/50 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-card/20 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card/40 transition-all"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/60 bg-background/55 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4">
              <div className="rounded-2xl border border-border/60 bg-card/25 p-2 flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    data-active={activeSection === link.href}
                    onClick={() => setOpen(false)}
                    className="group relative rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground transition-colors"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 rounded-xl bg-card/50 opacity-0 group-hover:opacity-100 data-[active=true]:opacity-100 transition-opacity" />
                    <span className="absolute left-3 right-3 bottom-1 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 scale-x-75 group-hover:opacity-100 group-hover:scale-x-100 data-[active=true]:opacity-100 data-[active=true]:scale-x-100 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
