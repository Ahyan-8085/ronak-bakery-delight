import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const VisitSection = () => {
  return (
    <section id="visit" className="py-20 bg-card">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Visit Our <span className="text-gradient-gold">Store</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-gold mx-auto" />
        </motion.div>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="space-y-5">
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">Address</h3>
                <p className="text-muted-foreground text-sm">Shop No. XX, Main Road, City, State - XXXXXX</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">Hours</h3>
                <p className="text-muted-foreground text-sm">7:00 AM – 9:00 PM, Daily</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden bg-secondary h-48 md:h-auto flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Google Maps Embed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
