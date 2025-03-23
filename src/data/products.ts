
import { Product } from '../context/CartContext';

// Define product categories
export const categories = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "home", name: "Home & Kitchen" },
  { id: "books", name: "Books" },
  { id: "beauty", name: "Beauty & Personal Care" }
];

// Generate mock products
export const products: Product[] = [
  // Electronics
  {
    id: "e1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "electronics",
    description: "Experience crystal-clear sound with these premium wireless headphones, featuring active noise cancellation and 30-hour battery life."
  },
  {
    id: "e2",
    name: "Smart Watch Series 5",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "electronics",
    description: "Stay connected with this advanced smartwatch featuring heart rate monitoring, GPS, and a vibrant always-on display."
  },
  {
    id: "e3",
    name: "Ultra-Thin Laptop Pro",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    category: "electronics",
    description: "Powerful and portable, this laptop features a stunning display, all-day battery life, and lightning-fast performance."
  },
  
  // Clothing
  {
    id: "c1",
    name: "Designer Wool Coat",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    category: "clothing",
    description: "Stay stylish and warm with this premium wool coat, featuring a modern cut and exceptional craftsmanship."
  },
  {
    id: "c2",
    name: "Premium Denim Jeans",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW5zfGVufDB8fDB8fHww",
    category: "clothing",
    description: "These premium jeans offer the perfect blend of comfort and durability, with a classic fit that never goes out of style."
  },
  {
    id: "c3",
    name: "Minimalist Sneakers",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    category: "clothing",
    description: "These minimalist sneakers offer timeless style and all-day comfort, perfect for any casual occasion."
  },
  
  // Home & Kitchen
  {
    id: "h1",
    name: "Smart Home Speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "home",
    description: "Transform your home with this smart speaker that delivers rich sound and seamless voice control for your smart home devices."
  },
  {
    id: "h2",
    name: "Artisan Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1566470561756-0a214f24ab4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMG1ha2VyfGVufDB8fDB8fHww",
    category: "home",
    description: "Brew the perfect cup of coffee with this precision-engineered coffee maker, featuring customizable settings for your ideal brew strength."
  },
  {
    id: "h3",
    name: "Designer Bedding Set",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    category: "home",
    description: "Elevate your bedroom with this luxurious bedding set, crafted from premium materials for exceptional comfort and style."
  },
  
  // Books
  {
    id: "b1",
    name: "The Art of Simplicity",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    category: "books",
    description: "This bestselling book explores the philosophy of minimalism and how simplifying your life can lead to greater happiness and fulfillment."
  },
  {
    id: "b2",
    name: "Future Technology Trends",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    category: "books",
    description: "Explore the cutting-edge technologies that will shape our future in this fascinating deep dive into emerging tech trends."
  },
  
  // Beauty & Personal Care
  {
    id: "bp1",
    name: "Premium Skincare Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNraW5jYXJlfGVufDB8fDB8fHww",
    category: "beauty",
    description: "Revitalize your skin with this premium skincare set, featuring cleanser, toner, and moisturizer formulated with natural ingredients."
  },
  {
    id: "bp2",
    name: "Luxury Fragrance",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
    category: "beauty",
    description: "This sophisticated fragrance combines notes of bergamot, jasmine, and sandalwood for an elegant, long-lasting scent."
  }
];

// Function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

// Function to get a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
