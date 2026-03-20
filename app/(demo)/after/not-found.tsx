export default function NotFound() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        catchError is framework-aware. retry() re-fetches Server Component data,
        notFound() and redirect() propagate to the framework instead of being
        caught.
      </p>
      <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-6 space-y-3">
        <p className="text-sm font-medium text-green-700 dark:text-green-400">
          404 — notFound() was handled by the framework
        </p>
        <p className="text-xs text-muted-foreground">
          catchError let notFound() propagate to the framework instead of
          swallowing it like react-error-boundary would.
        </p>
      </div>
    </div>
  );
}
