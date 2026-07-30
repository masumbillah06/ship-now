"use client";

import { Search, Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Topbar({
  onOpenMobile,
  addLabel = "Add New Shipping",
}: {
  onOpenMobile?: () => void;
  addLabel?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={onOpenMobile}
        className="lg:hidden"
      >
        <Menu size={18} />
      </Button>

      <div className="relative flex-1">
        <Search
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300"
        />
        <input
          type="text"
          placeholder="Search anything"
          className="w-full rounded-xl border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-ink-700 placeholder:text-ink-300 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>

      <Button variant="default" className="hidden sm:inline-flex">
        <Plus size={16} />
        {addLabel}
      </Button>
      <Button variant="default" size="icon" className="sm:hidden">
        <Plus size={18} />
      </Button>
    </div>
  );
}