import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonialWoman from "@/assets/testimonial-woman.jpg";

// Testimonials section with decorative corner brackets
const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
          Customer Testimonials
        </h2>
        <p className="text-muted-foreground mb-12">
          This tool has transformed my productivity and organization!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial card with corner bracket borders */}
          <div className="relative bg-white rounded-3xl p-8 lg:p-12">
            {/* Corner brackets decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-primary rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-primary rounded-br-3xl" />
            
            <blockquote className="text-2xl md:text-3xl font-bold text-secondary mb-8 relative z-10">
              "Using this website has made my tasks so much easier! I can't imagine my day without it."
            </blockquote>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-3 h-3 bg-primary rounded-sm flex-shrink-0" />
              <div>
                <p className="font-bold text-secondary">Sherri Cronin</p>
                <p className="text-sm text-muted-foreground">Project Manager, TechCorp</p>
              </div>
            </div>

            <div className="flex gap-2 relative z-10">
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-10 h-10 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                className="rounded-full w-10 h-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Testimonial image with corner bracket borders */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
            {/* Corner brackets decorations */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-primary rounded-tr-3xl z-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-primary rounded-bl-3xl z-10" />
            
            <img 
              src={testimonialWoman} 
              alt="Sherri Cronin testimonial" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
