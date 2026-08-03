"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { freightTabs } from "@/lib/warehouse-data";

export function FreightTabs() {
  const [active, setActive] = useState(
    freightTabs.find((t) => t.active)?.label ?? freightTabs[0].label
  );

  return (
    <div className="flex items-center gap-2">
      {freightTabs.map((tab, i) => (
        <button
          key={tab.label}
          type="button"
          onClick={() => setActive(tab.label)}
          className={cn(
            "h-[34px] shrink-0 rounded-[7px] px-3.5 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
            i > 0 && "hidden md:inline-flex",
            active === tab.label
              ? "bg-[#292929] text-white hover:bg-[#505050]"
              : "border border-line bg-white text-ink-500 hover:bg-ink-50 hover:text-ink-700"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
