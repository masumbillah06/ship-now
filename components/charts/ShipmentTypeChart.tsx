"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { shipmentType } from "@/lib/data";

export function ShipmentTypeChart() {
  return (
    <div className="card">
      <p className="card-title">Shipment Type</p>

      <div className="relative mx-auto mt-2 h-[170px] w-[170px]">
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
          <span className="text-xl font-bold text-ink-900">
            {shipmentType.total}
          </span>
          <span className="text-[11px] text-muted">
            {shipmentType.totalLabel}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
        {shipmentType.data.map((d) => (
          <div key={d.name} className="flex items-start gap-2">
            <span
              className="mt-1 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-ink-900">
                {d.name}
              </p>
              <p className="text-[11px] text-muted">
                {d.value.toLocaleString()} shipments
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
