import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareFeatures from "@/components/SoftwareFeatures";
import SoftwareScreenshots from "@/components/SoftwareScreenshots";
import SoftwareBenefits from "@/components/SoftwareBenefits";
import DemoForm from "@/components/DemoForm";
import { useEffect } from "react";
import { motion } from "framer-motion";

const AttendanceManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Biometric & RFID Integration",
    "Real-time Attendance Tracking",
    "Leave & Shift Management",
    "Overtime Calculation",
    "Mobile App for Self-Attendance",
    "Automated HR Reports",
  ];

  const screenshots = [
    { title: "Employee Dashboard", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
    { title: "Attendance Logs", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { title: "Leave Management", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
    { title: "Shift Scheduler", image: "https://images.unsplash.com/photo-1507925922873-b4c1cd05b50a?q=80&w=2070&auto=format&fit=crop" },
  ];

  const benefits = [
    "Ensure 100% Accuracy in Attendance",
    "Calculate Salaries Faster with Exportable Data",
    "Prevent Proxy Attendance and Time Theft",
    "Access Data Anywhere via Mobile",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <SoftwareHero 
          badge="HR Solution"
          title="Attendance Management System"
          subtitle="Track attendance with powerful reports, analytics, and seamless biometric integrations for modern workplaces."
        />
        <SoftwareFeatures 
          title="Attendance Management Features" 
          features={features} 
        />
        <SoftwareScreenshots screenshots={screenshots} />
        <SoftwareBenefits benefits={benefits} />
        
        {/* Demo Section */}
        <section className="py-20 bg-background" id="demo-form">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Want a Demo?
              </h2>
              <p className="text-muted-foreground">
                Get in touch with us at <a href="tel:+918511923811" className="text-primary hover:underline font-medium">+91 8511923811</a> or fill out the form below.
              </p>
            </motion.div>
            <DemoForm defaultSoftware="Attendance Management System" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AttendanceManagement;
