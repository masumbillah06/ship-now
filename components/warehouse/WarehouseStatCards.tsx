import { ArrowUp } from "lucide-react";
import { warehouseStats } from "@/lib/warehouse-data";

export function WarehouseStatCards() {
  return (
    <div className="flex flex-col gap-4 sm:w-[220px] sm:shrink-0">
      {warehouseStats.map((s) => (
        <div key={s.id} className="card">
          <p className="text-xs font-medium text-muted">{s.label}</p>
          <div className="mt-2 flex items-end justify-between">
            <p className="text-2xl font-bold leading-7 text-ink-900">
              {s.value}
              {s.unit && (
                <span className="ml-1 text-xs font-medium text-muted">
                  {s.unit}
                </span>
              )}
            </p>
            <span className="mb-0.5 flex items-center gap-0.5 text-xs font-semibold text-success">
              <ArrowUp size={12} strokeWidth={2.5} />
              {s.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}