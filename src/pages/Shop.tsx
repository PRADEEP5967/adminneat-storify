
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui-components/ProductCard';
import CategoryNav from '../components/ui-components/CategoryNav';
import SearchBar from '../components/ui-components/SearchBar';
import { products, getProductsByCategory } from '../data/products';
import { Product } from '../context/CartContext';

const Shop: React.FC = () => {
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Filter products by category and search query
  useEffect(() => {
    const categoryProducts = categoryId ? getProductsByCategory(categoryId) : products;
    
    if (searchQuery.trim() === '') {
      setFilteredProducts(categoryProducts);
    } else {
      const query = searchQuery.toLowerCase();
      const searchResults = categoryProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
      setFilteredProducts(searchResults);
    }
  }, [categoryId, searchQuery]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
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
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <CategoryNav />
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">
              We couldn't find any products matching your criteria. Please try another search or category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
