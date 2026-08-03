import { MoreHorizontal } from "lucide-react";
import { warehouseActivityLog } from "@/lib/warehouse-data";

export function WarehouseActivityLogCard() {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="card-title">Warehouse Activity Log</h3>
        <button
          type="button"
          className="text-ink-300 hover:text-ink-600 cursor-pointer"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-4">
        {warehouseActivityLog.map((log) => (
          <div key={log.id} className="flex gap-3">
            <span
              className="mt-0.5 h-8 w-8 shrink-0 rounded-full"
              style={{ backgroundColor: log.color }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-5 text-ink-700">
                <span className="font-semibold text-ink-900">
                  {log.actor}
                </span>{" "}
                {log.action}
              </p>
              <p className="mt-0.5 text-xs text-muted">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
