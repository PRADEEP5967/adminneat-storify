
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, User, Menu, X, ChevronDown, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl tracking-tight">
          <span className="text-primary">Shop</span>
          <span className="text-primary opacity-70">Wave</span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-base font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`text-base font-medium transition-colors hover:text-primary ${
                location.pathname.includes('/shop') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Shop
            </Link>
            {isAuthenticated && user?.role === 'admin' && (
              <>
                <Link 
                  to="/admin" 
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === '/admin' ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Admin
                </Link>
                <Link 
                  to="/admin/products" 
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === '/admin/products' ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Products
                </Link>
              </>
            )}
          </nav>
        )}
        
        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          {/* Cart button */}
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          {/* Auth buttons */}
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-1 p-2"
              >
                <User className="h-6 w-6 text-primary" />
                <ChevronDown className="h-4 w-4 text-primary opacity-70" />
              </button>
              
              {/* User dropdown menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 glass-morphism rounded-md shadow-lg py-1 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-border">
                    <p className="font-medium text-sm">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                  <Link 
                    to="/account" 
                    className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    My Account
                  </Link>
                  <Link 
                    to="/orders" 
                    className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Orders
                  </Link>
                  {user?.role === 'admin' && (
                    <>
                      <Link 
                        to="/admin" 
                        className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                      <Link 
                        to="/admin/products" 
                        className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Manage Products
                      </Link>
                    </>
                  )}
                  <button 
                    onClick={() => {
                      logout();
                      setIsUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-destructive hover:bg-secondary transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-x-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">
                  Register
                </Button>
              </Link>
            </div>
          )}
          
          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-[76px] bg-background animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              to="/" 
              className={`text-xl font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`text-xl font-medium transition-colors hover:text-primary ${
                location.pathname.includes('/shop') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Shop
            </Link>
            {isAuthenticated && (
              <Link 
                to="/account" 
                className={`text-xl font-medium transition-colors hover:text-primary ${
                  location.pathname.includes('/account') ? 'text-primary' : 'text-foreground'
                }`}
              >
                My Account
              </Link>
            )}
            {isAuthenticated && user?.role === 'admin' && (
              <>
                <Link 
                  to="/admin" 
                  className={`text-xl font-medium transition-colors hover:text-primary ${
                    location.pathname.includes('/admin') && !location.pathname.includes('/admin/products') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Admin Dashboard
                </Link>
                <Link 
                  to="/admin/products" 
                  className={`text-xl font-medium transition-colors hover:text-primary ${
                    location.pathname.includes('/admin/products') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Manage Products
                </Link>
              </>
            )}
            {isAuthenticated ? (
              <Button variant="destructive" onClick={logout}>
                Logout
              </Button>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link to="/login">
                  <Button variant="outline" className="w-32">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="w-32">Register</Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
