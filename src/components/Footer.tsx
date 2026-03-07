import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground py-10 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <img src={logo} alt="Maheshwari Tech" className="h-8 brightness-0 invert drop-shadow-[0_0_6px_hsl(199_80%_50%/0.4)]" />
      </motion.div>
      <p className="text-sm text-navy-foreground/60">
        © {new Date().getFullYear()} Maheshwari Tech. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
