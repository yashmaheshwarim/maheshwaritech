import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Maheshwari Tech" className="h-8 brightness-0 invert" />
      </div>
      <p className="text-sm text-navy-foreground/60">
        © {new Date().getFullYear()} Maheshwari Tech. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
