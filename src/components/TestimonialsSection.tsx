import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      image: "/placeholder.svg",
      rating: 5,
      text: "Trove's desserts are absolutely divine! Their chocolate truffle cake made our anniversary unforgettable. The quality and taste are unmatched.",
      initials: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Event Organizer",
      image: "/placeholder.svg",
      rating: 5,
      text: "I've ordered from Trove multiple times for corporate events. Their presentation and taste never disappoint. Highly professional service!",
      initials: "RK"
    },
    {
      name: "Sneha Patel",
      role: "Mother of Two",
      image: "/placeholder.svg",
      rating: 5,
      text: "My kids absolutely love the Kids Edition menu! The animal-shaped cookies and mini cupcakes are not just delicious but also beautifully crafted.",
      initials: "SP"
    }
  ];

  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "50K+", label: "Desserts Served" },
    { value: "4.9", label: "Average Rating" },
    { value: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-light/20 via-white to-primary-light/10 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-italiana text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our delighted customers who keep coming back for more.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-primary/10 shadow-soft hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 glass-effect animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="ring-2 ring-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground font-playfair">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-inter">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;