"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { profitSummary } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function ProfitSummaryChart() {
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="card-title">Profit Summary</p>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-ink-900">
              {profitSummary.total}
            </span>
            <Badge variant="success">{profitSummary.change}</Badge>
          </div>
        </div>

        <select className="rounded-lg border border-line bg-white px-2.5 py-1.5 text-xs text-ink-500 outline-none">
          <option>Last 8 Months</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className="mt-2 flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#7C5CFC]" />
          <span className="text-xs text-muted">Revenue</span>
          <span className="text-xs font-semibold text-ink-900">
            {profitSummary.revenueTotal}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#E3DDFF]" />
          <span className="text-xs text-muted">Cost</span>
          <span className="text-xs font-semibold text-ink-900">
            {profitSummary.costTotal}
          </span>
        </div>
      </div>

      <div className="mt-3 h-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={profitSummary.data}
            margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="0%"
            barGap={0}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#EEEEF2"
            />

            <YAxis
              width={38}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8B8D97", fontSize: 10 }}
              tickFormatter={(v: number) =>
                v === 0 ? "$0" : `$${v / 1000}K`
              }
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{
                fill: "#8B8D97",
                fontSize: 11,
              }}
            />

            <Tooltip
              cursor={{ fill: "rgba(124,92,252,0.06)" }}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            />

            <Bar
              dataKey="revenue"
              fill="#7C5CFC"
              radius={6}
              barSize={26}
              activeBar={{
                fill: "#5B21B6",
                radius: 6,
              }}
            />

            <Bar
              dataKey="cost"
              fill="#E3DDFF"
              radius={6}
              barSize={26}
              activeBar={{
                fill: "#334155",
                radius: 6,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}