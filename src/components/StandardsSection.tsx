import { motion } from "framer-motion";
import { Code2, Layers, Shield, Zap, Bug, MessagesSquare } from "lucide-react";
import TiltCard from "./TiltCard";

const principles = [
  { icon: Code2, label: "Clean & Maintainable Code" },
  { icon: Layers, label: "Scalable Architecture" },
  { icon: Shield, label: "Security-Focused Implementation" },
  { icon: Zap, label: "Performance Optimization" },
  { icon: Bug, label: "Proper Testing & Debugging" },
  { icon: MessagesSquare, label: "Transparent Communication" },
];

const StandardsSection = () => (
  <section id="standards" className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
    </div>

    <div className="container mx-auto max-w-4xl text-center relative z-10">
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
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <TiltCard className="group h-full">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <p.icon size={24} />
                </motion.div>
                <span className="text-sm font-medium text-foreground text-center">
                  {p.label}
                </span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StandardsSection;
