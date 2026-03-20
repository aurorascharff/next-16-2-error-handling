"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";

export function ReactErrorBoundaryFixed({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [errorKey, setErrorKey] = useState(0);
  const [isPending, startTransition] = useTransition();

  return (
    <ErrorBoundary
      key={errorKey}
      fallbackRender={({ error }) => {
        const message =
          error instanceof Error ? error.message : "Something went wrong";

        return (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 space-y-3">
            <p className="text-sm font-medium text-destructive">{message}</p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={isPending}
                onClick={() => {
                  startTransition(() => {
                    router.refresh();
                    setErrorKey((prev) => prev + 1);
                  });
                }}
              >
                {isPending ? "Retrying…" : "Try again"}
              </Button>
              <span className="text-xs text-muted-foreground">
                key change + router.refresh() in startTransition
              </span>
            </div>
          </div>
        );
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
