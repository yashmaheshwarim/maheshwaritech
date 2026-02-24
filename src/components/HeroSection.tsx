import { motion } from "framer-motion";
import { Rocket, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      <div className="container mx-auto relative z-10 text-center px-4 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground leading-tight max-w-4xl mx-auto"
        >
          Engineering Scalable Digital Solutions for{" "}
          <span className="gradient-text">Modern Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-navy-foreground/80 max-w-2xl mx-auto"
        >
          Maheshwari Tech delivers high-performance Web, Software, ERP, and
          Application Development solutions built with industry best practices
          and long-term scalability in mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-base font-semibold hover:opacity-90 transition-opacity"
          >
            <Rocket size={18} />
            Start a Project
          </a>
          <a
            href="https://wa.me/918511923811"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy-foreground/30 text-navy-foreground px-8 py-3.5 text-base font-semibold hover:bg-navy-foreground/10 transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
