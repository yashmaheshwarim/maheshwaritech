import { motion } from "framer-motion";

interface SoftwareHeroProps {
  title: string;
  subtitle: string;
  badge: string;
}

const SoftwareHero = ({ title, subtitle, badge }: SoftwareHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* Background styling matching the landing page */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Request Demo
            </button>
            <button
              onClick={() => {
                document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-background text-foreground border border-border font-semibold hover:bg-muted transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Get Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareHero;
