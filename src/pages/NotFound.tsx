
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="container px-6 mx-auto py-20">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
          </div>
          <h2 className="text-3xl font-medium mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button className="gap-2">
                <Home className="h-5 w-5" />
                Back to Homepage
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
