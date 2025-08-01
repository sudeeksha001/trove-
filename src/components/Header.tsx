import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-primary/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl font-italiana">T</span>
            </div>
            <div>
              <h1 className="text-4xl font-italiana text-primary font-bold">Trove</h1>
              <p className="text-xs text-gray-600 font-inter -mt-1">The Dessert Den</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-inter font-medium text-lg">About</a>
            <a href="#desserts" className="text-gray-700 hover:text-primary transition-colors font-inter font-medium text-lg">Desserts</a>
            <a href="#sugarless" className="text-gray-700 hover:text-primary transition-colors font-inter font-medium text-lg">Sugarless</a>
            <a href="#kids" className="text-gray-700 hover:text-primary transition-colors font-inter font-medium text-lg">Kids Edition</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-inter font-medium text-lg">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Button>
            <Button variant="hero" className="hidden md:flex px-6 py-2">
              Order Online
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;