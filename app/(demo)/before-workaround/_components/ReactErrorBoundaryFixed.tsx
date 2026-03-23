"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";
import { isNextInternalError } from "@/lib/utils";

export function ReactErrorBoundaryFixed({
  title = "Something went wrong",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [errorKey, setErrorKey] = useState(0);
  const [isPending, startTransition] = useTransition();

  return (
    <ErrorBoundary
      key={errorKey}
      fallbackRender={({ error }) => {
        if (isNextInternalError(error)) {
          throw error;
        }

        return (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 space-y-3">
            <p className="text-sm font-medium text-destructive">{title}</p>
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
