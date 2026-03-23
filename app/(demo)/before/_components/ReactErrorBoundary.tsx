"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";
import { isNextInternalError } from "@/lib/utils";

export function ReactErrorBoundary({
  title = "Something went wrong",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 space-y-3">
          {isNextInternalError(error) ? (
            <p className="text-sm font-medium text-destructive">
              Caught a framework error (notFound / redirect) that should have
              been handled by the framework.
            </p>
          ) : (
            <p className="text-sm font-medium text-destructive">{title}</p>
          )}
          <Button variant="outline" size="sm" onClick={resetErrorBoundary}>
            Try again
          </Button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
