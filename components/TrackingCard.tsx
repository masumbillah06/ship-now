import { Search, Plus, Minus, Navigation2, Truck } from "lucide-react";
import { tracking } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function TrackingCard() {
  // Position (0-100) along the route where the "current location" marker sits on the map
  const mapMarkerPosition = 55;

  return (
    <div className="card space-y-3">
      {/* Map area */}
      <div className="relative h-56 overflow-hidden rounded-2xl bg-canvas">
        {/* Search bar */}
        <div className="absolute left-4 right-16 top-4">
          <div className="relative">
            <Search
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300"
            />
            <input
              placeholder="Search by Shipping ID…"
              className="w-full rounded-full border-0 bg-white py-2.5 pl-9 pr-3 text-xs text-ink-700 placeholder:text-ink-300 shadow-popover outline-none"
            />
          </div>
        </div>

        {/* Zoom controls */}
        <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-xl bg-white shadow-popover">
          <button className="flex h-8 w-8 items-center justify-center text-ink-500 hover:text-ink-900">
            <Plus size={14} />
          </button>
          <div className="h-px w-full bg-line" />
          <button className="flex h-8 w-8 items-center justify-center text-ink-500 hover:text-ink-900">
            <Minus size={14} />
          </button>
        </div>

        {/* Route line */}
        <svg
          viewBox="0 0 532 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <line
            x1="28"
            y1="212"
            x2="272"
            y2="160"
            stroke="#1F2430"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="272"
            y1="160"
            x2="518"
            y2="114"
            stroke="var(--color-primary-500)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Current position marker */}
        <div
          className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500 shadow-[0_0_0_10px_rgba(124,92,255,0.15)]"
          style={{ left: `${mapMarkerPosition}%`, top: "67%" }}
        >
          <Navigation2 size={16} className="rotate-45 text-white" fill="white" />
        </div>
      </div>

      {/* Shipment details card */}
      <div className="rounded-2xl bg-white p-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm font-semibold text-ink-900">
              {tracking.shipmentId}
            </span>
            <div className="mt-1.5 flex items-center gap-1.5 text-xs">
              <Badge variant="primary">{tracking.status}</Badge>
              <span className="text-success">{tracking.statusNote}</span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-muted">Courier:</p>
            <p className="text-xs font-semibold text-ink-900">{tracking.courier}</p>
            <p className="text-[11px] text-muted">{tracking.carrier}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mt-6 h-6">
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-line" />
          <div
            className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary-500"
            style={{ width: `${tracking.progress}%` }}
          />
          <div className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500" />
          <div
            className="absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500 shadow-popover"
            style={{ left: `${tracking.progress}%`, transform: "translate(-50%, -50%)" }}
          >
            <Truck size={13} className="text-white" />
          </div>
          <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-ink-200 bg-white" />
        </div>

        <div className="flex items-start justify-between text-xs">
          <div>
            <p className="font-medium text-ink-900">{tracking.origin.city}</p>
            <p className="mt-0.5 text-muted">{tracking.origin.date}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-ink-900">{tracking.destination.city}</p>
            <p className="mt-0.5 text-muted">{tracking.destination.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}