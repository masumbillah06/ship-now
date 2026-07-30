"use client";

import { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Search } from "lucide-react";
import { recentShipments } from "@/lib/data";
import { Badge, type BadgeProps } from "@/components/ui/badge";

type Shipment = (typeof recentShipments)[number];

const statusVariant: Record<string, NonNullable<BadgeProps["variant"]>> = {
  "In Transit": "primary",
  "Out for Delivery": "warning",
  Delivered: "success",
  Processing: "neutral",
};

const columnHelper = createColumnHelper<Shipment>();

const columns = [
  columnHelper.accessor("id", {
    header: "Shipping ID",
    cell: (info) => (
      <span className="text-xs font-semibold text-ink-900">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("company", {
    header: "Company",
    cell: (info) => (
      <div>
        <p className="text-xs font-medium text-ink-900">{info.getValue()}</p>
        <p className="text-[11px] text-muted">{info.row.original.category}</p>
      </div>
    ),
  }),
  columnHelper.accessor("carrier", {
    header: "Carrier",
    cell: (info) => (
      <span className="text-xs text-ink-700">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("route", {
    header: "Route",
    cell: (info) => (
      <span className="text-xs text-ink-700">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("date", {
    header: "Shipping Date",
    cell: (info) => (
      <span className="text-xs text-ink-700">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <Badge variant={statusVariant[info.getValue()] ?? "neutral"}>
        {info.getValue()}
      </Badge>
    ),
  }),
];

export function RecentShipments() {
  const [globalFilter, setGlobalFilter] = useState("");
  const data = useMemo(() => recentShipments, []);

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="card">
      <div className="flex items-center justify-between gap-3">
        <p className="card-title">Recent Shipments</p>
        <div className="relative hidden sm:block">
          <Search
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-300"
          />
          <input
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search shipment"
            className="w-44 rounded-lg border border-line bg-canvas py-1.5 pl-8 pr-3 text-xs text-ink-700 placeholder:text-ink-300 outline-none"
          />
        </div>
      </div>

      <div className="scrollbar-thin mt-4 overflow-x-auto">
        <table className="w-full min-w-160 border-collapse text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="text-xs text-muted">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="whitespace-nowrap pb-3 pr-4 font-medium first:pl-0"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t border-line">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="whitespace-nowrap py-3 pr-4 first:pl-0"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
            {table.getRowModel().rows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-6 text-center text-xs text-muted"
                >
                  No shipments match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
