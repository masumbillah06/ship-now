"use client";

import { useState } from "react";
import { MoreHorizontal, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  packageStatusList,
  packageStatusTabs,
  packageStatusBadgeVariant,
} from "@/lib/warehouse-data";

export function PackageStatusCard() {
  const [active, setActive] = useState<(typeof packageStatusTabs)[number]>(
    "All"
  );

  const items =
    active === "All"
      ? packageStatusList
      : packageStatusList.filter((p) => p.status === active);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="card-title">Package Status</h3>
        <button
          type="button"
          className="text-ink-300 hover:text-ink-600 cursor-pointer"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex items-center gap-1">
        {packageStatusTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
              active === tab
                ? "bg-ink-900 text-white"
                : "text-ink-400 hover:bg-ink-50 hover:text-ink-700"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="mt-3 flex flex-col divide-y divide-line">
        {items.map((pkg) => (
          <div key={pkg.id} className="flex items-center gap-3 py-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50">
              <Package size={16} className="text-primary-600" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink-900">
                {pkg.id}
              </p>
              <p className="truncate text-xs text-muted">{pkg.date}</p>
            </div>
            <Badge variant={packageStatusBadgeVariant[pkg.status]}>
              {pkg.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
