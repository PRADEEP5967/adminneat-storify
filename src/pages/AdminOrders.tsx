
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { Eye, Search, RefreshCw, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

// Mock order data - in a real app this would come from an API
const mockOrders = [
  {
    id: 'ORD-5142',
    customer: 'John Doe',
    email: 'john.doe@example.com',
    date: '2023-10-15',
    total: 429.99,
    status: 'completed',
    items: [
      { id: 'p1', name: 'Wireless Headphones', price: 129.99, quantity: 1 },
      { id: 'p2', name: 'Smart Watch', price: 299.99, quantity: 1 }
    ],
    shippingAddress: '123 Main St, New York, NY 10001',
    trackingNumber: 'TRK-789456123'
  },
  {
    id: 'ORD-5141',
    customer: 'Jane Smith',
    email: 'jane.smith@example.com',
    date: '2023-10-14',
    total: 199.99,
    status: 'processing',
    items: [
      { id: 'p3', name: 'Bluetooth Speaker', price: 199.99, quantity: 1 }
    ],
    shippingAddress: '456 Oak St, San Francisco, CA 94103',
    trackingNumber: ''
  },
  {
    id: 'ORD-5140',
    customer: 'Robert Johnson',
    email: 'robert.j@example.com',
    date: '2023-10-13',
    total: 349.98,
    status: 'pending',
    items: [
      { id: 'p4', name: 'Laptop Bag', price: 89.99, quantity: 1 },
      { id: 'p5', name: 'Mechanical Keyboard', price: 259.99, quantity: 1 }
    ],
    shippingAddress: '789 Pine St, Seattle, WA 98101',
    trackingNumber: ''
  },
  {
    id: 'ORD-5139',
    customer: 'Emily Davis',
    email: 'emily.d@example.com',
    date: '2023-10-12',
    total: 759.96,
    status: 'completed',
    items: [
      { id: 'p6', name: 'External SSD', price: 159.99, quantity: 2 },
      { id: 'p7', name: 'Wireless Mouse', price: 79.99, quantity: 2 },
      { id: 'p8', name: 'USB-C Hub', price: 59.99, quantity: 2 }
    ],
    shippingAddress: '101 Maple St, Boston, MA 02108',
    trackingNumber: 'TRK-456789123'
  },
  {
    id: 'ORD-5138',
    customer: 'Michael Brown',
    email: 'michael.b@example.com',
    date: '2023-10-11',
    total: 299.98,
    status: 'canceled',
    items: [
      { id: 'p9', name: 'Gaming Mouse', price: 149.99, quantity: 2 }
    ],
    shippingAddress: '202 Elm St, Chicago, IL 60007',
    trackingNumber: ''
  }
];

type OrderStatus = 'pending' | 'processing' | 'completed' | 'canceled';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  total: number;
  status: OrderStatus;
  items: OrderItem[];
  shippingAddress: string;
  trackingNumber: string;
}

const AdminOrders: React.FC = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');
  const [updatedStatus, setUpdatedStatus] = useState<OrderStatus>('pending');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [notes, setNotes] = useState('');

  // Redirect if not admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" state={{ from: { pathname: '/admin/orders' } }} replace />;
  }

  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter(order => {
    const matchesSearch = searchQuery.trim() === '' ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailsOpen(true);
  };

  const handleUpdateOrder = (order: Order) => {
    setSelectedOrder(order);
    setUpdatedStatus(order.status);
    setTrackingNumber(order.trackingNumber);
    setNotes('');
    setIsUpdateOpen(true);
  };

  const handleUpdateSubmit = () => {
    if (!selectedOrder) return;

    const updatedOrders = orders.map(order => {
      if (order.id === selectedOrder.id) {
        return {
          ...order,
          status: updatedStatus,
          trackingNumber: trackingNumber
        };
      }
      return order;
    });

    setOrders(updatedOrders);
    setIsUpdateOpen(false);
    toast.success(`Order ${selectedOrder.id} has been updated`);
  };

  const getStatusBadgeClass = (status: OrderStatus) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'canceled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="container px-6 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-medium mb-2">Order Management</h1>
            <p className="text-muted-foreground">
              View and manage customer orders
            </p>
          </div>
          <Button 
            variant="outline"
            className="mt-4 md:mt-0"
            onClick={() => setOrders(mockOrders)}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
        </div>

        {/* Filters and search */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="w-full md:w-96">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by order ID or customer name..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 pr-4 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <Label htmlFor="statusFilter">Status:</Label>
                <select
                  id="statusFilter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as OrderStatus | 'all')}
                  className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="completed">Completed</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Orders table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Tabs defaultValue="all">
            <div className="px-6 pt-4">
              <TabsList>
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>
                            <div>
                              <p>{order.customer}</p>
                              <p className="text-sm text-muted-foreground">{order.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>${order.total.toFixed(2)}</TableCell>
                          <TableCell>
                            <span className={`${getStatusBadgeClass(order.status)} text-xs font-medium px-2.5 py-0.5 rounded capitalize`}>
                              {order.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                onClick={() => handleViewOrder(order)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleUpdateOrder(order)}
                              >
                                Update
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No orders found. Try a different search or filter.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Content for other tabs would be similar but with filtered data */}
            <TabsContent value="pending" className="p-0">
              {/* Similar table structure but with pending orders */}
            </TabsContent>
            <TabsContent value="processing" className="p-0">
              {/* Similar table structure but with processing orders */}
            </TabsContent>
            <TabsContent value="completed" className="p-0">
              {/* Similar table structure but with completed orders */}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Customer Information</h3>
                  <p className="font-medium">{selectedOrder.customer}</p>
                  <p className="text-sm">{selectedOrder.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Order Information</h3>
                  <p className="text-sm">Date: {selectedOrder.date}</p>
                  <p className="text-sm">Status: 
                    <span className={`${getStatusBadgeClass(selectedOrder.status)} text-xs font-medium ml-2 px-2 py-0.5 rounded capitalize`}>
                      {selectedOrder.status}
                    </span>
                  </p>
                  {selectedOrder.trackingNumber && (
                    <p className="text-sm">Tracking: {selectedOrder.trackingNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Shipping Address</h3>
                <p className="text-sm">{selectedOrder.shippingAddress}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Order Items</h3>
                <div className="border rounded-md overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedOrder.items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>${item.price.toFixed(2)}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-medium">Order Total</TableCell>
                        <TableCell className="text-right font-bold">${selectedOrder.total.toFixed(2)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setIsDetailsOpen(false)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Update Order Dialog */}
      <Dialog open={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Order - {selectedOrder?.id}</DialogTitle>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="status">Order Status</Label>
                <select
                  id="status"
                  value={updatedStatus}
                  onChange={(e) => setUpdatedStatus(e.target.value as OrderStatus)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="completed">Completed</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tracking">Tracking Number</Label>
                <Input
                  id="tracking"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Internal Notes</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add any notes about this order update"
                  rows={3}
                />
              </div>

              <DialogFooter className="pt-4">
                <Button variant="outline" onClick={() => setIsUpdateOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleUpdateSubmit}>
                  Update Order
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default AdminOrders;
