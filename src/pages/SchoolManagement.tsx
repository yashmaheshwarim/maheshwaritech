import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareFeatures from "@/components/SoftwareFeatures";
import SoftwareScreenshots from "@/components/SoftwareScreenshots";
import SoftwareBenefits from "@/components/SoftwareBenefits";
import DemoForm from "@/components/DemoForm";
import { useEffect } from "react";
import { motion } from "framer-motion";

const SchoolManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Student & Staff Information System",
    "Attendance & Timetable Management",
    "Fee Collection & Defaulter Tracking",
    "Examination & Result Generation",
    "Transport & Hostel Management",
    "Parent-Teacher Communication App",
  ];

  const screenshots = [
    { title: "Admin Dashboard", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
    { title: "Student Management", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" },
    { title: "Fee Tracking", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" },
    { title: "Parent App Interface", image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop" },
  ];

  const benefits = [
    "Streamline All Administrative Operations",
    "Improve Communication with Parents",
    "Boost Staff Productivity and Efficiency",
    "Secure Cloud-Based Data Storage",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <SoftwareHero 
          badge="Education Solution"
          title="School Management System"
          subtitle="A complete digital ecosystem for modern schools. Manage everything from admissions to alumni efficiently."
        />
        <SoftwareFeatures 
          title="School Management Features" 
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
                Get in touch with us at <a href="tel:+918511923811" className="text-primary hover:underline font-medium">+91 8511923811</a> or fill out the form below to see how it can transform your school.
              </p>
            </motion.div>
            <DemoForm defaultSoftware="School Management System" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SchoolManagement;
