import { useState } from "react";
import { Send } from "lucide-react";

interface DemoFormProps {
  defaultSoftware?: string;
}

const DemoForm = ({ defaultSoftware = "" }: DemoFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    software: defaultSoftware,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    alert("Thank you for requesting a demo! We will get back to you shortly.");
    setFormData({
      name: "",
      businessName: "",
      phone: "",
      email: "",
      software: defaultSoftware,
      message: "",
    });
  };

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-xl shadow-primary/5">
      <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Request a Demo</h3>
      <form action="https://formsubmit.co/yashhmaheshwari2@gmail.com" method="POST" className="space-y-4">
        {/* Anti-spam honey pot and success page routing */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_subject" value="New Demo Request!" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="businessName" className="text-sm font-medium text-foreground">Business Name</label>
            <input
              id="businessName"
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Your Company/Clinic"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="software" className="text-sm font-medium text-foreground">Software Interested In</label>
          <select
            id="software"
            name="software"
            value={formData.software}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
          >
            <option value="" disabled>Select a software</option>
            <option value="Clinic Management System">Clinic Management System</option>
            <option value="School Management System">School Management System</option>
            <option value="Tuition Management System">Tuition Management System</option>
            <option value="Attendance Management System">Attendance Management System</option>
            <option value="Other">Other Custom Software</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
        >
          Request Demo
          <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default DemoForm;
