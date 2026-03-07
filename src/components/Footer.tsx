import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground py-10 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 relative z-10">
      <p className="text-sm text-navy-foreground/60">
        © {new Date().getFullYear()} Maheshwari Tech. All rights reserved.
      </p>
      <p className="text-sm text-navy-foreground/50">
        Proudly Made in India <span className="text-red-500">❤️</span>
      </p>
    </div>
  </footer>
);

export default Footer;
