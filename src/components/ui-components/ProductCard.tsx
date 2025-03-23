
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="product-card group bg-white rounded-lg overflow-hidden shadow hover-translate">
      {/* Product image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-square">
        <div className={`w-full h-full bg-muted ${imageLoaded ? '' : 'animate-pulse'}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'img-lazy-load loaded' : 'img-lazy-load'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Quick actions overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button 
            size="sm"
            variant="secondary" 
            className="rounded-full p-2 h-10 w-10"
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Link 
            to={`/product/${product.id}`}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-primary rounded-full p-2 h-10 w-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Eye className="h-5 w-5" />
          </Link>
        </div>
      </Link>
      
      {/* Product info */}
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-2">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-2 line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
