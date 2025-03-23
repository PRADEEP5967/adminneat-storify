
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#f8f8f8] min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30 z-10"></div>
      
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-20 px-6 mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="md:py-20 py-12 max-w-xl">
          <span className="inline-block mb-3 text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full animate-fade-in">
            New Collection 2023
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Discover Exceptional Design
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Explore our curated collection of premium products designed to elevate your everyday experience.
          </p>
          <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/shop">
              <Button size="lg" className="group">
                Shop Now
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/shop/electronics">
              <Button variant="outline" size="lg">
                Explore Electronics
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
