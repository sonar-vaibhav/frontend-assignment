import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonialWoman from "@/assets/testimonial-woman.jpg";

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

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Testimonial Quote Card with Decorative Borders */}
          <div className="relative">
            {/* Top Left Corner Decoration */}
            <div className="absolute -left-2 -top-2 w-16 h-16 border-l-8 border-t-8 border-primary z-10"></div>
            {/* Bottom Right Corner Decoration */}
            <div className="absolute -right-2 -bottom-2 w-16 h-16 border-r-8 border-b-8 border-primary z-10"></div>
            
            <div className="bg-white rounded-3xl p-8 lg:p-12 border-8 border-primary relative">
              <blockquote className="text-2xl md:text-3xl font-bold text-secondary mb-8">
                "Using this website has made my tasks so much easier! I can't imagine my day without it."
              </blockquote>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-primary rounded-sm"></div>
                <div>
                  <p className="font-bold text-secondary">Sherri Cronin</p>
                  <p className="text-sm text-muted-foreground">Project Manager, TechCorp</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full w-10 h-10 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  className="rounded-full w-10 h-10 bg-primary hover:bg-primary/90"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Image Card with Decorative Borders */}
          <div className="relative">
            {/* Top Right Corner Decoration */}
            <div className="absolute -right-2 -top-2 w-16 h-16 border-r-8 border-t-8 border-primary z-10"></div>
            {/* Bottom Left Corner Decoration */}
            <div className="absolute -left-2 -bottom-2 w-16 h-16 border-l-8 border-b-8 border-primary z-10"></div>
            
            <div className="rounded-3xl overflow-hidden border-8 border-primary h-[400px] lg:h-[500px]">
              <img 
                src={testimonialWoman} 
                alt="Sherri Cronin testimonial portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
