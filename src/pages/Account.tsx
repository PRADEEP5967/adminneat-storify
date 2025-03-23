
import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Shield, LogOut, Package, CreditCard, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Account: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: { pathname: '/account' } }} replace />;
  }
  
  return (
    <Layout>
      <div className="container px-6 mx-auto py-12">
        <h1 className="text-3xl font-medium mb-2">My Account</h1>
        <p className="text-muted-foreground mb-8">
          Manage your account details and view your orders
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6 pb-6 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <User className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">{user?.name}</h3>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button className="flex items-center w-full px-3 py-2 rounded-md bg-primary text-primary-foreground">
                  <User className="mr-3 h-5 w-5" />
                  Profile
                </button>
                <button className="flex items-center w-full px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                  <Package className="mr-3 h-5 w-5" />
                  Orders
                </button>
                <button className="flex items-center w-full px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                  <CreditCard className="mr-3 h-5 w-5" />
                  Payment Methods
                </button>
                <button className="flex items-center w-full px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                  <Heart className="mr-3 h-5 w-5" />
                  Wishlist
                </button>
                {user?.role === 'admin' && (
                  <button className="flex items-center w-full px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                    <Shield className="mr-3 h-5 w-5" />
                    Admin Dashboard
                  </button>
                )}
                <button 
                  className="flex items-center w-full px-3 py-2 rounded-md text-destructive hover:bg-destructive/10 transition-colors"
                  onClick={logout}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Logout
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-medium mb-6 pb-4 border-b border-border">
                Profile Information
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="firstName" 
                      className="block text-sm font-medium mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      defaultValue={user?.name.split(' ')[0]}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="lastName" 
                      className="block text-sm font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      defaultValue={user?.name.split(' ')[1] || ''}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue={user?.email}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div className="pt-6 border-t border-border">
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="currentPassword" 
                        className="block text-sm font-medium mb-2"
                      >
                        Current Password
                      </label>
                      <input
                        id="currentPassword"
                        type="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="********"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="newPassword" 
                        className="block text-sm font-medium mb-2"
                      >
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="********"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
