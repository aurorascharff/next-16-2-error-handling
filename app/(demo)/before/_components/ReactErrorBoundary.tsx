"use client";

import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { Button } from "@/components/ui/button";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  const message =
    error instanceof Error ? error.message : "Something went wrong";

  return (
    <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 space-y-3">
      <p className="text-sm font-medium text-destructive">{message}</p>
      <Button variant="outline" size="sm" onClick={resetErrorBoundary}>
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
