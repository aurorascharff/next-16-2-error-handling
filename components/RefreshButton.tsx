"use client";

import { Button } from "@/components/ui/button";

export function RefreshButton() {
  return (
    <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
      Reload Page
    </Button>
  );
}
