import { Suspense } from "react";
import CatchErrorWrapper from "../../_components/catch-error-wrapper";
import UserProfile from "../../_components/user-profile";

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
      <CatchErrorWrapper>
        <Suspense fallback={<LoadingSkeleton />}>
          <UserProfile />
        </Suspense>
      </CatchErrorWrapper>
    </div>
  );
}
