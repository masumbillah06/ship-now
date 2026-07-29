import { AlertTriangle } from "lucide-react";
import { shipmentAlerts } from "@/lib/data";

export function ShipmentAlerts() {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <p className="card-title">Shipment Alerts</p>
        <span className="text-xs text-muted">
          {shipmentAlerts.total}{" "}
          <span className="text-ink-700">{shipmentAlerts.totalLabel}</span>
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {shipmentAlerts.summary.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-line px-2.5 py-2.5 text-center"
          >
            <p className="text-lg font-bold text-ink-900">{s.count}</p>
            <p className="mt-0.5 text-[10px] leading-tight text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-4 space-y-3">
        {shipmentAlerts.items.map((item) => (
          <li key={item.id} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warning/10">
              <AlertTriangle size={12} className="text-warning" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-ink-900">
                {item.reason}
              </p>
              <p className="text-[11px] text-muted">
                #{item.id} · {item.meta}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
