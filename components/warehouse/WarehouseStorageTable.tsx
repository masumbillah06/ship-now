import { SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { warehouseStorage } from "@/lib/warehouse-data";

export function WarehouseStorageTable() {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="card-title">Warehouse Storage</h3>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-8 items-center gap-1.5 rounded-lg border border-line px-2.5 text-xs font-medium text-ink-500 hover:bg-ink-50 cursor-pointer"
          >
            <SlidersHorizontal size={13} />
            Filter
          </button>

          <button
            type="button"
            className="flex h-8 items-center gap-1.5 rounded-lg border border-line px-2.5 text-xs font-medium text-ink-500 hover:bg-ink-50 cursor-pointer"
          >
            <ArrowUpDown size={13} />
            Sort by: <span className="text-ink-700">Section</span>
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="text-xs text-muted">
              <th className="pb-2 pr-2 font-medium">Floor</th>
              <th className="pb-2 pr-2 font-medium">Section</th>
              <th className="pb-2 pr-2 font-medium">Category</th>

              {/* Wider Storage Used column */}
              <th className="pb-2 pr-2 font-medium min-w-[240px]">
                Storage Used
              </th>

              <th className="pb-2 pr-2 font-medium text-center">
                Percentage
              </th>

              <th className="pb-2 pl-2 font-medium text-right">
                Available Space
              </th>
            </tr>
          </thead>

          <tbody>
            {warehouseStorage.map((row) => (
              <tr
                key={row.section}
                className="border-t border-line hover:bg-ink-50/40 transition-colors"
              >
                <td className="py-3 pr-2 text-sm text-ink-700">
                  {row.floor}
                </td>

                <td className="py-3 pr-2 text-sm font-medium text-ink-700">
                  {row.section}
                </td>

                <td className="py-3 pr-2 text-sm text-ink-700">
                  {row.category}
                </td>

                {/* Longer & Thicker Progress Bar */}
                <td className="py-3 pr-2">
                  <div className="h-4 w-56 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="h-full rounded-full bg-primary-500 transition-all duration-300"
                      style={{ width: `${row.storageUsedPercent}%` }}
                    />
                  </div>
                </td>

                {/* Percentage */}
                <td className="py-3 pr-2 text-center">
                  <span className="inline-flex min-w-[56px] justify-center rounded-md bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-600">
                    {row.storageUsedPercent}%
                  </span>
                </td>

                {/* Available Space */}
                <td className="py-3 pl-2 text-right text-sm font-medium text-ink-700">
                  {row.availableSpace}/{row.totalSpace}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}