import { Search, MapPin } from "lucide-react";
import { tracking } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function TrackingCard() {
  return (
    <div className="card">
      <div className="relative">
        <Search
          size={15}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-300"
        />
        <input
          placeholder="Search by Shipping ID…"
          className="w-full rounded-lg border border-line bg-canvas py-2 pl-9 pr-3 text-xs text-ink-700 placeholder:text-ink-300 outline-none"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-900">
          {tracking.shipmentId}
        </span>
        <div className="flex items-center gap-1.5 text-xs">
          <Badge variant="primary">{tracking.status}</Badge>
          <span className="text-success">{tracking.statusNote}</span>
        </div>
      </div>

      {/* Route */}
      <div className="relative mt-6 h-14">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-line" />
        <div
          className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-primary-500"
          style={{ width: `${tracking.progress}%` }}
        />
        <div className="absolute left-0 top-1/2 flex h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary-500 bg-white" />
        <div
          className="absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500 shadow-popover"
          style={{ left: `${tracking.progress}%`, transform: "translate(-50%, -50%)" }}
        >
          <MapPin size={14} className="text-white" />
        </div>
        <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-ink-200 bg-white" />
      </div>

      <div className="flex items-start justify-between text-xs">
        <div>
          <p className="font-medium text-ink-900">{tracking.origin.city}</p>
          <p className="mt-0.5 text-muted">{tracking.origin.date}</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-ink-900">
            {tracking.destination.city}
          </p>
          <p className="mt-0.5 text-muted">{tracking.destination.date}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2.5 border-t border-line pt-4">
        <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-primary-300 to-primary-600" />
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-ink-900">
            {tracking.courier}
          </p>
          <p className="truncate text-[11px] text-muted">
            Courier · {tracking.carrier}
          </p>
        </div>
      </div>
    </div>
  );
}
