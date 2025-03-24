
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Hero from '../components/ui-components/Hero';
import FeaturedProducts from '../components/ui-components/FeaturedProducts';
import CategoryFeature from '../components/ui-components/CategoryFeature';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CategoryFeature />
      
      {/* Newsletter Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-4">Join Our Newsletter</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on new products, special offers, and exclusive discounts. Be the first to know about our latest arrivals.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="h-12 px-6 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Banner */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <div className="relative rounded-xl overflow-hidden bg-[#f0f0f0] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1600494603989-9650cf6dad51?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
              alt="Premium Products"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="px-10 md:px-16 max-w-xl">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Premium Collection</span>
                <h2 className="text-3xl md:text-4xl font-medium mb-4">Exceptional Quality Guaranteed</h2>
                <p className="text-muted-foreground mb-8">
                  We meticulously select each product in our collection to ensure exceptional quality and design. Our commitment to excellence is unwavering.
                </p>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
