import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary-glow rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                <Award className="w-4 h-4 mr-2" />
                Premium Dessert Experience
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-italiana text-primary leading-tight tracking-tight">
                Trove
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-playfair text-gray-800 leading-relaxed">
                  The Dessert Den <br />
                  <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Sweet Memories
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 max-w-xl font-inter leading-relaxed">
                  Welcome to our cozy dessert haven where every treat tells a story. From traditional family recipes 
                  to innovative creations, each dessert is crafted with love and the finest ingredients.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group text-lg px-8 py-4">
                Explore Our Menu
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
                Find Nearest Store
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary font-playfair mb-2">50+</div>
                <div className="text-sm text-gray-600 font-inter">Dessert Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary font-playfair mb-2">25+</div>
                <div className="text-sm text-gray-600 font-inter">Sugarless Options</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary font-playfair mb-2">15+</div>
                <div className="text-sm text-gray-600 font-inter">Kids Favorites</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20">
              <img 
                src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Trove Desserts Collection" 
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-primary/10 animate-float">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🧁</div>
                <div>
                  <div className="text-sm font-semibold text-primary">Premium Quality</div>
                  <div className="text-xs text-gray-600">Fresh Daily</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-primary/10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="text-sm font-semibold text-primary">4.9 Rating</div>
                  <div className="text-xs text-gray-600">1000+ Reviews</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 bg-white rounded-2xl p-4 shadow-2xl border border-primary/10 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <div className="text-sm font-semibold text-gray-800">Made with Love</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;