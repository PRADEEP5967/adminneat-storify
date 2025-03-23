
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui-components/ProductCard';
import CategoryNav from '../components/ui-components/CategoryNav';
import { products, getProductsByCategory } from '../data/products';

const Shop: React.FC = () => {
  const { categoryId } = useParams();
  
  // Filter products by category if categoryId is provided
  const displayedProducts = categoryId
    ? getProductsByCategory(categoryId)
    : products;
  
  return (
    <Layout>
      <div className="container px-6 mx-auto pt-8 pb-16">
        <div className="mb-10">
          <h1 className="text-3xl font-medium mb-2">
            {categoryId
              ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
              : 'All Products'}
          </h1>
          <p className="text-muted-foreground">
            {categoryId
              ? `Browse our collection of ${categoryId} products`
              : 'Browse our entire collection of premium products'}
          </p>
        </div>
        
        <CategoryNav />
        
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">
              We couldn't find any products in this category. Please try another category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
