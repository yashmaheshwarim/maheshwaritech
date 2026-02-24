import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Structured Development Process",
  "Clear Requirement Analysis",
  "Long-Term Maintainability",
  "Transparent Pricing",
  "Direct Founder Communication",
];

const WhyChooseSection = () => (
  <section id="why-us" className="section-padding bg-navy text-navy-foreground">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Why Choose Maheshwari Tech
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-accent mx-auto" />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-navy-foreground/5 border border-navy-foreground/10"
          >
            <CheckCircle2 size={20} className="text-accent shrink-0" />
            <span className="font-medium text-sm">{r}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
