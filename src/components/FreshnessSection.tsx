import { motion } from "framer-motion";
import { Clock, ShieldCheck, Leaf, Heart } from "lucide-react";

const promises = [
  { icon: Clock, title: "Freshly Baked Daily", desc: "Every item prepared fresh each morning" },
  { icon: ShieldCheck, title: "Hygienic Preparation", desc: "Highest standards of cleanliness" },
  { icon: Leaf, title: "Quality Ingredients", desc: "Only the finest, natural ingredients" },
  { icon: Heart, title: "Authentic Taste", desc: "Traditional recipes passed down generations" },
];

const FreshnessSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10"
        >
          Our <span className="text-gradient-gold">Freshness Promise</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-muted-foreground text-xs">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreshnessSection;
