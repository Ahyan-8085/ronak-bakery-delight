import { motion } from "framer-motion";
import breadImg from "@/assets/product-bread.jpg";
import toastImg from "@/assets/product-toast.jpg";
import snacksImg from "@/assets/product-snacks.jpg";
import farsanImg from "@/assets/product-farsan.jpg";
import savoriesImg from "@/assets/product-savories.jpg";

const products = [
  { name: "Fresh Bread", desc: "Soft, freshly baked bread made daily with premium flour.", image: breadImg },
  { name: "Toast", desc: "Crispy golden toast, perfect with butter and chai.", image: toastImg },
  { name: "Bakery Snacks", desc: "Khari, biscuits, and traditional bakery treats.", image: snacksImg },
  { name: "Farsan Items", desc: "Sev, gathiya, chakli and other namkeen favourites.", image: farsanImg },
  { name: "Traditional Savories", desc: "Samosa, kachori, and handmade Indian savories.", image: savoriesImg },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our <span className="text-gradient-gold">Products</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-gold mx-auto mb-4" />
          <p className="text-muted-foreground text-sm md:text-base">Made fresh, served with love</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden shadow-gold/10 hover:shadow-gold transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="font-heading text-sm font-semibold text-primary mb-1">{p.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
