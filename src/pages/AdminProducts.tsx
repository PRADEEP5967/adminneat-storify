
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Edit, Trash2, Plus, Package } from 'lucide-react';
import { toast } from 'sonner';
import { products } from '../data/products';
import { Product } from '../context/CartContext';

const AdminProducts: React.FC = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [productList, setProductList] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
  });

  // Filter products based on search query
  const filteredProducts = searchQuery.trim() === ''
    ? productList
    : productList.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
  // Redirect if not admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" state={{ from: { pathname: '/admin/products' } }} replace />;
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setCurrentProduct(product);
      setFormValues({
        name: product.name,
        price: product.price.toString(),
        category: product.category,
        description: product.description,
        image: product.image,
      });
    } else {
      setCurrentProduct(null);
      setFormValues({
        name: '',
        price: '',
        category: '',
        description: '',
        image: '',
      });
    }
    setIsDialogOpen(true);
  };
  
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentProduct(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formValues.name || !formValues.price || !formValues.category || !formValues.description || !formValues.image) {
      toast.error('Please fill in all fields');
      return;
    }
    
    try {
      const productData = {
        id: currentProduct ? currentProduct.id : `p${Date.now()}`,
        name: formValues.name,
        price: parseFloat(formValues.price),
        category: formValues.category,
        description: formValues.description,
        image: formValues.image,
      };
      
      if (currentProduct) {
        // Edit existing product
        setProductList(prevProducts => 
          prevProducts.map(p => p.id === currentProduct.id ? productData : p)
        );
        toast.success('Product updated successfully');
      } else {
        // Add new product
        setProductList(prevProducts => [...prevProducts, productData]);
        toast.success('Product added successfully');
      }
      
      handleCloseDialog();
    } catch (error) {
      toast.error('Failed to save product');
      console.error(error);
    }
  };
  
  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProductList(prevProducts => prevProducts.filter(p => p.id !== productId));
      toast.success('Product deleted successfully');
    }
  };
  
  return (
    <Layout>
      <div className="container px-6 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-medium mb-2">Product Management</h1>
            <p className="text-muted-foreground">
              Add, edit, or delete products in your store
            </p>
          </div>
          <Button 
            className="mt-4 md:mt-0" 
            onClick={() => handleOpenDialog()}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>
        
        {/* Search bar */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>
        
        {/* Products table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Image</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Category</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">Price</th>
                  <th className="py-3 px-4 text-right text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-border">
                      <td className="py-3 px-4">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-10 h-10 object-cover rounded"
                        />
                      </td>
                      <td className="py-3 px-4 font-medium">{product.name}</td>
                      <td className="py-3 px-4 capitalize">{product.category}</td>
                      <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => handleOpenDialog(product)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-destructive hover:text-destructive"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
                      No products found. Try a different search or add a new product.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Add/Edit Product Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {currentProduct ? 'Edit Product' : 'Add New Product'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Product Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="price" className="text-sm font-medium">
                    Price
                  </label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formValues.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formValues.category}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="" disabled>Select category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home & Kitchen</option>
                    <option value="books">Books</option>
                    <option value="beauty">Beauty & Personal Care</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formValues.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Image URL
                </label>
                <Input
                  id="image"
                  name="image"
                  value={formValues.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button type="submit">
                {currentProduct ? 'Update Product' : 'Add Product'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default AdminProducts;
