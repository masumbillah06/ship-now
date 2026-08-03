"use client";

import { MoreHorizontal } from "lucide-react";
import { capacityUsage } from "@/lib/warehouse-data";

export function CapacityUsageCard() {
  const radius = 72;
  const strokeWidth = 22;

  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - capacityUsage.totalUsage / 100);

  return (
    <div className="card bg-ink-900 border-ink-900">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">
          Capacity Usage
        </h3>

        <button
          type="button"
          className="text-ink-300 hover:text-white cursor-pointer"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="relative h-[150px] w-[150px] overflow-visible">
          <svg
            viewBox="0 0 180 180"
            className="absolute -top-[15px] -left-[15px] h-[180px] w-[180px] -rotate-90"
          >
            <defs>
              <linearGradient
                id="capacityGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#B49DFE" />
                <stop offset="100%" stopColor="#6640F5" />
              </linearGradient>
            </defs>

            {/* Background Ring */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="#302E4C"
              strokeWidth={strokeWidth}
            />

            {/* Progress Ring */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="url(#capacityGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <p className="text-[11px] text-ink-300">Total Usage</p>
            <p className="text-2xl font-bold text-white">
              {capacityUsage.totalUsage}%
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-ink-700 pt-4">
        <div>
          <p className="text-[11px] text-ink-300">
            {capacityUsage.loadedLabel}
          </p>
          <p className="text-sm font-semibold text-white">
            {capacityUsage.loadedValue}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[11px] text-ink-300">
            {capacityUsage.emptyLabel}
          </p>
          <p className="text-sm font-semibold text-white">
            {capacityUsage.emptyValue}
          </p>
        </div>
      </div>
    </div>
  );
}