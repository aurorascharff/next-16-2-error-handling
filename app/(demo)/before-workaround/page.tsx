import { Suspense } from "react";
import { ReactErrorBoundaryFixed } from "./_components/ReactErrorBoundaryFixed";
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

export default function WorkaroundPage() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Workaround: check the digest in the error boundary to detect framework
        errors, and use a key change + router.refresh() inside startTransition
        to re-fetch Server Component data.
      </p>
      <ReactErrorBoundaryFixed>
        <Suspense fallback={<LoadingSkeleton />}>
          <UserProfile />
        </Suspense>
      </ReactErrorBoundaryFixed>
    </div>
  );
}
