import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Chocolate Truffle Cake",
      category: "cakes",
      image: "/placeholder.svg",
      price: 800,
      rating: 4.9,
      isPopular: true,
      description: "Rich chocolate layers with premium truffle"
    },
    {
      id: 2,
      title: "Rainbow Cupcakes",
      category: "cupcakes",
      image: "/placeholder.svg",
      price: 180,
      rating: 4.8,
      isPopular: false,
      description: "Colorful mini cupcakes perfect for celebrations"
    },
    {
      id: 3,
      title: "Artisan Cookies",
      category: "cookies",
      image: "/placeholder.svg",
      price: 60,
      rating: 4.7,
      isPopular: true,
      description: "Hand-crafted cookies with premium ingredients"
    },
    {
      id: 4,
      title: "Sugarless Carrot Cake",
      category: "sugarless",
      image: "/placeholder.svg",
      price: 600,
      rating: 4.9,
      isPopular: true,
      description: "Healthy carrot cake with natural sweeteners"
    },
    {
      id: 5,
      title: "Kids Special Donuts",
      category: "kids",
      image: "/placeholder.svg",
      price: 120,
      rating: 4.8,
      isPopular: false,
      description: "Colorful glazed donuts made for little ones"
    },
    {
      id: 6,
      title: "Premium Brownies",
      category: "brownies",
      image: "/placeholder.svg",
      price: 80,
      rating: 4.9,
      isPopular: true,
      description: "Fudgy brownies with rich chocolate flavor"
    }
  ];

  const filters = [
    { id: "all", label: "All Items" },
    { id: "cakes", label: "Cakes" },
    { id: "cupcakes", label: "Cupcakes" },
    { id: "cookies", label: "Cookies" },
    { id: "sugarless", label: "Sugarless" },
    { id: "kids", label: "Kids Special" },
    { id: "brownies", label: "Brownies" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-light/10 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-italiana text-primary mb-4">
            Our Signature Collection
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Explore our carefully curated collection of premium desserts, each crafted 
            with love and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "hero" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300 hover:scale-105"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group border-primary/10 shadow-soft hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-light/20 to-primary-light/5">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Popular Badge */}
                {item.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-white shadow-elegant">
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    Popular
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground font-inter">
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Title & Price */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-2xl font-bold text-primary">
                    ₹{item.price}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-inter text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="flex-1 mr-3 group transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="shimmer-effect">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="elegant" size="lg" className="group">
            View Complete Menu
            <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;