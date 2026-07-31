"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Sidebar, MobileMenuButton } from "@/components/Sidebar";
import { Footer } from "./Footer";

export function DashboardShell({
  children,
  header,
  addLabel = "Add New Shipping",
  showSearch = true,
}: {
  children: React.ReactNode;

  /** Replaces the default "Hello John! / Good Morning" greeting block. */
  header?: React.ReactNode;

  /** Label for the primary action button. */
  addLabel?: string;

  /** Whether to show the search bar in the header. */
  showSearch?: boolean;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-canvas">
      {/* Tablet sidebar — logo-only collapsed rail */}
      <div className="hidden md:block lg:hidden">
        <Sidebar collapsed />
      </div>

      {/* Desktop sidebar — full sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar — off-canvas, toggled via hamburger below */}
      <div className="md:hidden">
        <Sidebar
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />
      </div>

      <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Hamburger — only rendered/tappable below md (mobile) */}
            <MobileMenuButton onClick={() => setMobileOpen(true)} />

            {header ?? (
              <div>
                <h1 className="text-sm leading-5 text-muted">Hello John!</h1>
                <p className="text-2xl font-bold leading-7 text-ink-900">
                  Good Morning
                </p>
              </div>
            )}
          </div>

          {/* Header actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            {showSearch && (
              <div className="relative hidden sm:block w-[238px]">
                <Search
                  size={17}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-900"
                />

                <input
                  type="text"
                  placeholder="Search anything"
                  className="
                    h-[34px]
                    w-full
                    rounded-[7px]
                    border-0
                    bg-white
                    pl-8
                    pr-3
                    text-xs
                    text-ink-900
                    placeholder:text-muted
                    outline-none
                    focus:ring-1
                    focus:ring-gray-300
                  "
                />
              </div>
            )}

            {/* Add button */}
            <button
              type="button"
              className="
                flex
                h-[34px]
                items-center
                gap-1.5
                rounded-[7px]
                bg-[#292929]
                px-3.5
                text-xs
                font-medium
                text-white
                transition-colors
                hover:bg-[#202020]
              "
            >
              <Plus size={15} strokeWidth={1.8} />

              <span className="hidden sm:inline">
                {addLabel}
              </span>
            </button>
          </div>
        </div>

        {/* Page content */}
        <div className="mt-6">
          {children}
        </div>

        <Footer />
      </main>
    </div>
  );
}