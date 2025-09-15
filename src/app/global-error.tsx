'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-background text-foreground min-h-screen">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-lg w-full text-center space-y-8">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <AlertTriangle className="h-20 w-20 text-red-500" />
                <div className="absolute inset-0 bg-red-500/20 blur-xl"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-foreground">
                Something went wrong!
              </h1>
              <p className="text-lg text-muted-foreground">
                We're experiencing technical difficulties. Our team has been notified and is working on a fix.
              </p>
            </div>

            {/* Error Details for Development */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  Development Error Details:
                </h3>
                <p className="text-sm font-mono text-red-700 dark:text-red-300">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={reset} className="btn-primary-watershed">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Link href="/">
                  <Button className="btn-outline-watershed">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Button>
                </Link>
              </div>

              <Link href="/contact">
                <Button className="btn-ghost-watershed">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Report this issue
                </Button>
              </Link>
            </div>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>Error occurred at: {new Date().toLocaleString()}</p>
              <p>We apologize for the inconvenience.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}