import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Sparkles, Truck, Heart } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Expert Crafting",
      description: "Our master pastry chefs use time-honored techniques and premium ingredients to create each dessert with precision and care.",
      step: "01"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Quality Testing",
      description: "Every dessert undergoes rigorous quality checks to ensure it meets our high standards for taste, texture, and presentation.",
      step: "02"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Love & Passion",
      description: "We infuse each creation with love and passion, ensuring that every bite delivers an unforgettable experience for our customers.",
      step: "03"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fresh Delivery",
      description: "Your desserts are carefully packaged and delivered fresh to ensure they reach you in perfect condition, ready to be enjoyed.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary-glow rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-italiana text-primary mb-4">
            Our Artisan Process
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            From concept to creation, every dessert follows our meticulous 4-step process 
            that guarantees exceptional quality and unforgettable taste.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group border-primary/10 shadow-soft hover:shadow-luxury transition-all duration-500 hover:-translate-y-3 premium-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-lg shadow-elegant">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px">
          <div className="flex justify-between items-center px-20">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex-1 mx-8">
                <div className="h-px bg-gradient-to-r from-primary/30 to-primary-glow/30 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;