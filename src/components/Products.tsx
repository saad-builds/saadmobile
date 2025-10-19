import { Card } from "@/components/ui/card";
import snacksImg from "@/assets/snacks.jpg";
import drinksImg from "@/assets/drinks.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import mobilesImg from "@/assets/mobiles.jpg";

const products = [
  {
    image: snacksImg,
    title: "Snacks & Chips",
    titleUrdu: "سنیکس اور چپس",
    description: "Lay's, Kurkure & More"
  },
  {
    image: drinksImg,
    title: "Soft Drinks",
    titleUrdu: "مشروبات",
    description: "Coca-Cola, Sprite, Fanta"
  },
  {
    image: mobilesImg,
    title: "Mobile Phones",
    titleUrdu: "موبائل فون",
    description: "Latest Models Available"
  },
  {
    image: accessoriesImg,
    title: "Accessories",
    titleUrdu: "لوازمات",
    description: "Chargers, Cases, Earphones"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Our Products</span>
          </h2>
          <div className="highlight-strip inline-block text-lg md:text-xl">
            ہماری مصنوعات
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:scale-105 transition-all duration-300 bg-card border-2 border-muted hover:border-accent cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground font-medium">{product.description}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-accent mb-1">{product.titleUrdu}</h3>
                <h4 className="text-lg font-semibold text-foreground">{product.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
