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
      <TabNav />
      {children}
    </div>
  );
}
