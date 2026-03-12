import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import DemoForm from "@/components/DemoForm";
import TiltCard from "@/components/TiltCard";
import { Stethoscope, GraduationCap, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const softwareCards = [
  {
    title: "Clinic Management System",
    icon: Stethoscope,
    desc: "Smart software to manage Patients, Appointments, Billing, and Reports for Hospitals & Clinics.",
    link: "/clinic-management-system",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "School Management System",
    icon: GraduationCap,
    desc: "Complete digital system for schools to manage students, staff, academics, and administration.",
    link: "/school-management-system",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Tuition Management System",
    icon: Users,
    desc: "Perfect software for coaching classes and tuition institutes to manage batches, fees, and students.",
    link: "/tuition-management-system",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Attendance Management System",
    icon: Clock,
    desc: "Track attendance with detailed reports and analytics for Offices & Schools.",
    link: "/attendance-management-system",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

const SoftwareSolutions = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Software Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering businesses with modern, scalable, and intuitive software tailored for your industry.
            </p>
          </motion.div>

          {/* Software Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
            {softwareCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={card.link}>
                  <TiltCard className="h-full">
                    <div className={`h-full rounded-2xl bg-gradient-to-br ${card.gradient} backdrop-blur-md border border-border/50 p-8 hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer flex flex-col items-center text-center`}>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-sm">
                        <card.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">{card.title}</h3>
                      <p className="text-muted-foreground">{card.desc}</p>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Which Software is Right for You?
              </h2>
              <div className="h-1 w-16 rounded-full bg-primary mx-auto" />
            </div>
            <ComparisonTable />
          </motion.div>

          {/* Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
            id="demo-form"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Want a Demo?
              </h2>
              <p className="text-muted-foreground">
                Get in touch with us at <a href="tel:+918511923811" className="text-primary hover:underline font-medium">+91 8511923811</a> or fill out the form below.
              </p>
            </div>
            <DemoForm />
          </motion.div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SoftwareSolutions;
