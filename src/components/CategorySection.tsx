import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star, ArrowRight } from "lucide-react";

interface CategoryItem {
  name: string;
  price: number;
  description?: string;
  isPopular?: boolean;
  image?: string;
}

interface CategorySectionProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: CategoryItem[];
  bgColor: string;
  id: string;
}

const CategorySection = ({ title, subtitle, icon, items, bgColor, id }: CategorySectionProps) => {
  // Show only first 6 items initially
  const displayItems = items.slice(0, 6);

  return (
    <section id={id} className={`py-24 ${bgColor}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              {icon}
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-italiana text-primary mb-4">{title}</h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayItems.map((item, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <img 
                  src={`https://images.pexels.com/photos/${1126359 + index}/pexels-photo-${1126359 + index}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Popular Badge */}
                {item.isPopular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-white shadow-lg">
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    Popular
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title & Price */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-playfair font-semibold text-gray-800 group-hover:text-primary transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <div className="text-2xl font-bold text-primary ml-4">
                    ₹{item.price}
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-gray-600 font-inter text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="flex-1 group transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Button variant="elegant" size="lg" className="group px-8 py-4 text-lg">
            View All {title}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;