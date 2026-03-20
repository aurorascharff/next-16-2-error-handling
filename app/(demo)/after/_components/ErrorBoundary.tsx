"use client";

import {
  unstable_catchError as catchError,
  type ErrorInfo,
} from "next/error";
import { Button } from "@/components/ui/button";

function ErrorFallback(
  _props: object,
  { error, unstable_retry: retry }: ErrorInfo,
) {
  return (
    <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 space-y-3">
      <p className="text-sm font-medium text-destructive">{error.message}</p>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => retry()}>
          Try again (retry)
        </Button>
        <span className="text-xs text-muted-foreground">
          Re-fetches RSC data
        </span>
      </div>
    </div>
  );
}

export default catchError(ErrorFallback);
