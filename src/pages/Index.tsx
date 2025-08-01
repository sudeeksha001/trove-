import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Cake, Heart, Sparkles } from "lucide-react";

const Index = () => {
  const dessertItems = [
    { name: "Chocolate Truffle Cake", price: 800, isPopular: true, description: "Decadent chocolate layers with premium truffle and rich ganache" },
    { name: "Red Velvet Cupcake", price: 60, description: "Velvety smooth cupcake with cream cheese frosting" },
    { name: "Vanilla Cupcake", price: 50, description: "Classic vanilla cupcake with creamy buttercream frosting" },
    { name: "Double Chocolate Muffin", price: 40, description: "Moist muffin loaded with chocolate chips and cocoa" },
    { name: "Black Forest Cake", price: 600, isPopular: true, description: "Cherry and chocolate classic with whipped cream" },
    { name: "Strawberry Cake", price: 700, description: "Fresh strawberry celebration cake with berry compote" },
    { name: "Mawa Cake", price: 600, description: "Traditional Indian milk cake with cardamom essence" },
    { name: "Butterscotch Cake", price: 600, description: "Butterscotch flavored sponge with caramel drizzle" },
    { name: "Choco Chip Cookies", price: 60, description: "Crispy cookies loaded with chocolate chips" },
    { name: "Chocolate Brownies", price: 80, description: "Fudgy and rich chocolate brownies with nuts" }
  ];

  const sugarlessItems = [
    { name: "Sugarless Chocolate Cake", price: 550, isPopular: true, description: "Rich chocolate cake sweetened with natural dates and honey" },
    { name: "Sugarless Vanilla Cake", price: 500, description: "Light vanilla sponge with stevia and natural sweeteners" },
    { name: "Sugarless Carrot Cake", price: 600, description: "Healthy carrot cake with walnuts and cream cheese frosting" },
    { name: "Sugarless Banana Bread", price: 450, description: "Naturally sweet banana bread with whole wheat flour" },
    { name: "Sugarless Oat Cookies", price: 40, description: "Wholesome oat cookies with raisins and nuts" },
    { name: "Sugarless Date Brownies", price: 90, isPopular: true, description: "Date-sweetened fudgy brownies with dark chocolate" },
    { name: "Sugarless Coconut Ladoo", price: 35, description: "Traditional coconut sweet balls with jaggery" },
    { name: "Sugarless Fruit Cake", price: 650, description: "Mixed dry fruit cake sweetened with honey" }
  ];

  const kidsItems = [
    { name: "Mini Cupcakes (Pack of 6)", price: 180, isPopular: true, description: "Colorful mini cupcakes with fun sprinkles and designs" },
    { name: "Animal Shaped Cookies", price: 45, description: "Fun animal-shaped cookies with colorful icing" },
    { name: "Rainbow Cake Slice", price: 80, description: "Vibrant multi-layered rainbow cake slice" },
    { name: "Chocolate Milk Cake", price: 400, description: "Mild chocolate cake perfect for young taste buds" },
    { name: "Cartoon Character Cookies", price: 60, description: "Decorated cookies featuring popular cartoon characters" },
    { name: "Mini Donuts (Pack of 4)", price: 120, isPopular: true, description: "Bite-sized glazed donuts with colorful toppings" },
    { name: "Strawberry Milk Shake Cake", price: 450, description: "Milkshake flavored sponge with strawberry cream" },
    { name: "Birthday Special Cupcake", price: 100, description: "Specially decorated birthday cupcake with candle" }
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