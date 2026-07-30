"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { statusTabs } from "@/lib/shipments-data";
import { cn } from "@/lib/utils";

export function ShipmentsToolbar({
  activeTab,
  onTabChange,
  search,
  onSearchChange,
  sort,
  onSortChange,
}: {
  activeTab: (typeof statusTabs)[number];
  onTabChange: (tab: (typeof statusTabs)[number]) => void;
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Status tabs */}
      <div className="scrollbar-thin flex items-center gap-1 overflow-x-auto rounded-xl border border-line bg-white p-1">
        {statusTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
              activeTab === tab
                ? "bg-ink-900 text-white"
                : "text-ink-500 hover:bg-ink-50"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 sm:w-56">
          <Search
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-300"
          />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search id, company, etc"
            className="w-full rounded-xl border border-line bg-white py-2 pl-8 pr-3 text-xs text-ink-700 placeholder:text-ink-300 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <button className="flex shrink-0 items-center gap-1.5 rounded-xl border border-line bg-white px-3 py-2 text-xs font-medium text-ink-600 hover:bg-ink-50">
          <SlidersHorizontal size={14} />
          <span className="hidden sm:inline">Filter</span>
        </button>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="shrink-0 rounded-xl border border-line bg-white px-3 py-2 text-xs font-medium text-ink-600 outline-none"
        >
          <option value="newest">Sort by: Newest</option>
          <option value="oldest">Sort by: Oldest</option>
          <option value="progress">Sort by: Progress</option>
        </select>
      </div>
    </div>
  );
}
