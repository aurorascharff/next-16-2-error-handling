export default function NotFound() {
  return (
    <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-6">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center size-6 rounded-full bg-green-500/10 text-green-600 text-xs font-bold">
          ✓
        </span>
        <p className="text-sm font-medium text-green-700 dark:text-green-400">
          404 — notFound() was handled by the framework
        </p>
      </div>
    </div>
  );
}
