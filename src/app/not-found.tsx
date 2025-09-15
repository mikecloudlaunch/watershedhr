'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { WebsiteHeader } from '@/components/layout/WebsiteHeader';
import { WebsiteFooter } from '@/components/layout/WebsiteFooter';

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback to home if no history
      window.location.href = '/';
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <WebsiteHeader />
      
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* 404 Animation */}
          <div className="relative">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 blur-3xl"></div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved to a new location.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-card border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/features">
                <Button className="btn-outline-watershed w-full">
                  View Features
                </Button>
              </Link>
              <Link href="/pricing">
                <Button className="btn-outline-watershed w-full">
                  See Pricing
                </Button>
              </Link>
              <Link href="/about">
                <Button className="btn-outline-watershed w-full">
                  About Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="btn-outline-watershed w-full">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGoBack} 
              className="btn-outline-watershed"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Link href="/">
              <Button className="btn-primary-watershed">
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Need help? <Link href="/contact" className="text-yellow-400 hover:underline">Contact our support team</Link>
          </p>
        </div>
      </div>

      <WebsiteFooter />
    </div>
  );
}