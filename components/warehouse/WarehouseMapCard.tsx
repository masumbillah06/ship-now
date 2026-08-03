"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { warehouseFloors, warehouseMap } from "@/lib/warehouse-data";

export function WarehouseMapCard() {
  const [activeFloor, setActiveFloor] = useState(warehouseFloors[0]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="card-title">Warehouse Map</h3>
        <div className="flex items-center gap-1 rounded-lg bg-ink-50 p-1">
          {warehouseFloors.map((floor) => (
            <button
              key={floor}
              type="button"
              onClick={() => setActiveFloor(floor)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                activeFloor === floor
                  ? "bg-white text-ink-900 shadow-card"
                  : "text-ink-400 hover:text-ink-700"
              )}
            >
              {floor}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {warehouseMap.map((zone) => (
          <div key={zone.category}>
            <p className="text-xs font-semibold text-ink-700">
              {zone.category}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {zone.slots.map((slot, i) => (
                <span
                  key={slot}
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg text-[11px] font-medium",
                    zone.full && i === zone.slots.length - 1
                      ? "bg-ink-900 text-white"
                      : "bg-primary-50 text-primary-600"
                  )}
                >
                  {slot}
                </span>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-muted">
              Available Space{" "}
              <span className="font-medium text-ink-700">
                {zone.availableSpace}/{zone.totalSpace}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-line pt-3 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[4px] bg-primary-50" />
          Available
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[4px] bg-ink-900" />
          Full
        </div>
      </div>
    </div>
  );
}
