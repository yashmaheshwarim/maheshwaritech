import { motion } from "framer-motion";
import { Code2, Layers, Shield, Zap, Bug, MessagesSquare } from "lucide-react";

const principles = [
  { icon: Code2, label: "Clean & Maintainable Code" },
  { icon: Layers, label: "Scalable Architecture" },
  { icon: Shield, label: "Security-Focused Implementation" },
  { icon: Zap, label: "Performance Optimization" },
  { icon: Bug, label: "Proper Testing & Debugging" },
  { icon: MessagesSquare, label: "Transparent Communication" },
];

const StandardsSection = () => (
  <section id="standards" className="section-padding bg-background">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Our Development Standards
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary mx-auto" />
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Engineering principles that guide every line of code we write.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
        {principles.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <p.icon size={22} />
            </div>
            <span className="text-sm font-medium text-foreground text-center">
              {p.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StandardsSection;
