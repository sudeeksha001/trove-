import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                <span className="text-white font-bold font-italiana">T</span>
              </div>
              <div>
                <h3 className="text-2xl font-italiana text-white">Trove</h3>
                <p className="text-xs text-background/60 font-inter">The Dessert Den</p>
              </div>
            </div>
            <p className="text-background/80 font-inter">
              Creating sweet memories with every delicious bite. Your favorite dessert destination.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-white">Menu</h4>
            <div className="space-y-2">
              <a href="#desserts" className="block text-background/80 hover:text-primary transition-colors font-inter">Desserts</a>
              <a href="#sugarless" className="block text-background/80 hover:text-primary transition-colors font-inter">Sugarless</a>
              <a href="#kids" className="block text-background/80 hover:text-primary transition-colors font-inter">Kids Edition</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors font-inter">Beverages</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors font-inter">Gift Cards</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-white">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-primary transition-colors font-inter">About Us</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors font-inter">Our Story</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors font-inter">Careers</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors font-inter">Press</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors font-inter">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/80 font-inter">123 Sweet Street, Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80 font-inter">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80 font-inter">hello@trove.com</span>
              </div>
            </div>
            <Button variant="hero" className="w-full">
              Order Now
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 font-inter text-sm">
            © 2024 Trove. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-background/60 hover:text-primary transition-colors font-inter text-sm">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors font-inter text-sm">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors font-inter text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;