import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our <span className="text-gradient-gold">Story</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            Ronak Bakery & Farsan is a traditional bakery that takes pride in preparing its own products fresh every day. Unlike many bakeries, we manufacture everything in-house — from our signature bread and toast to our beloved farsan items.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { title: "Fresh Production", desc: "Baked daily in-house" },
              { title: "Quality Ingredients", desc: "Only the finest materials" },
              { title: "Locally Trusted", desc: "A community favourite" },
              { title: "Authentic Taste", desc: "Traditional recipes" },
            ].map((item) => (
              <div key={item.title} className="bg-secondary/50 rounded-lg p-4">
                <h3 className="font-heading text-sm font-semibold text-primary mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
