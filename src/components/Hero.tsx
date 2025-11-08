import { Play } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/button";
import { GetStartedModal } from "@/components/GetStartedModal";
import heroTestimonial from "@/assets/hero-testimonial.jpg";

import googleLogo from "@/assets/logo/google.png";
import facebookLogo from "@/assets/logo/facebook.png";
import youtubeLogo from "@/assets/logo/youtube.png";
import pinterestLogo from "@/assets/logo/pinterest.png";
import twitchLogo from "@/assets/logo/twitch.png";

  const logos = [
    { 
      name: "Google", 
      img: googleLogo,
      width: 120,
      height: 40
    },
    { 
      name: "Facebook", 
      img: facebookLogo,
      width: 140,
      height: 40
    },
    { 
      name: "YouTube", 
      img: youtubeLogo,
      width: 130,
      height: 40
    },
    { 
      name: "Pinterest", 
      img: pinterestLogo,
      width: 140,
      height: 40
    },
    { 
      name: "Twitch", 
      img: twitchLogo,
      width: 120,
      height: 40
    },
  ];
import { UserFormData } from "@/components/GetStartedModal";

interface HeroProps {
  onUserSubmit: (data: UserFormData) => void;
}

const Hero = ({ onUserSubmit }: HeroProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-24 lg:pt-32 pb-0 px-2 md:px-4 bg-muted/60">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Simplify Your Life with Our<br />Todo App
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Stay organized and boost your productivity with our intuitive todo website.
            Experience a modern approach to task management that fits your lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Get started
            </Button>
            <Button size="lg" variant="outline">
              Learn more
            </Button>
          </div>

          <GetStartedModal 
            open={isModalOpen} 
            onOpenChange={setIsModalOpen}
            onSubmit={onUserSubmit}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white lg:col-span-2">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white/60">Organize.</span><br />
              Achieve.<br />
              Relax.
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Turn clutter into clarity, chaos into control, and dreams into done.bold
              visions into market success
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
<Button 
                size="lg" 
                className="bg-white/100 rounded-3xl !text-black hover:bg-white/90 hover:!text-black font-medium"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started Today
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white/90 rounded-3xl bg-white/20 hover:bg-white/10 hover:text-white"
              >
                Discover Features
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl overflow-hidden relative">
            <img 
              src={heroTestimonial} 
              alt="Chief Productivity Enthusiast" 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div 
              className="absolute inset-0" 
              style={{
                background: 'linear-gradient(358deg,rgba(250, 250, 250, 0.84) 1%, rgba(251, 63, 63, 0.2) 67%)'
              }}
            />
            
            <div className="absolute top-6 left-6 right-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-2xl font-bold">
                  
                  <span className="text-white/60"> Your Tasks.</span><br />
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
              <div className="flex items-center gap-1 mb-2">
                <img src="/src/assets/logo/lorem.png" alt="Logo" className="w-6 h-6 object-contain" />
                <span className="text-white font-semibold">logoipsum</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-black">
                    <p className="text-[18px] text-black">Freddie Halvorson</p>
                    <p className="text-[18px] text-sm text-black/90">Chief Productivity Enthusiast</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/90">
                    <Play className="h-4 w-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-4 py-8 lg:py-12 overflow-hidden">
        <div className="md:hidden relative">
          <div className="flex animate-scroll-mobile gap-8 items-center">
            {[...logos, ...logos].map((logo, index) => (
              <img 
                key={`${logo.name}-${index}`}
                src={logo.img}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="opacity-50 grayscale flex-shrink-0 w-14"
                style={
                  logo.name === "YouTube" || logo.name === "Pinterest" || logo.name === "Twitch"
                    ? { height: "20px" }
                    : { height: "auto" }
                }
              />
            ))}
          </div>
        </div>
        
        <div className="hidden md:grid grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center max-w-4xl mx-auto">
          {logos.map((logo) => (
            <img 
              key={logo.name}
              src={logo.img}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="opacity-50 hover:opacity-70 transition-opacity grayscale w-full h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
