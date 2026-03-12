import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareFeatures from "@/components/SoftwareFeatures";
import SoftwareScreenshots from "@/components/SoftwareScreenshots";
import SoftwareBenefits from "@/components/SoftwareBenefits";
import DemoForm from "@/components/DemoForm";
import { useEffect } from "react";
import { motion } from "framer-motion";

const TuitionManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Batch & Student Management",
    "Fee Collection & Reminders",
    "Test & Result Tracking",
    "Study Material Distribution",
    "Enquiry Management & Leads",
    "Faculty Salary & Attendance",
  ];

  const screenshots = [
    { title: "Coaching Dashboard", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" },
    { title: "Class Scheduling", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" },
    { title: "Fees & Invoices", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
    { title: "Test Results", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" },
  ];

  const benefits = [
    "Eliminate Manual Calculation Errors",
    "Send Automated Fee Reminders to Parents",
    "Organize Multiple Batches Effortlessly",
    "Keep Parents Updated on Student Progress",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <SoftwareHero 
          badge="Coaching Solution"
          title="Tuition Management System"
          subtitle="Perfect software for coaching classes and tuition institutes to manage batches, fees, and students with ease."
        />
        <SoftwareFeatures 
          title="Tuition Management Features" 
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
            <DemoForm defaultSoftware="Tuition Management System" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TuitionManagement;
