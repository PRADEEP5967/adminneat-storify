
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, GitHub, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 mt-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="font-bold text-2xl tracking-tight inline-block">
              <span className="text-primary">Shop</span>
              <span className="text-primary opacity-70">Wave</span>
            </Link>
            <p className="text-muted-foreground">
              Elevating your shopping experience with premium products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <GitHub size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop/electronics" className="text-muted-foreground hover:text-primary transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/shop/clothing" className="text-muted-foreground hover:text-primary transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/shop/home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link to="/shop/books" className="text-muted-foreground hover:text-primary transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/shop/beauty" className="text-muted-foreground hover:text-primary transition-colors">
                  Beauty & Personal Care
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Account column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-muted-foreground hover:text-primary transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-muted-foreground hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-muted-foreground hover:text-primary transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">
                  123 Shopping Avenue, Retail District, 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-muted-foreground">support@shopwave.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ShopWave. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Returns Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
