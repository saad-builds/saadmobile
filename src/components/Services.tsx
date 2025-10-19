import { Smartphone, CreditCard, Wallet, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Load",
    titleUrdu: "موبائل لوڈ",
    description: "All networks available",
    color: "from-primary to-primary/80"
  },
  {
    icon: Wallet,
    title: "EasyPaisa",
    titleUrdu: "ایزی پیسہ",
    description: "Send & Receive Money",
    color: "from-green-500 to-green-600"
  },
  {
    icon: CreditCard,
    title: "JazzCash",
    titleUrdu: "جاز کیش",
    description: "Fast Transactions",
    color: "from-red-500 to-red-600"
  },
  {
    icon: ShoppingBag,
    title: "General Store",
    titleUrdu: "جنرل سٹور",
    description: "Snacks, Drinks & More",
    color: "from-accent to-yellow-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <div className="highlight-strip inline-block text-lg md:text-xl">
            ہماری خدمات
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-2 border-muted hover:border-accent cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">{service.titleUrdu}</h3>
                <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
