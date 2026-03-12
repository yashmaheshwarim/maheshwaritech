import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SoftwareBenefitsProps {
  benefits: string[];
}

const SoftwareBenefits = ({ benefits }: SoftwareBenefitsProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                Why Choose Our Software?
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                Key Benefits for Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Designed to streamline operations, enhance productivity, and provide actionable insights for better decision-making.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col gap-4 h-full">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Check size={20} />
                    </div>
                    <span className="font-semibold text-foreground text-lg">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SoftwareBenefits;
