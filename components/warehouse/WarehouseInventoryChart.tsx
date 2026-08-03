"use client";

import { MoreHorizontal } from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
  LabelList,
  XAxis,
  CartesianGrid,
} from "recharts";
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

      {/* Chart */}
      <div className="mt-6 h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={warehouseInventory.data}
            barCategoryGap="10%"
            margin={{ top: 32, right: 0, left: 0, bottom: 8 }}
          >
            {/* Dotted muted vertical lines between bars */}
            <CartesianGrid
              vertical={true}
              horizontal={false}
              stroke="#d1d5db"
              strokeDasharray="2 4"
              strokeOpacity={0.7}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={false}
            />

            <Bar
              dataKey="percent"
              radius={8}
              maxBarSize={64}
              background={{ fill: "#f3f4f6", radius: 8 }}
            >
              {warehouseInventory.data.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}

              {/* Category labels – fixed at the same height above every bar */}
              <LabelList
                dataKey="name"
                content={({ x, width, value }) => (
                  <text
                    x={Number(x) + Number(width) / 2}
                    y={16}
                    textAnchor="middle"
                    fontSize={12}
                    fontWeight={500}
                    fill="#6b7280"
                  >
                    {value}
                  </text>
                )}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Percent · value labels – pulled very close to the bars */}
      <div className="-mt-7 grid grid-cols-6 gap-1 text-center">
        {warehouseInventory.data.map((d) => (
          <div key={d.name}>
            <p className="text-xs font-medium text-ink-900">
              {d.percent}%
              <span className="mx-1 text-muted">·</span>
              <span className="text-muted">{d.value.toLocaleString()}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}