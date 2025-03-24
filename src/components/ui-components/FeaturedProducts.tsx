
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const FeaturedProducts: React.FC = () => {
  // Get 8 featured products
  const featuredProducts = products.slice(0, 8);
  
  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-medium mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our handpicked selection of premium items.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All Products
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Mobile carousel for smaller screens */}
        <div className="md:hidden w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProducts.slice(0, 4).map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mr-2 static translate-y-0" />
              <CarouselNext className="ml-2 static translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        {/* Second row for desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {featuredProducts.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Mobile link for smaller screens */}
        <div className="flex justify-center mt-8 md:hidden">
          <Link to="/shop">
            <Button variant="outline" className="group">
              View All Products
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
