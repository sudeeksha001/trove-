import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, Bell, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const benefits = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Offers",
      description: "Get 20% off on your first order and special member discounts"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "New Launch Alerts",
      description: "Be the first to know about our latest dessert creations"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Recipe Secrets",
      description: "Receive exclusive baking tips and behind-the-scenes content"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-glow relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-italiana mb-6 leading-tight">
              Join Our Sweet Community
            </h2>
            <p className="text-xl mb-8 text-white/90 font-inter leading-relaxed">
              Subscribe to our newsletter and become part of the Trove family. 
              Get exclusive recipes, special offers, and be the first to taste our latest creations.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 font-inter">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="animate-scale-in">
            <Card className="border-0 shadow-luxury bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <Mail className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                        Stay Updated
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        Join 10,000+ dessert lovers who trust Trove
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-12 h-12 border-primary/20 focus:border-primary focus:ring-primary/20 font-inter"
                          required
                        />
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full transition-all duration-300 hover:scale-105"
                      >
                        Subscribe & Get 20% Off
                      </Button>
                    </form>

                    <p className="text-xs text-muted-foreground text-center mt-4 font-inter">
                      By subscribing, you agree to receive marketing emails from Trove. 
                      You can unsubscribe at any time.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                      Welcome to Trove!
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      Check your email for your 20% discount code and our welcome guide.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;