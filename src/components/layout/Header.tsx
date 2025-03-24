
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, User, Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  
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
    setSearchVisible(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl tracking-tight flex items-center">
          <span className="text-primary">Shop</span>
          <span className="text-primary opacity-70">Wave</span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <NavigationMenu className="hidden md:flex mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className={`px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                      location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname.includes('/shop') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                    <Link 
                      to="/shop" 
                      className="flex flex-col space-y-1 hover:bg-secondary rounded-md p-2 transition-colors"
                    >
                      <div className="font-medium">All Products</div>
                      <div className="text-sm text-muted-foreground">Browse our entire collection</div>
                    </Link>
                    <Link 
                      to="/shop/electronics" 
                      className="flex flex-col space-y-1 hover:bg-secondary rounded-md p-2 transition-colors"
                    >
                      <div className="font-medium">Electronics</div>
                      <div className="text-sm text-muted-foreground">Latest gadgets and devices</div>
                    </Link>
                    <Link 
                      to="/shop/clothing" 
                      className="flex flex-col space-y-1 hover:bg-secondary rounded-md p-2 transition-colors"
                    >
                      <div className="font-medium">Clothing</div>
                      <div className="text-sm text-muted-foreground">Trendy fashion items</div>
                    </Link>
                    <Link 
                      to="/shop/home" 
                      className="flex flex-col space-y-1 hover:bg-secondary rounded-md p-2 transition-colors"
                    >
                      <div className="font-medium">Home & Kitchen</div>
                      <div className="text-sm text-muted-foreground">Essentials for your home</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {isAuthenticated && user?.role === 'admin' && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`text-base font-medium transition-colors hover:text-primary ${
                      location.pathname.includes('/admin') ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    Admin
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col p-2 w-[200px]">
                      <Link 
                        to="/admin" 
                        className="px-2 py-1.5 hover:bg-secondary rounded-md transition-colors"
                      >
                        Dashboard
                      </Link>
                      <Link 
                        to="/admin/products" 
                        className="px-2 py-1.5 hover:bg-secondary rounded-md transition-colors"
                      >
                        Manage Products
                      </Link>
                      <Link 
                        to="/admin/orders" 
                        className="px-2 py-1.5 hover:bg-secondary rounded-md transition-colors"
                      >
                        Manage Orders
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        )}
        
        {/* Right side buttons */}
        <div className="flex items-center space-x-3">
          {/* Search button */}
          <button
            onClick={() => setSearchVisible(!searchVisible)}
            className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-primary" />
          </button>
          
          {/* Cart button */}
          <Link 
            to="/cart" 
            className="relative p-2 rounded-full hover:bg-secondary/50 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5 text-primary" />
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
                className="flex items-center space-x-1 p-2 rounded-full hover:bg-secondary/50 transition-colors"
                aria-label="User menu"
              >
                <User className="h-5 w-5 text-primary" />
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
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
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
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-primary" />
              )}
            </button>
          )}
        </div>
      </div>
      
      {/* Search form overlay */}
      {searchVisible && (
        <div className="absolute left-0 right-0 top-full bg-background border-b border-border py-4 px-6 shadow-md animate-slide-down">
          <form className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full h-10 pl-3 pr-10 rounded-md border border-input bg-transparent"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-muted-foreground" />
            </button>
          </form>
        </div>
      )}
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background animate-fade-in z-40">
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
