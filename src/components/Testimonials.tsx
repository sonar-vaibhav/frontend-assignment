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
                className="rounded-full w-10 h-10"
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

          <div className="relative rounded-3xl overflow-hidden border-8 border-primary h-[400px] lg:h-[500px]">
            <img 
              src={testimonialWoman} 
              alt="Sherri Cronin" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
