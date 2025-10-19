import { Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phoneNumbers = ["0310-2527460", "0314-7496989"];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Contact Us</span>
          </h2>
          <div className="highlight-strip inline-block text-lg md:text-xl">
            ہم سے رابطہ کریں
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* 📞 Phone Card */}
          <Card className="bg-card/80 backdrop-blur-sm border-2 border-muted hover:border-accent transition-all duration-300 animate-fade-in h-full flex flex-col">
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-4">
                  Phone Numbers
                </h3>
                {phoneNumbers.map((number, index) => (
                  <a
                    key={index}
                    href={`tel:${number.replace(/-/g, "")}`}
                    className="block mb-2"
                  >
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {number}
                    </Button>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 📍 Location Card */}
          <Card
            className="bg-card/80 backdrop-blur-sm border-2 border-muted hover:border-accent transition-all duration-300 animate-fade-in h-full flex flex-col"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-4">Location</h3>
                <p className="text-foreground text-lg">
                  Visit our store for all your needs
                </p>
                <p className="text-muted-foreground mt-2">
                  ہمارے سٹور کا دورہ کریں
                </p>
              </div>

              {/* ✅ Correct Embedded Google Map */}
              <div className="mt-4 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.486982296571!2d72.932655!3d33.6732243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbdc998b3dea3%3A0x8704f1f681d2b194!2sSaad%20Mobile%20and%20Talha%20General%20Store%2C%20Shamshad%20Market%2C%20Quetta%20Hotel%2C%20E-14%2C%20Islamabad!5e0!3m2!1sen!2s!4v1728735012345!5m2!1sen!2s"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* ⏰ Business Hours Card */}
          <Card
            className="bg-card/80 backdrop-blur-sm border-2 border-muted hover:border-accent transition-all duration-300 animate-fade-in h-full flex flex-col"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-4">
                  Business Hours
                </h3>
                <p className="text-foreground text-lg">Open Daily</p>
                <p className="text-muted-foreground mt-2">روزانہ کھلا</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
