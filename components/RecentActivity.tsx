import {
  MoreHorizontal,
  Copy,
  Tag,
  RotateCcw,
  CheckCircle2,
  MapPin,
  Activity as ActivityIcon,
} from "lucide-react";
import { recentActivity } from "@/lib/data";

/** Icon chosen from the activity's action text, matching the design's
 *  per-entry iconography (bulk request, tag, return, resolution, address). */
function iconForAction(action: string) {
  const a = action.toLowerCase();
  if (a.includes("bulk")) return Copy;
  if (a.includes("tag")) return Tag;
  if (a.includes("return")) return RotateCcw;
  if (a.includes("resolved")) return CheckCircle2;
  if (a.includes("address")) return MapPin;
  return ActivityIcon;
}

export function RecentActivity() {
  return (
    <div className="card py-5">
      <div className="flex items-center justify-between">
        <p className="card-title">Recent Activity</p>
        <button
          type="button"
          aria-label="More options"
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-50 text-ink-400 hover:bg-ink-100"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      <ul className="mt-5 space-y-5">
        {recentActivity.map((a, i) => {
          const Icon = iconForAction(a.action);
          return (
            <li key={a.id} className="flex gap-3">
              <span
                className={
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full " +
                  (i % 2 === 0
                    ? "bg-primary-100 text-primary-600"
                    : "bg-ink-100 text-ink-500")
                }
              >
                <Icon size={14} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs leading-relaxed text-ink-700">
                  {a.role ? (
                    <span className="font-semibold text-ink-900">
                      {a.role}{" "}
                    </span>
                  ) : (
                    <span className="font-semibold text-ink-900">User </span>
                  )}
                  <span className="font-semibold text-primary-600">
                    {a.user}
                  </span>{" "}
                  {a.action}
                </p>
                <p className="mt-1 text-[11px] text-muted">{a.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
