
import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { 
  BarChart, 
  DollarSign, 
  Users, 
  Package, 
  TrendingUp, 
  ShoppingBag, 
  Box, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '../data/products';

const AdminDashboard: React.FC = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" state={{ from: { pathname: '/admin' } }} replace />;
  }
  
  return (
    <Layout>
      <div className="container px-6 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-medium mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name}
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Revenue</p>
                <h3 className="text-2xl font-bold">$12,426</h3>
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+12.5%</span>
              <span className="text-muted-foreground ml-2">from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Orders</p>
                <h3 className="text-2xl font-bold">142</h3>
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+8.2%</span>
              <span className="text-muted-foreground ml-2">from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Box className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Products</p>
                <h3 className="text-2xl font-bold">{products.length}</h3>
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+4.75%</span>
              <span className="text-muted-foreground ml-2">from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Customers</p>
                <h3 className="text-2xl font-bold">854</h3>
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+18.3%</span>
              <span className="text-muted-foreground ml-2">from last month</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Recent Orders</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                      <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Customer</th>
                      <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Products</th>
                      <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Total</th>
                      <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 text-sm">#ORD-5142</td>
                      <td className="py-3 px-2 text-sm">John Doe</td>
                      <td className="py-3 px-2 text-sm">3</td>
                      <td className="py-3 px-2 text-sm font-medium">$429.99</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 text-sm">#ORD-5141</td>
                      <td className="py-3 px-2 text-sm">Jane Smith</td>
                      <td className="py-3 px-2 text-sm">1</td>
                      <td className="py-3 px-2 text-sm font-medium">$199.99</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Processing
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 text-sm">#ORD-5140</td>
                      <td className="py-3 px-2 text-sm">Robert Johnson</td>
                      <td className="py-3 px-2 text-sm">2</td>
                      <td className="py-3 px-2 text-sm font-medium">$349.98</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 text-sm">#ORD-5139</td>
                      <td className="py-3 px-2 text-sm">Emily Davis</td>
                      <td className="py-3 px-2 text-sm">4</td>
                      <td className="py-3 px-2 text-sm font-medium">$759.96</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm">#ORD-5138</td>
                      <td className="py-3 px-2 text-sm">Michael Brown</td>
                      <td className="py-3 px-2 text-sm">2</td>
                      <td className="py-3 px-2 text-sm font-medium">$299.98</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Canceled
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Quick actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-medium mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Package className="mr-2 h-5 w-5" />
                  Add New Product
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-5 w-5" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart className="mr-2 h-5 w-5" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-5 w-5" />
                  Store Settings
                </Button>
              </div>
            </div>
            
            {/* Top selling products */}
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-medium mb-6">Top Selling Products</h2>
              
              <ul className="space-y-4">
                {products.slice(0, 5).map((product, index) => (
                  <li key={product.id} className="flex items-center">
                    <span className="font-medium text-sm w-6">{index + 1}.</span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">{product.name}</h4>
                      <p className="text-xs text-muted-foreground">${product.price.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
