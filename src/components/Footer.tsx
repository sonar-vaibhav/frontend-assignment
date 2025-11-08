import { CheckSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-12 mb-12">
          <div className="lg:col-span-3">
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
                className="flex-1 bg-white border border-black"
                style={{ border: "1px solid black" }}
              />
              <Button>Join</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </div>

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

          <div>
            <h3 className="font-bold text-secondary mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <i className="fa-brands fa-facebook text-primary text-lg"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <i className="fa-brands fa-instagram text-primary text-lg"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <i className="fa-brands fa-x-twitter text-primary text-lg"></i>
                  X
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <i className="fa-brands fa-linkedin text-primary text-lg"></i>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <i className="fa-brands fa-youtube text-primary text-lg"></i>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Osumare. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors whitespace-nowrap underline">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors whitespace-nowrap underline">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors whitespace-nowrap underline">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
