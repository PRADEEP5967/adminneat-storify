
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import { getProductById, getProductsByCategory } from '../data/products';
import { Minus, Plus, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '../components/ui-components/ProductCard';

const ProductDetail: React.FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const product = productId ? getProductById(productId) : null;
  
  useEffect(() => {
    if (!product && !loading) {
      navigate('/shop');
    } else {
      setLoading(false);
    }
  }, [product, loading, navigate]);
  
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };
  
  // Get related products (same category)
  const relatedProducts = product
    ? getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4)
    : [];
  
  if (loading) {
    return (
      <Layout>
        <div className="container px-6 mx-auto py-16 flex justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }
  
  if (!product) {
    return (
      <Layout>
        <div className="container px-6 mx-auto py-16 text-center">
          <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container px-6 mx-auto py-12">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/shop/${product.category}`} 
            className="hover:text-primary transition-colors"
          >
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
        
        {/* Product detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product image */}
          <div className="overflow-hidden rounded-lg bg-muted">
            <div className={`aspect-square ${imageLoaded ? '' : 'animate-pulse'}`}>
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full object-cover ${
                  imageLoaded ? 'img-lazy-load loaded' : 'img-lazy-load'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
          
          {/* Product info */}
          <div className="flex flex-col justify-center">
            <span className="text-sm text-muted-foreground mb-2">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            <h1 className="text-3xl font-medium mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
            
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            {/* Quantity selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border border-input rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2"
              >
                <Heart className="h-5 w-5" />
                Add to Wishlist
              </Button>
              <Button
                size="icon"
                variant="outline"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Additional info */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">SKU:</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.id.toUpperCase()}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Category:</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-medium mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
