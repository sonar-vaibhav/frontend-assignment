import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTestimonial from "@/assets/hero-testimonial.jpg";

// Hero section with main heading and feature cards
const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Simplify Your Life with Our<br />Todo App
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Stay organized and boost your productivity with our intuitive todo website.
            Experience a modern approach to task management that fits your lifestyle.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Get started
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn more
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          {/* Left card - Organize. Achieve. Relax. */}
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Organize.<br />
              Achieve.<br />
              Relax.
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Turn clutter into clarity, chaos into control, and dreams into done.bold
              visions into market success
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-secondary hover:bg-white/90">
                Get Started Today
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                Discover Features
              </Button>
            </div>
          </div>

          {/* Right card - Testimonial */}
          <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl overflow-hidden relative">
            <img 
              src={heroTestimonial} 
              alt="Chief Productivity Enthusiast" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-6 left-6 right-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-2xl font-bold">
                  Your Tasks.<br />
                  Our Tools.
                </h3>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white/50 rounded-full" />
                  <div className="w-2 h-2 bg-white/50 rounded-full" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">logo</span>
                  </div>
                  <div className="text-white">
                    <p className="font-bold">Freddie Halvorson</p>
                    <p className="text-sm text-white/80">Chief Productivity Enthusiast</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="rounded-full bg-white text-secondary">
                    <Play className="h-4 w-4 fill-current" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
