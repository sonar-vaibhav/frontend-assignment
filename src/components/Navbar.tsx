import { CheckSquare, Menu, X } from "lucide-react";
import Button from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-lg shadow-md p-2">
              <CheckSquare className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-lg lg:text-xl text-secondary">do List</span>
          </div>
          
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

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button>
              Sign Up
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className="p-2 hover:bg-muted rounded-md"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <a 
                href="#about" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                About Us
              </a>
              <a 
                href="#features" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Features
              </a>
              <a 
                href="#more" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                More Option
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
                <Button className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;