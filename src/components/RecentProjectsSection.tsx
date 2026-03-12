import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import TiltCard from "./TiltCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState, useEffect } from "react";

const projects = [
  {
    title: "SS Aqua Solution",
    link: "https://ssaquasolution.com/",
    desc: "A comprehensive digital platform for water purification solutions, featuring an intuitive layout for product discovery and services.",
    images: [
      "https://images.unsplash.com/photo-1582215286481-817abaf13c9e?q=80&w=2070&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1548811579-017fa2aca5a2?q=80&w=2058&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?q=80&w=2070&auto=format&fit=crop"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Dr. Tandon's Dental Clinic",
    link: "https://drtandonsdental.com/",
    desc: "A professional and welcoming medical website designed for a dental practice, focusing on patient booking and service information.",
    images: ["https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"],
    gradient: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "Surya Hospitals",
    link: "https://suryahospitals.org/",
    desc: "A large-scale healthcare facility website offering easy access to medical departments, doctor profiles, and appointment scheduling.",
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"],
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Smaranam Physiotherapy",
    link: "https://smaranamphysioamreli.com/",
    desc: "A dedicated physical therapy clinic website, providing insights into treatments, patient resources, and contact options.",
    images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

const ImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const int = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(int);
  }, [images.length]);

  return (
    <>
      {images.map((img, i) => (
        <img 
          key={img} 
          src={img} 
          alt={title} 
          className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-1000 ease-out ${
            i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </>
  );
};

const RecentProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Recent Projects
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary mx-auto" />
          <p className="mt-4 text-muted-foreground">
            Discover some of our latest web development and digital solutions delivered to our clients.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {projects.map((project, i) => (
                <div key={project.title} className="flex-none w-full md:w-1/2 lg:w-1/2 pl-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="h-full"
                  >
                    <TiltCard className="group h-full">
                      <div className={`flex flex-col h-full rounded-2xl bg-gradient-to-br ${project.gradient} backdrop-blur-md border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500`}>
                        
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden shrink-0">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-20 pointer-events-none" />
                          <ImageSlider images={project.images} title={project.title} />
                        </div>

                        {/* Content Container */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm flex-grow mb-6 line-clamp-3">
                            {project.desc}
                          </p>
                          
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 self-start group/btn shrink-0 mt-auto"
                          >
                            Visit Website
                            <ExternalLink size={18} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          </a>
                        </div>
                        
                      </div>
                    </TiltCard>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border/50 text-foreground shadow-lg hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border/50 text-foreground shadow-lg hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all z-20"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;
