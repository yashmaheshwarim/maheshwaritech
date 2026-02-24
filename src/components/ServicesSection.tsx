import { motion } from "framer-motion";
import {
  Monitor,
  Building2,
  Wrench,
  MapPin,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web & WebApp Development",
    desc: "Custom websites and web applications built with scalable architecture and clean code practices.",
    bullets: [
      "Responsive UI/UX",
      "Secure Backend Development",
      "API Integration",
      "Admin Dashboards",
      "Performance Optimization",
    ],
  },
  {
    icon: Building2,
    title: "Software & ERP Development",
    desc: "Custom ERP and business automation systems tailored to your workflow.",
    bullets: [
      "Inventory Management",
      "CRM Systems",
      "Custom ERP Modules",
      "Role-Based Access",
      "Business Process Automation",
    ],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keeping your digital assets secure, optimized, and updated.",
    bullets: [
      "Security Updates",
      "Bug Fixes",
      "Speed Optimization",
      "Backup & Monitoring",
    ],
  },
  {
    icon: MapPin,
    title: "GMB Profile Optimization",
    desc: "Professional Google Business Profile setup and optimization to improve local visibility.",
    bullets: [
      "Profile Setup & Verification",
      "SEO Optimization",
      "Review Management Strategy",
      "Local Ranking Improvements",
    ],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    desc: "Modern Android and cross-platform applications built for performance and usability.",
    bullets: [
      "Native & Hybrid Apps",
      "API Integration",
      "Scalable Backend",
      "Deployment Support",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Our Services
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary mx-auto" />
        <p className="mt-4 text-muted-foreground">
          End-to-end digital solutions engineered for reliability and growth.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={24} />
            </div>
            <h3 className="mt-4 text-xl font-heading font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
