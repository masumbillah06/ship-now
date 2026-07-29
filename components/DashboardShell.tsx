"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-canvas">
      {/* Full sidebar on desktop (lg+), icon-only on tablet (md), drawer on mobile */}
      <div className="hidden md:block lg:hidden">
        <Sidebar collapsed />
      </div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="md:hidden">
        <Sidebar mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />
      </div>

      <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        <Topbar onOpenMobile={() => setMobileOpen(true)} />
        <div className="mt-6">
          <h1 className="text-sm text-muted">Hello John!</h1>
          <p className="text-2xl font-bold text-ink-900">Good Morning</p>
        </div>
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}
