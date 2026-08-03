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
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="text-xs text-muted">
              <th className="pb-2 pr-2 font-medium">Floor</th>
              <th className="pb-2 pr-2 font-medium">Section</th>
              <th className="pb-2 pr-2 font-medium">Category</th>
              <th className="pb-2 pr-2 font-medium">Storage Used</th>
              <th className="pb-2 pl-2 font-medium text-right">
                Available Space
              </th>
            </tr>
          </thead>
          <tbody>
            {warehouseStorage.map((row) => (
              <tr key={row.section} className="border-t border-line">
                <td className="py-2.5 pr-2 text-sm text-ink-700">
                  {row.floor}
                </td>
                <td className="py-2.5 pr-2 text-sm text-ink-700">
                  {row.section}
                </td>
                <td className="py-2.5 pr-2 text-sm text-ink-700">
                  {row.category}
                </td>
                <td className="py-2.5 pr-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-ink-100">
                      <div
                        className="h-full rounded-full bg-primary-500"
                        style={{ width: `${row.storageUsedPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-ink-500">
                      {row.storageUsedPercent}%
                    </span>
                  </div>
                </td>
                <td className="py-2.5 pl-2 text-right text-sm font-medium text-ink-700">
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
