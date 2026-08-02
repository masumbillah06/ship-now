"use client";

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
        stroke="#0F172A" // slate-900
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
  );
};

export function ShipmentStatisticChart() {
  const { data } = shipmentStatistic;

  const peakIndex = Math.max(
    0,
    data.findIndex((d) => d.highlight)
  );

  const peakPercent = ((peakIndex + 0.5) / data.length) * 100;

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
        {/* Peak Tooltip */}
        <div
          className="pointer-events-none absolute top-0 z-10 flex -translate-x-1/2 flex-col items-center"
          style={{
            left: `calc(${Y_AXIS_WIDTH}px + (100% - ${Y_AXIS_WIDTH}px) * ${
              peakPercent / 100
            })`,
          }}
        >
          <div className="rounded-lg bg-ink-900 px-3 py-1.5 text-center shadow-popover">
            <p className="text-[10px] leading-none text-ink-300">
              {shipmentStatistic.peakLabel}
            </p>

            <p className="mt-1 text-xs font-semibold leading-none text-white">
              {shipmentStatistic.peakValue}
            </p>
          </div>

          <div className="h-3 w-px bg-ink-900/30" />
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 40, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="-20%"
            barGap={-2}
          >
            <YAxis
              width={Y_AXIS_WIDTH}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8B8D97", fontSize: 10 }}
              tickFormatter={(v: number) =>
                `${(v / 1000).toFixed(1)}K`
              }
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
            >
              {data.map((d, i) => (
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