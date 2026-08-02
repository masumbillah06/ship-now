"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import type { RectangleProps } from "recharts";
import { shipmentStatistic } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const Y_AXIS_WIDTH = 34;

// Custom bar with ONLY a top border
const CustomBar = (props: RectangleProps) => {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fill,
  } = props;

  return (
    <g>
      {/* Main Bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
      />

      {/* Top Border */}
      <line
        x1={x}
        y1={y}
        x2={x + width}
        y2={y}
        stroke="#0F172A"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
  );
};

export function ShipmentStatisticChart() {
  const { data } = shipmentStatistic;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="card-title">Shipment Statistic</p>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-ink-900">
              {shipmentStatistic.total}
            </span>

            <Badge variant="success">
              {shipmentStatistic.change}
            </Badge>
          </div>
        </div>

        <select className="rounded-lg border border-line bg-white px-2.5 py-1.5 text-xs text-ink-500 outline-none">
          <option>Last Year</option>
          <option>Last 6 Months</option>
        </select>
      </div>

      <div className="relative mt-4 h-47.5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="-20%"
            barGap={-2}
          >
            <YAxis
              width={Y_AXIS_WIDTH}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8B8D97", fontSize: 10 }}
              tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}K`}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8B8D97", fontSize: 11 }}
            />

            <Tooltip
              cursor={{ fill: "rgba(15,23,42,0.06)" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            />

            <Bar
              dataKey="value"
              shape={<CustomBar />}
              barSize={48}
              onMouseMove={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((_, i) => (
                <Cell
                  key={i}
                  fill={activeIndex === i ? "#A78BFA" : "#E9E3FF"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}