import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background relative overflow-hidden">
    {/* Floating orb */}
    <motion.div
      animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
      transition={{ duration: 20, repeat: Infinity }}
      className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"
    />

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Who We Are
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Maheshwari Tech is a technology-driven development company based in
            Ahmedabad, Gujarat. We build scalable, maintainable, and
            performance-focused digital solutions for businesses that value
            structured engineering over shortcuts.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our approach is centered around clean architecture, proper
            documentation, optimized performance, and long-term maintainability.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-medium text-foreground text-xl"
          >
            We don't just deliver projects — we build digital systems designed to
            grow with your business.
          </motion.p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
