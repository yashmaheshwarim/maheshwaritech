import { motion } from "framer-motion";

interface Screenshot {
  title: string;
  image: string;
}

interface SoftwareScreenshotsProps {
  screenshots: Screenshot[];
}

const SoftwareScreenshots = ({ screenshots }: SoftwareScreenshotsProps) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            See It In Action
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Get a glimpse into the clean, intuitive, and modern interface designed for ease of use.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
          {screenshots.map((screenshot, i) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-8 items-center ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl mb-6">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {screenshot.title}
                </h3>
              </div>
              
              <div className="w-full lg:w-2/3">
                <div className="rounded-2xl border border-border/50 bg-card p-2 md:p-4 shadow-2xl shadow-primary/10 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  <div className="relative w-full aspect-[16/9] md:aspect-[16/10] overflow-hidden rounded-xl bg-muted/30">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareScreenshots;
