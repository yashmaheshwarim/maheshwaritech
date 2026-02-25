import { motion } from "framer-motion";
import { Rocket, MessageCircle } from "lucide-react";
import { Suspense } from "react";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 40, 0], y: [0, 20, -40, 0], scale: [1, 0.9, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 20, -10, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/10 blur-[80px]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-navy-foreground leading-tight max-w-5xl mx-auto"
          >
            Engineering Scalable Digital Solutions for{" "}
            <motion.span
              className="gradient-text inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Modern Businesses
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-navy-foreground/70 max-w-2xl mx-auto backdrop-blur-sm"
        >
          Maheshwari Tech delivers high-performance Web, Software, ERP, and
          Application Development solutions built with industry best practices
          and long-term scalability in mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(211 70% 45% / 0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-8 py-4 text-base font-semibold transition-all shadow-lg shadow-primary/25"
          >
            <Rocket size={18} />
            Start a Project
          </motion.a>
          <motion.a
            href="https://wa.me/918511923811"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-foreground/20 text-navy-foreground px-8 py-4 text-base font-semibold backdrop-blur-md bg-navy-foreground/5 hover:bg-navy-foreground/10 transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-navy-foreground/30 flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-navy-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
