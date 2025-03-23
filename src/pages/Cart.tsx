
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import CartItem from '../components/ui-components/CartItem';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowRight, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container px-6 mx-auto py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
              <ShoppingCart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-medium mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/shop">
              <Button className="gap-2">
                Start Shopping
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container px-6 mx-auto py-12">
        <h1 className="text-3xl font-medium mb-4">Shopping Cart</h1>
        <p className="text-muted-foreground mb-8">
          You have {totalItems} item{totalItems !== 1 ? 's' : ''} in your cart.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <h2 className="text-xl font-medium">Items</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-destructive"
                  onClick={clearCart}
                >
                  <Trash className="h-4 w-4 mr-2" />
                  Clear cart
                </Button>
              </div>
              
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-medium pb-4 border-b border-border">Order Summary</h2>
              
              <div className="py-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold">
                    ${(totalPrice + totalPrice * 0.1).toFixed(2)}
                  </span>
                </div>
                
                <Button className="w-full mb-4">Proceed to Checkout</Button>
                <Link to="/shop">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
