import Button from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.jpg";

// CTA component
const CTA = () => {
  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={phoneMockup} 
              alt="Mobile app preview showing todo list interface" 
              className="shadow-2xl w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Start Organizing Your Life Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us now and transform your productivity with our intuitive to-do list platform!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Sign Up
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
