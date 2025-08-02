import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star, Coffee, Cookie, Cake } from "lucide-react";

const Index = () => {
  const cupcakes = [
    { 
      name: "Vanilla Cupcake", 
      price: 50, 
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Born in our grandmother's kitchen in 1952, this classic vanilla cupcake recipe has been passed down through three generations. Made with Madagascar vanilla beans and topped with our signature buttercream swirl.",
      isPopular: true
    },
    { 
      name: "Chocolate Cupcake", 
      price: 60, 
      image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Inspired by a midnight craving in 1967, our founder created this rich chocolate cupcake using Belgian cocoa. The secret ingredient? A hint of espresso that enhances the chocolate flavor without overpowering it.",
      isPopular: false
    },
    { 
      name: "Double Chocolate Muffin", 
      price: 40, 
      image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Created for chocolate lovers who wanted more! This indulgent muffin was born when a customer asked for 'double the chocolate' in 1985. We obliged with chocolate chips and cocoa powder in perfect harmony.",
      isPopular: false
    },
    { 
      name: "Red Velvet Cupcake", 
      price: 60, 
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "A Southern belle's favorite that found its way to our kitchen in 1978. The vibrant red color comes from natural beetroot, and the tangy cream cheese frosting balances the subtle cocoa flavor perfectly.",
      isPopular: true
    },
    { 
      name: "Strawberry Cupcake", 
      price: 60, 
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Summer of 1982 brought an abundance of fresh strawberries, inspiring this delightful creation. Real strawberry puree is folded into the batter, creating natural pink swirls and bursts of fruity flavor.",
      isPopular: false
    }
  ];

  const pastries = [
    { 
      name: "Mawa Cake", 
      price: 600, 
      image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "A tribute to Mumbai's Parsi heritage, this cake was first baked in our ovens in 1965. Made with reduced milk (mawa) and cardamom, it represents the perfect fusion of Indian flavors with European baking techniques.",
      isPopular: true
    },
    { 
      name: "Vanilla Cake", 
      price: 500, 
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "The foundation of all great cakes, our vanilla sponge recipe dates back to 1958. Three layers of moist vanilla cake with vanilla buttercream - simplicity at its finest, perfected over decades.",
      isPopular: false
    },
    { 
      name: "Chocolate Truffle Cake", 
      price: 800, 
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Our masterpiece, born from a challenge in 1990 to create the ultimate chocolate experience. Layers of dark chocolate sponge, truffle ganache, and chocolate shavings create a symphony of textures and flavors.",
      isPopular: true
    },
    { 
      name: "Butterscotch Cake", 
      price: 600, 
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Inspired by childhood memories of butterscotch candies, this cake was created in 1975. The butterscotch sauce is made from scratch, creating that perfect balance of sweet and slightly salty caramel notes.",
      isPopular: false
    },
    { 
      name: "Rasmalai Cake", 
      price: 800, 
      image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "A fusion masterpiece created in 2005, combining the beloved Bengali sweet rasmalai with modern cake artistry. Sponge soaked in cardamom milk with pieces of soft paneer and pistachios.",
      isPopular: true
    },
    { 
      name: "Black Forest Cake", 
      price: 600, 
      image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "A German classic that found its home in our bakery in 1972. Layers of chocolate sponge, fresh cherries, and whipped cream create this timeless favorite that has delighted generations.",
      isPopular: false
    },
    { 
      name: "Strawberry Cake", 
      price: 700, 
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Created during strawberry season in 1980, this cake celebrates the fruit's natural sweetness. Fresh strawberries are layered between vanilla sponge with strawberry compote and cream.",
      isPopular: true
    },
    { 
      name: "Irish Coffee Cake", 
      price: 600, 
      image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Born from a late-night conversation with an Irish traveler in 1988, this cake combines coffee-soaked sponge with a hint of Irish cream. Perfect for coffee lovers seeking something special.",
      isPopular: false
    }
  ];

  const cookies = [
    { 
      name: "Chocolate Chip Cookies", 
      price: 60, 
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "The accidental masterpiece of 1938 recreated in our kitchen since 1963. When chocolate chunks were added to cookie dough by mistake, magic happened. Our version uses premium Belgian chocolate chips.",
      isPopular: true
    },
    { 
      name: "Double Chocolate Chip Cookies", 
      price: 70, 
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "For those who believe more chocolate is always better. Created in 1995 when a customer requested 'the most chocolatey cookie possible.' Cocoa dough studded with white and dark chocolate chips.",
      isPopular: false
    },
    { 
      name: "Coconut Cookies", 
      price: 30, 
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Inspired by tropical beaches and childhood memories, these cookies were first baked in 1970. Made with freshly grated coconut and a hint of vanilla, they transport you to paradise with every bite.",
      isPopular: false
    },
    { 
      name: "Salted Tea Cookie", 
      price: 30, 
      image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "A British tea-time tradition adapted for Indian tastes in 1968. The subtle saltiness enhances the buttery flavor, making it the perfect companion for your evening chai or coffee.",
      isPopular: false
    },
    { 
      name: "Banana Cake", 
      price: 60, 
      image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Born from a desire to reduce food waste in 1976, this moist cake uses overripe bananas that would otherwise be discarded. The natural sweetness and tender crumb make it irresistibly comforting.",
      isPopular: true
    },
    { 
      name: "Chocolate Brownies", 
      price: 80, 
      image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Legend says brownies were invented by accident in 1893, but our version was perfected through years of experimentation starting in 1969. Fudgy, rich, and studded with walnuts for the perfect texture contrast.",
      isPopular: true
    },
    { 
      name: "Red Velvet Cream Cheese Brownies", 
      price: 80, 
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "A modern twist on two classics, created in 2010 when we wondered what would happen if red velvet met brownies. The cream cheese swirl adds tanginess to the subtle cocoa flavor.",
      isPopular: false
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <CategorySection 
        id="desserts"
        title="Desserts"
        subtitle="Indulge in our signature collection of handcrafted desserts, made with premium ingredients and traditional techniques"
        icon={<Cake className="w-10 h-10 text-primary" />}
        items={dessertItems}
        bgColor="bg-white"
      />

      <FeaturedSection />

      <CategorySection 
        id="sugarless"
        title="Sugarless Delights"
        subtitle="Guilt-free sweetness with our healthy dessert range, naturally sweetened and perfectly delicious"
        icon={<Heart className="w-10 h-10 text-primary" />}
        items={sugarlessItems}
        bgColor="bg-gradient-to-br from-purple-50/50 to-white"
      />

      <CategorySection 
        id="kids"
        title="Kids Edition"
        subtitle="Magical treats designed especially for little ones, with fun shapes, colors, and kid-friendly flavors"
        icon={<Sparkles className="w-10 h-10 text-primary" />}
        items={kidsItems}
        bgColor="bg-white"
      />

      <GallerySection />
      
      <ProcessSection />
      
      <TestimonialsSection />
      
      <NewsletterSection />

      <Footer />
    </div>
  );
};

export default Index;