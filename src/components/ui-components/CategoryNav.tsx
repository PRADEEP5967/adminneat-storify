
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories } from '../../data/products';
import { cn } from '@/lib/utils';

const CategoryNav: React.FC = () => {
  const { categoryId } = useParams();
  
  return (
    <div className="w-full overflow-x-auto hide-scrollbar mb-8">
      <div className="flex space-x-2 min-w-max pb-2">
        <Link
          to="/shop"
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
            !categoryId 
              ? "bg-primary text-white" 
              : "bg-secondary hover:bg-secondary/70 text-foreground"
          )}
        >
          All Products
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop/${category.id}`}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
              categoryId === category.id 
                ? "bg-primary text-white" 
                : "bg-secondary hover:bg-secondary/70 text-foreground"
            )}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
