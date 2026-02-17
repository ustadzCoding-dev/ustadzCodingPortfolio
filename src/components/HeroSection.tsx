import { motion } from "framer-motion";
import { Shield, ChevronDown } from "lucide-react";
import { WavyBackground } from "./ui/wavy-background";
import logoBrand from "@/assets/logo-brand.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <WavyBackground
        className="absolute inset-0 z-0"
        blur={6}
        waveOpacity={0.55}
        speed="fast"
        colors={["#14b8a6", "#38bdf8", "#22c55e"]}
        backgroundFill="rgba(20, 184, 166, 0.06)"
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-2">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-secondary/50 text-sm font-mono text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Full Stack Developer & QA Expert</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Crafting{" "}
              <span className="text-gradient-primary">Software Quality</span>
              <br />
              & Reliability
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl md:max-w-none mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              Building robust, scalable systems and ensuring every line of code meets the highest standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:shadow-[var(--glow-primary-strong)] transition-shadow duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3 rounded-lg border border-border bg-secondary/50 text-secondary-foreground font-semibold text-sm tracking-wide hover:bg-secondary transition-colors duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              <motion.div
                animate={{ y: [0, -10, 0], scale: [1, 1.015, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto"
              >
                <div className="hero-glow-ring p-8 sm:p-10">
                  <div className="relative flex flex-col items-center">
                    <img
                      src={logoBrand}
                      alt="Ustadz Coding-Dev"
                      className="w-56 h-56 sm:w-64 sm:h-64 rounded-full ring-1 ring-border/70 bg-background/30 backdrop-blur"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
