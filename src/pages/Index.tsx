
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/ui-components/Hero';
import FeaturedProducts from '../components/ui-components/FeaturedProducts';
import CategoryFeature from '../components/ui-components/CategoryFeature';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CategoryFeature />
      
      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive updates on new products, special offers, and exclusive discounts.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="h-10 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Banner */}
      <section className="py-8">
        <div className="container px-6 mx-auto">
          <div className="relative rounded-xl overflow-hidden bg-[#f0f0f0]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1600494603989-9650cf6dad51?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
              alt="Premium Products"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="px-8 md:px-12 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">Premium Quality</h2>
                <p className="text-muted-foreground mb-6">
                  We meticulously select each product in our collection to ensure exceptional quality and design.
                </p>
                <a
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
                >
                  Browse Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
