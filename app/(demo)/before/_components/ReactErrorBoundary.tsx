"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";

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
          <p className="text-sm font-medium text-destructive">{title}</p>
          <p className="text-xs text-muted-foreground">
            Could be an app error or a framework error (notFound / redirect).
            Check error.digest to find out.
          </p>
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
