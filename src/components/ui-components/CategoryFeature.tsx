
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

const CategoryFeature: React.FC = () => {
  // Display only 3 categories for feature section
  const featuredCategories = categories.slice(0, 3);
  
  // Images for categories
  const categoryImages = {
    electronics: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    clothing: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    home: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  };
  
  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection across various categories to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.id}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] hover-translate shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
              <img
                src={categoryImages[category.id as keyof typeof categoryImages]}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="text-white text-2xl font-medium mb-3">{category.name}</h3>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Shop Collection</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFeature;
