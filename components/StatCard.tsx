import { ArrowUp, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function StatCard({
  label,
  value,
  unit,
  change,
  changeLabel,
  trend,
}: {
  label: string;
  value: string;
  unit?: string;
  change: string;
  changeLabel: string;
  trend: "up" | "down";
}) {
  return (
    <div className="card">
      <p className="text-sm text-muted">{label}</p>
      <div className="mt-2 flex items-baseline gap-1.5">
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
