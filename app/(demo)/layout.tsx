import { TabNav } from "@/components/TabNav";
import { RefreshButton } from "@/components/RefreshButton";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Error Handling in Next.js 16.2
        </h1>
        <RefreshButton />
      </div>
      <p className="text-sm text-muted-foreground">
        Next.js provides{" "}
        <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
          error.tsx
        </code>{" "}
        for route-level error handling. These examples show component-level
        error boundaries for when you need more granular control within a page.
      </p>
      <TabNav />
      {children}
    </div>
  );
}
