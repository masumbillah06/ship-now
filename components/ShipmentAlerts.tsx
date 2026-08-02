import {
  MoreHorizontal,
  FileX,
  MapPin,
  CloudLightning,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";
import { shipmentAlerts } from "@/lib/data";

/** Icon per alert reason, matching the design's per-type iconography.
 *  Falls back to a generic warning icon for reasons not explicitly mapped. */
function iconForReason(reason: string) {
  const r = reason.toLowerCase();
  if (r.includes("customs")) return FileX;
  if (r.includes("address")) return MapPin;
  if (r.includes("weather")) return CloudLightning;
  return AlertTriangle;
}

export function ShipmentAlerts() {
  return (
    <div className="card py-5">
      <div className="flex items-center justify-between">
        <p className="card-title">Shipment Alerts</p>
        <button
          type="button"
          aria-label="More options"
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 text-ink-400 hover:bg-ink-100"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-2xl font-bold text-ink-900">
          {shipmentAlerts.total}
        </span>
        <span className="text-sm text-muted">{shipmentAlerts.totalLabel}</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {shipmentAlerts.summary.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-violet-200 px-2.5 py-3 text-center"
          >
            <p className="text-xl font-bold text-ink-900">{s.count}</p>
            <p className="mt-1 text-[10px] leading-tight text-ink-700">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-5 space-y-5">
        {shipmentAlerts.items.map((item) => {
          const Icon = iconForReason(item.reason);
          return (
            <li key={item.id} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-50">
                <Icon size={15} className="text-ink-700" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-ink-900">
                  {item.reason}
                </p>
                <p className="text-[11px] text-muted">
                  <span className="text-primary-600">#{item.id}</span> ·{" "}
                  {item.meta}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="mt-1 shrink-0 text-ink-300"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
