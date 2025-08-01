import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, Heart } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Award className="w-4 h-4 mr-2" />
                Award Winning
              </Badge>
              <h2 className="text-4xl md:text-5xl font-italiana text-primary leading-tight">
                Crafted with Love, <br />
                Served with Pride
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Every dessert at Trove is a masterpiece, carefully crafted by our expert pastry chefs 
                using the finest ingredients and time-honored techniques. From classic favorites to 
                innovative creations, we bring you desserts that create lasting memories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary font-playfair">100%</div>
                <div className="text-sm text-muted-foreground font-inter">Fresh Daily</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary font-playfair">24hrs</div>
                <div className="text-sm text-muted-foreground font-inter">Preparation Time</div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              <Clock className="w-5 h-5 mr-2" />
              Order Fresh Now
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <Card className="border-primary/10 shadow-soft hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-playfair font-semibold text-foreground">
                      Premium Ingredients
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      We source only the finest ingredients from trusted suppliers to ensure 
                      every bite delivers exceptional quality and taste.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-soft hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-playfair font-semibold text-foreground">
                      Artisan Craftsmanship
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      Our skilled pastry chefs bring years of experience and passion 
                      to create desserts that are both beautiful and delicious.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-soft hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-playfair font-semibold text-foreground">
                      Made Fresh Daily
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      Every dessert is prepared fresh daily in our kitchens, ensuring 
                      optimal taste, texture, and quality in every order.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;