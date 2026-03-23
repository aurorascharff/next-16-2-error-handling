"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";

function isNextInternalError(error: unknown): boolean {
  if (
    error &&
    typeof error === "object" &&
    "digest" in error &&
    typeof (error as { digest: unknown }).digest === "string"
  ) {
    const digest = (error as { digest: string }).digest;
    return (
      digest.startsWith("NEXT_REDIRECT") ||
      digest.startsWith("NEXT_HTTP_ERROR_FALLBACK") ||
      digest.startsWith("NEXT_NOT_FOUND")
    );
  }
  return false;
}

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
          <p className="text-sm font-medium text-destructive">
            {hasDigest(error)
              ? "Caught a framework error (notFound / redirect)"
              : title}
          </p>
          {hasDigest(error) && (
            <p className="text-xs text-muted-foreground">
              This should have been handled by the framework, but
              react-error-boundary swallowed it.
            </p>
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
