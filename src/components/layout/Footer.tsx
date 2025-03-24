
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/80 pt-20 pb-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="font-bold text-3xl tracking-tight inline-block">
              <span className="text-primary">Shop</span>
              <span className="text-primary opacity-70">Wave</span>
            </Link>
            <p className="text-muted-foreground">
              Elevating your shopping experience with premium products and exceptional service. We're dedicated to bringing you the best in quality and design.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop column */}
          <div className="md:col-span-2">
            <h3 className="font-medium text-lg mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-3.5 w-3.5 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />
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
            </ul>
          </div>
          
          {/* Account column */}
          <div className="md:col-span-2">
            <h3 className="font-medium text-lg mb-6">Account</h3>
            <ul className="space-y-4">
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
          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-6">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button size="sm" className="shrink-0">
                Subscribe
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">
                  123 Shopping Avenue, Retail District, 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground">support@shopwave.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ShopWave. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Returns Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
