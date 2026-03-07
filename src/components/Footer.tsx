import { Instagram, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="container px-4 text-center">
        <h3 className="font-heading text-xl font-bold text-primary mb-2">Ronak Bakery & Farsan</h3>
        <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
          Freshly baked with love. Your trusted local bakery for authentic taste.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary/20 transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary/20 transition-colors" aria-label="WhatsApp">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="#visit" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary/20 transition-colors" aria-label="Location">
            <MapPin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Ronak Bakery & Farsan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
