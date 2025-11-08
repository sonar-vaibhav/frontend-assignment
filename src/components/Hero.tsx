import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import heroTestimonial from "@/assets/hero-testimonial.jpg";

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 lg:mb-6">
            Simplify Your Life with Our<br />Todo App
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay organized and boost your productivity with our intuitive todo website.
            Experience a modern approach to task management that fits your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-8">
              Get started
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
              Learn more
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-12 lg:mt-16">
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Organize.<br />
              Achieve.<br />
              Relax.
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8 max-w-md">
              Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
                Discover Features
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-muted to-accent rounded-3xl overflow-hidden relative">
            <div className="absolute top-6 left-6 right-6 text-white z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  <div className="w-2 h-2 rounded-full bg-white/60"></div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Your Tasks.<br />Our Tools.</h3>
            </div>
            
            <img 
              src={heroTestimonial} 
              alt="Productivity Expert" 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">
                    L
                  </div>
                  <span className="text-xs text-muted-foreground">logoipsum</span>
                </div>
                <h4 className="font-bold text-secondary">Freddie Halvorson</h4>
                <p className="text-sm text-muted-foreground">Chief Productivity Enthusiast</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:scale-105 transition-transform">
                <Play className="h-5 w-5 text-white fill-white" />
              </button>
            </div>

            <button className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
