import { CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

// Navigation bar component
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-lg shadow-md p-2">
              <CheckSquare className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-lg lg:text-xl text-secondary">do List</span>
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#more" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              More Option
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
