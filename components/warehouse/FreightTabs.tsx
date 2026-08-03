"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { freightTabs } from "@/lib/warehouse-data";

export function FreightTabs() {
  const [active, setActive] = useState(
    freightTabs.find((t) => t.active)?.label ?? freightTabs[0].label
  );

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
      {freightTabs.map((tab, i) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActive(tab.label)}
            className={cn(
              "inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer",
              i > 0 && "hidden md:inline-flex",
              active === tab.label
                ? "bg-[#292929] text-white shadow-sm hover:bg-[#3b3b3b]"
                : "border border-line bg-white text-ink-600 hover:bg-ink-50 hover:text-ink-900"
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 shrink-0",
                active === tab.label ? "text-white" : "text-primary-500"
              )}
              strokeWidth={2}
            />

            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}