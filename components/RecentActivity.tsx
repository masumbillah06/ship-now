import { recentActivity } from "@/lib/data";

export function RecentActivity() {
  return (
    <div className="card">
      <p className="card-title">Recent Activity</p>

      <ul className="mt-4 space-y-4">
        {recentActivity.map((a) => (
          <li key={a.id} className="flex gap-3">
            <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
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
        ))}
      </ul>
    </div>
  );
}
