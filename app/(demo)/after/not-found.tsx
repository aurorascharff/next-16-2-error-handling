export default function NotFound() {
  return (
    <div className="rounded-lg border border-border p-6 space-y-2">
      <p className="text-lg font-semibold">404 — User not found</p>
      <p className="text-sm text-muted-foreground">
        This is a{" "}
        <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
          not-found.tsx
        </code>{" "}
        boundary. catchError let notFound() propagate to the framework instead
        of catching it.
      </p>
    </div>
  );
}
