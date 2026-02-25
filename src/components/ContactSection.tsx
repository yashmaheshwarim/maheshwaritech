import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import TiltCard from "./TiltCard";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
    </div>

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Let's Build Something Reliable
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary mx-auto" />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { href: "tel:+918511923811", icon: Phone, label: "+91 8511923811", sub: "Phone & WhatsApp" },
          { href: "mailto:yashhmaheshwari2@gmail.com", icon: Mail, label: "yashhmaheshwari2@gmail.com", sub: "Email Us" },
          { href: undefined, icon: MapPin, label: "Ahmedabad, Gujarat", sub: "India" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <TiltCard className="group h-full">
              {item.href ? (
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={22} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.sub}</span>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.sub}</span>
                </div>
              )}
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <motion.a
          href="https://wa.me/918511923811"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(211 70% 45% / 0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-lg shadow-primary/25 transition-all"
        >
          <MessageCircle size={18} />
          Schedule a Free Consultation
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
