"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";
import { shipmentType } from "@/lib/data";

// Pick readable text color for a given badge background
function getBadgeTextColor(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 180 ? "#14132B" : "#fff";
}

export function ShipmentTypeChart() {
  const totalValue = shipmentType.data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="card py-5">
      <div className="flex items-center justify-between">
        <p className="card-title">Shipment Type</p>
        <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-100 text-ink-500">
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="relative mx-auto mt-2 h-55 w-55">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={shipmentType.data}
              dataKey="value"
              nameKey="name"
              innerRadius="70%"
              outerRadius="100%"
              paddingAngle={3}
              stroke="none"
              cornerRadius={6}
            >
              {shipmentType.data.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[11px] text-muted">
            {shipmentType.totalLabel}
          </span>
          <span className="text-xl font-bold text-ink-900">
            {shipmentType.total}
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
        {shipmentType.data.map((d) => {
          const percent =
            d.percent ?? Math.round((d.value / totalValue) * 100);
          return (
            <div key={d.name} className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
                style={{
                  backgroundColor: d.color,
                  color: getBadgeTextColor(d.color),
                }}
              >
                {percent}%
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink-900">
                  {d.name}
                </p>
                <p className="text-[11px] text-muted">
                  {d.value.toLocaleString()} shipment
                  {d.value === 1 ? "" : "s"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}