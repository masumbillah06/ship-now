"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  Cell,
} from "recharts";
import { shipmentStatistic } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function ShipmentStatisticChart() {
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="card-title">Shipment Statistic</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-ink-900">
              {shipmentStatistic.total}
            </span>
            <Badge variant="success">{shipmentStatistic.change}</Badge>
          </div>
        </div>
        <select className="rounded-lg border border-line bg-white px-2.5 py-1.5 text-xs text-ink-500 outline-none">
          <option>Last Year</option>
          <option>Last 6 Months</option>
        </select>
      </div>

      <div className="relative mt-4 h-[180px]">
        <div className="pointer-events-none absolute -top-1 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-ink-900 px-3 py-1.5 text-center shadow-popover">
          <p className="text-[10px] leading-none text-ink-300">
            {shipmentStatistic.peakLabel}
          </p>
          <p className="mt-1 text-xs font-semibold leading-none text-white">
            {shipmentStatistic.peakValue}
          </p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={shipmentStatistic.data}
            margin={{ top: 28, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="28%"
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8B8D97", fontSize: 11 }}
            />
            <Tooltip cursor={{ fill: "rgba(124,92,252,0.06)" }} />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} maxBarSize={22}>
              {shipmentStatistic.data.map((d, i) => (
                <Cell
                  key={i}
                  fill={d.highlight ? "#14132B" : "#E9E3FF"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
