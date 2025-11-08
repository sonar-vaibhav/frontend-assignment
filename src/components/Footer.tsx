import { CheckSquare, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Footer component with newsletter and links
const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand and newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white rounded-lg shadow-md p-2">
                <CheckSquare className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-xl text-secondary">do List</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email here" 
                className="flex-1"
              />
              <Button>Join</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-secondary mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home Page</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog Posts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-secondary mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">User Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Feedback</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-bold text-secondary mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Osumare. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
