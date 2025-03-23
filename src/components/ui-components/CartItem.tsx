
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash, Minus, Plus } from 'lucide-react';
import { CartItem as CartItemType } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };
  
  const increaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  return (
    <div className="flex items-center py-4 border-b border-border">
      {/* Product image */}
      <Link to={`/product/${product.id}`} className="shrink-0 w-20 h-20 mr-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded"
        />
      </Link>
      
      {/* Product details */}
      <div className="flex-grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <p className="font-semibold">${product.price.toFixed(2)}</p>
      </div>
      
      {/* Quantity controls */}
      <div className="flex items-center mr-4">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 rounded-full"
          onClick={decreaseQuantity}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-10 text-center">{quantity}</span>
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 rounded-full"
          onClick={increaseQuantity}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Item total */}
      <div className="w-24 text-right font-semibold">
        ${(product.price * quantity).toFixed(2)}
      </div>
      
      {/* Remove button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-4 text-muted-foreground hover:text-destructive"
        onClick={() => removeItem(product.id)}
      >
        <Trash className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default CartItem;
