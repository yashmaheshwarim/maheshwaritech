import { motion } from "framer-motion";
import { Monitor, Building2, Wrench, MapPin, Smartphone } from "lucide-react";
import TiltCard from "./TiltCard";

const services = [
  {
    icon: Monitor,
    title: "Web & WebApp Development",
    desc: "Custom websites and web applications built with scalable architecture and clean code practices.",
    bullets: ["Responsive UI/UX", "Secure Backend Development", "API Integration", "Admin Dashboards", "Performance Optimization"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Building2,
    title: "Software & ERP Development",
    desc: "Custom ERP and business automation systems tailored to your workflow.",
    bullets: ["Inventory Management", "CRM Systems", "Custom ERP Modules", "Role-Based Access", "Business Process Automation"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keeping your digital assets secure, optimized, and updated.",
    bullets: ["Security Updates", "Bug Fixes", "Speed Optimization", "Backup & Monitoring"],
    gradient: "from-primary/15 to-accent/25",
  },
  {
    icon: MapPin,
    title: "GMB Profile Optimization",
    desc: "Professional Google Business Profile setup and optimization to improve local visibility.",
    bullets: ["Profile Setup & Verification", "SEO Optimization", "Review Management Strategy", "Local Ranking Improvements"],
    gradient: "from-accent/25 to-primary/15",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    desc: "Modern Android and cross-platform applications built for performance and usability.",
    bullets: ["Native & Hybrid Apps", "API Integration", "Scalable Backend", "Deployment Support"],
    gradient: "from-primary/20 to-accent/15",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/30 relative overflow-hidden">
    {/* Background orb */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <TiltCard className="group h-full">
              <div className={`h-full rounded-2xl bg-gradient-to-br ${s.gradient} backdrop-blur-md border border-border/50 p-6 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/10">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-4 text-xl font-heading font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
