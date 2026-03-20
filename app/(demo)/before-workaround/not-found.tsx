export default function NotFound() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Workaround: wrap data fetching in try/catch to rethrow framework errors
        by checking the digest, and change the ErrorBoundary key +
        router.refresh() inside startTransition to re-fetch Server Component
        data.
      </p>
      <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-6 space-y-3">
        <p className="text-sm font-medium text-green-700 dark:text-green-400">
          404 — notFound() was handled by the framework
        </p>
        <p className="text-xs text-muted-foreground">
          The server component manually rethrew the framework error, so
          react-error-boundary didn&apos;t swallow it.
        </p>
      </div>
    </div>
  );
}
