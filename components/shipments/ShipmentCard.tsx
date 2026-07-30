import { MapPin, Flag, Pencil, Trash2, LucideIcon } from "lucide-react";
import {
  Cpu,
  Shirt,
  UtensilsCrossed,
  Dumbbell,
  Car,
  Leaf,
  Apple,
  Package,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Shipment } from "@/lib/shipments-data";
import { statusBadgeVariant, categoryStyles } from "@/lib/shipments-data";

const categoryIcons: Record<string, LucideIcon> = {
  Cpu,
  Shirt,
  UtensilsCrossed,
  Dumbbell,
  Car,
  Leaf,
  Apple,
};

export function ShipmentCard({ shipment }: { shipment: Shipment }) {
  const style = categoryStyles[shipment.category] ?? {
    icon: "Package",
    bg: "bg-ink-100",
    text: "text-ink-600",
  };
  const CategoryIcon = categoryIcons[style.icon] ?? Package;

  return (
    <div className="card flex flex-col">
      {/* Top row: id + status, actions */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-ink-900">{shipment.id}</p>
          <div className="mt-1.5">
            <Badge variant={statusBadgeVariant[shipment.status]}>
              {shipment.status}
            </Badge>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            aria-label="Edit shipment"
            className="rounded-lg p-1.5 text-ink-300 hover:bg-ink-50 hover:text-ink-600"
          >
            <Pencil size={14} />
          </button>
          <button
            aria-label="Delete shipment"
            className="rounded-lg p-1.5 text-ink-300 hover:bg-danger/10 hover:text-danger"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* Company + category */}
      <div className="mt-4 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${style.bg}`}
        >
          <CategoryIcon size={17} className={style.text} strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink-900">
            {shipment.company}
          </p>
          <p className="truncate text-xs text-muted">{shipment.category}</p>
        </div>
      </div>

      {/* Origin / Destination */}
      <div className="mt-4 space-y-3">
        <div className="flex items-start gap-2.5">
          <MapPin size={14} className="mt-0.5 shrink-0 text-primary-500" />
          <div className="min-w-0">
            <p className="text-[11px] text-muted">Origin</p>
            <p className="truncate text-xs font-medium text-ink-900">
              {shipment.origin.city}
            </p>
            <p className="text-[11px] text-muted">{shipment.origin.date}</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Flag size={14} className="mt-0.5 shrink-0 text-ink-400" />
          <div className="min-w-0">
            <p className="text-[11px] text-muted">Destination</p>
            <p className="truncate text-xs font-medium text-ink-900">
              {shipment.destination.city}
            </p>
            <p className="text-[11px] text-muted">
              {shipment.destination.date}
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-primary-500"
            style={{ width: `${shipment.progress}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px]">
          <span className="text-muted">
            Progress{" "}
            <span className="font-semibold text-ink-900">
              {shipment.progress}%
            </span>
          </span>
          <span className="text-muted">
            Carrier{" "}
            <span className="font-semibold text-ink-900">
              {shipment.carrier}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
