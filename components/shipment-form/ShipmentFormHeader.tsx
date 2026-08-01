"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { MobileMenuButton } from "@/components/Sidebar";

export function ShipmentFormHeader({
  onOpenMobileMenu,
}: {
  onOpenMobileMenu: () => void;
}) {
  return (
    <div className="mb-6 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Link
            href="/shipments"
            aria-label="Back"
            className="flex h-7 w-7 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-50"
          >
            <ChevronLeft size={18} />
          </Link>
          <h1 className="text-xl font-bold text-ink-900">
            Create New Shipment
          </h1>
        </div>

        <nav className="mt-1 pl-9 text-xs text-muted">
          <Link href="/" className="hover:text-ink-700">
            Dashboard
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/shipments" className="hover:text-ink-700">
            Shipments
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-ink-600">Create New Shipment</span>
        </nav>
      </div>

      {/* Mobile-only trigger for the off-canvas sidebar */}
      <MobileMenuButton onClick={onOpenMobileMenu} />
    </div>
  );
}
