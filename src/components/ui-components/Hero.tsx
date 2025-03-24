
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroSlides = [
  {
    id: 1,
    title: "Discover Premium Collections",
    subtitle: "Explore our curated collection of premium products designed to elevate your everyday experience.",
    cta: "Shop Now",
    ctaLink: "/shop",
    secondaryCta: "Explore Electronics",
    secondaryCtaLink: "/shop/electronics",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    tag: "New Collection 2023"
  },
  {
    id: 2,
    title: "Summer Essentials",
    subtitle: "Discover the perfect items for your summer adventures. Limited stock available.",
    cta: "View Collection",
    ctaLink: "/shop/clothing",
    secondaryCta: "Summer Trends",
    secondaryCtaLink: "/shop/home",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    tag: "Summer Collection"
  },
  {
    id: 3,
    title: "Smart Home Solutions",
    subtitle: "Transform your living space with cutting-edge smart home technology for modern living.",
    cta: "Explore",
    ctaLink: "/shop/electronics",
    secondaryCta: "Smart Living",
    secondaryCtaLink: "/shop/home",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    tag: "Smart Tech"
  }
];

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[600px] bg-[#f8f8f8]">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="min-h-[600px]">
              <div className="relative w-full h-full min-h-[600px] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
                
                <div className="absolute inset-0">
                  <img 
                    src={slide.image}
                    alt={slide.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="container relative z-20 px-6 mx-auto grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:py-20 py-12 max-w-xl">
                    <span className="inline-block mb-3 text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full animate-fade-in">
                      {slide.tag}
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                      {slide.title}
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                      <Link to={slide.ctaLink}>
                        <Button size="lg" className="group">
                          {slide.cta}
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Link to={slide.secondaryCtaLink}>
                        <Button variant="outline" size="lg">
                          {slide.secondaryCta}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="container px-6 mx-auto relative z-20">
          <CarouselPrevious className="absolute left-4 md:left-10 bg-white/70 hover:bg-white" />
          <CarouselNext className="absolute right-4 md:right-10 bg-white/70 hover:bg-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
