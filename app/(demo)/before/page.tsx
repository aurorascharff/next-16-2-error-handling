import { Suspense } from "react";
import { ReactErrorBoundary } from "./_components/ReactErrorBoundary";
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

export default function BeforePage() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        react-error-boundary catches all errors, including notFound() and
        redirect(). reset() only clears client state without re-fetching
        Server Component data.
      </p>
      <ReactErrorBoundary>
        <Suspense fallback={<LoadingSkeleton />}>
          <UserProfile />
        </Suspense>
      </ReactErrorBoundary>
    </div>
  );
}
