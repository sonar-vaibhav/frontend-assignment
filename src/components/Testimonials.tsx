import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";
import testimonialWoman from "@/assets/testimonial-woman.jpg";
import heroTestimonial from "@/assets/hero-testimonial.jpg";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Using this website has made my tasks so much easier! I can't imagine my day without it.",
    name: "Sherri Cronin",
    role: "Project Manager, TechCorp",
    image: testimonialWoman,
  },
  {
    id: 2,
    quote: "The best productivity tool I've ever used. It's intuitive, powerful, and saves me hours every week!",
    name: "Michael Chen",
    role: "Software Engineer, InnovateLabs",
    image: heroTestimonial,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
          Customer Testimonials
        </h2>
        <p className="text-muted-foreground mb-12">
          This tool has transformed my productivity and organization!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-40 items-center">
          <div className="relative bg-white border-[10px] border-primary w-full lg:w-[390px] lg:h-[555px] mx-auto">
            <div className="relative left-6 lg:left-8 bg-white p-10 sm:p-8 pl-16 sm:pl-12 lg:pl-16 mt-5 mb-5 sm:mt-[20px] sm:mb-[20px] sm:p-2 lg:mt-[85px] lg:w-[580px]">
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-6 sm:mb-8">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-primary rounded-sm flex-shrink-0" />
                <div>
                  <p className="font-bold text-secondary">{currentTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  className="rounded-full w-10 h-10 border-2 border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button 
                  className="rounded-full w-10 h-10 bg-primary text-white hover:bg-primary/90 flex items-center justify-center transition-colors"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden h-fit lg:h-[400px] w-fit">
            <img 
              src={currentTestimonial.image} 
              alt={`${currentTestimonial.name} testimonial`} 
              className="h-full object-contain border-r-[10px] border-t-[10px] border-b-[10px] border-primary pr-[10px] pt-[10px] pb-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
