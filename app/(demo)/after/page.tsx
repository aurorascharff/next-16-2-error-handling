import { Suspense } from "react";
import ErrorBoundary from "./_components/ErrorBoundary";
import UserProfile from "@/components/UserProfile";

function LoadingSkeleton() {
  return (
    <div className="rounded-lg border border-border p-6 animate-pulse space-y-3">
      <div className="h-4 bg-muted rounded w-1/3" />
      <div className="h-3 bg-muted rounded w-2/3" />
      <div className="h-3 bg-muted rounded w-1/4" />
    </div>
  );
}

export default function AfterPage() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        catchError is framework-aware. retry() re-fetches Server Component
        data, notFound() and redirect() propagate to the framework instead
        of being caught.
      </p>
      <ErrorBoundary title="Failed to load user profile">
        <Suspense fallback={<LoadingSkeleton />}>
          <UserProfile />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
