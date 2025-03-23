
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section className="py-16">
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-medium mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our handpicked selection of premium items.</p>
          </div>
          <Link to="/shop" className="flex items-center text-primary hover:underline mt-4 md:mt-0">
            View All Products
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
