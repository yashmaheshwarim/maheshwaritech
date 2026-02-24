import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto max-w-4xl">
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
          <p>
            Maheshwari Tech is a technology-driven development company based in
            Ahmedabad, Gujarat. We build scalable, maintainable, and
            performance-focused digital solutions for businesses that value
            structured engineering over shortcuts.
          </p>
          <p>
            Our approach is centered around clean architecture, proper
            documentation, optimized performance, and long-term maintainability.
          </p>
          <p className="font-medium text-foreground">
            We don't just deliver projects — we build digital systems designed to
            grow with your business.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
