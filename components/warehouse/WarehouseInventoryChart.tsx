"use client";

import { MoreHorizontal } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { warehouseInventory } from "@/lib/warehouse-data";

export function WarehouseInventoryChart() {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="card-title">Warehouse Inventory</h3>
        <button
          type="button"
          className="text-ink-300 hover:text-ink-600 cursor-pointer"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      <p className="mt-1 text-2xl font-bold text-ink-900">
        {warehouseInventory.total}
        <span className="ml-1.5 text-xs font-medium text-muted">
          {warehouseInventory.totalLabel}
        </span>
      </p>

      {/* Legend chips */}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
        {warehouseInventory.data.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <span className="text-xs text-ink-500">{d.name}</span>
          </div>
        ))}
      </div>

      {/* Bars */}
      <div className="mt-4 h-[110px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={warehouseInventory.data}
            barCategoryGap="24%"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Bar dataKey="percent" radius={[6, 6, 6, 6]} maxBarSize={36}>
              {warehouseInventory.data.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Percent / value labels under each bar */}
      <div className="mt-2 grid grid-cols-6 gap-1 text-center">
        {warehouseInventory.data.map((d) => (
          <div key={d.name}>
            <p className="text-xs font-semibold text-ink-900">{d.percent}%</p>
            <p className="text-[11px] text-muted">
              {d.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
