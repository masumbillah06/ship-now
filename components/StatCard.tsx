import { ArrowUp, ArrowDown, Package, Gauge, DollarSign, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/** Fallback icon chosen from the label when no explicit icon is supplied,
 *  so existing data sources don't need to change shape to pick up the
 *  icon badge shown in the design. */
function defaultIconFor(label: string) {
  const l = label.toLowerCase();
  if (l.includes("shipment")) return Package;
  if (l.includes("delivery") || l.includes("performance")) return Gauge;
  if (l.includes("revenue")) return DollarSign;
  return TrendingUp;
}

export function StatCard({
  label,
  value,
  unit,
  change,
  changeLabel,
  trend,
  icon,
}: {
  label: string;
  value: string;
  unit?: string;
  change: string;
  changeLabel: string;
  trend: "up" | "down";
  /** Optional icon override; falls back to a sensible icon based on the label. */
  icon?: React.ElementType;
}) {
  const Icon = icon ?? defaultIconFor(label);

  return (
    <div className="card">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-muted">{label}</p>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500">
          <Icon size={18} strokeWidth={2} className="text-white" />
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-2xl font-bold text-ink-900">{value}</span>
        {unit && <span className="text-sm text-muted">{unit}</span>}
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <Badge variant={trend === "up" ? "success" : "danger"}>
          {trend === "up" ? (
            <ArrowUp size={12} strokeWidth={2.5} />
          ) : (
            <ArrowDown size={12} strokeWidth={2.5} />
          )}
          {change}
        </Badge>
        <span className="text-xs text-muted">{changeLabel}</span>
      </div>
    </div>
  );
}
