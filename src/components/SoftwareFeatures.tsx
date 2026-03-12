import { CheckCircle2 } from "lucide-react";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

interface SoftwareFeaturesProps {
  title: string;
  features: string[];
}

const SoftwareFeatures = ({ title, features }: SoftwareFeaturesProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            {title}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="h-full bg-card border border-border/50 rounded-2xl p-6 flex items-start gap-4 hover:border-primary/50 hover:shadow-lg transition-all">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                  <span className="font-medium text-foreground text-lg">{feature}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareFeatures;
