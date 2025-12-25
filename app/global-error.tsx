"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

/**
 * Global Error Boundary
 * Catches errors in the entire application
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Global error:", error);
    
    // TODO: Send to error tracking service (Sentry, etc.)
    // if (process.env.NODE_ENV === 'production') {
    //   trackError(error);
    // }
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-surface-1 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="bg-surface-2 border border-line-2 rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-ink-1 text-center mb-4">
              Something Went Wrong
            </h1>
            
            <p className="text-lg text-ink-2 text-center mb-8">
              We encountered an unexpected error. Try again, or contact us if you need help.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && (
              <div className="mb-8 p-4 bg-surface-3 border border-line-2 rounded-lg">
                <p className="text-sm font-mono text-ink-2 break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-ink-3 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-electric text-white font-semibold rounded-lg hover:bg-accent-electric/90 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line-1 text-ink-2 font-semibold rounded-lg hover:border-accent-electric hover:text-accent-electric transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </div>

            {/* Support Info */}
            <div className="mt-8 pt-8 border-t border-line-2 text-center">
              <p className="text-sm text-ink-3">
                Need immediate help?{" "}
                <a
                  href="/contact"
                  className="text-accent-electric hover:underline font-medium"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
