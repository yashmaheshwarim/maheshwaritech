import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Structured Development Process",
  "Clear Requirement Analysis",
  "Long-Term Maintainability",
  "Transparent Pricing",
  "Direct Founder Communication",
  "Post-Launch Support & Maintenance",
];

const WhyChooseSection = () => (
  <section id="why-us" className="section-padding bg-navy text-navy-foreground relative overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-navy-foreground/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-navy-foreground/5 rounded-full"
      />
    </div>

    <div className="container mx-auto max-w-4xl relative z-10">
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
            initial={{ opacity: 0, x: -30, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, x: 5 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-navy-foreground/5 border border-navy-foreground/10 backdrop-blur-sm hover:bg-navy-foreground/10 hover:border-accent/30 transition-all duration-300 cursor-default"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
            >
              <CheckCircle2 size={20} className="text-accent shrink-0" />
            </motion.div>
            <span className="font-medium text-sm">{r}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
