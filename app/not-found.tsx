import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="max-w-sm text-center space-y-6">
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-green-500/10 text-green-600 text-2xl font-bold">
          ✓
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter">404</h1>
          <p className="text-muted-foreground">
            This is the Next.js{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
              not-found.tsx
            </code>{" "}
            page. It rendered because{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
              notFound()
            </code>{" "}
            was handled correctly by the framework.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 h-9 text-sm font-medium hover:bg-muted transition-colors"
        >
          &larr; Back to demo
        </Link>
      </div>
    </div>
  );
}
