import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-background">
    <div className="container mx-auto max-w-4xl">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <a
          href="tel:+918511923811"
          className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
        >
          <Phone size={24} className="text-primary" />
          <span className="text-sm font-medium text-foreground">
            +91 8511923811
          </span>
          <span className="text-xs text-muted-foreground">Phone & WhatsApp</span>
        </a>

        <a
          href="mailto:yashhmaheshwari2@gmail.com"
          className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
        >
          <Mail size={24} className="text-primary" />
          <span className="text-sm font-medium text-foreground">
            yashhmaheshwari2@gmail.com
          </span>
          <span className="text-xs text-muted-foreground">Email Us</span>
        </a>

        <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border">
          <MapPin size={24} className="text-primary" />
          <span className="text-sm font-medium text-foreground">
            Ahmedabad, Gujarat
          </span>
          <span className="text-xs text-muted-foreground">India</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <a
          href="https://wa.me/918511923811"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-base font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={18} />
          Schedule a Free Consultation
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
