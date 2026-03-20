"use client";

import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
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

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  const isFrameworkError = isNextInternalError(error);
  const message = isFrameworkError
    ? "Caught a Next.js internal error (notFound / redirect)"
    : error instanceof Error
      ? error.message
      : "Something went wrong";

  return (
    <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 space-y-3">
      <p className="text-sm font-medium text-destructive">{message}</p>
      {isFrameworkError && (
        <p className="text-xs text-muted-foreground">
          This should have rendered the not-found page, but
          react-error-boundary swallowed it.
        </p>
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </div>
  );
}

export function ReactErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}
