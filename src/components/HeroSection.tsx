import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Fresh bakery products" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative z-10 container text-center px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Ronak Bakery & Farsan" className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]" />
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Freshly Baked<br />
            <span className="text-gradient-gold">Every Day</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-8">
            Serving Fresh Bakery & Farsan with Authentic Taste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-gold hover:shadow-gold-lg transition-all duration-300 text-base"
            >
              View Menu
            </a>
            <a
              href="#visit"
              className="border border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300 text-base"
            >
              Visit Store
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
