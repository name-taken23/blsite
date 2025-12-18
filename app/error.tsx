"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";

/**
 * Route-Level Error Boundary
 * Catches errors in specific routes without breaking the entire app
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Route error:", error);
    
    // TODO: Send to error tracking service
    // if (process.env.NODE_ENV === 'production') {
    //   trackError(error);
    // }
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <div className="text-center">
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-6">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>

          {/* Error Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Oops! Something Broke
          </h1>
          
          <p className="text-gray-600 mb-8">
            Don&apos;t worry, this page had an issue but the rest of the site is working fine.
          </p>

          {/* Error Details (Development) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg text-left">
              <p className="text-sm font-mono text-gray-700 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Digest: {error.digest}
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-accent-electric hover:text-accent-electric transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
