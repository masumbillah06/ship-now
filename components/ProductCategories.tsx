import { MoreHorizontal } from "lucide-react";
import { productCategories } from "@/lib/data";

export function ProductCategories() {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <p className="card-title">Product Categories</p>

        <button
          type="button"
          aria-label="More options"
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-50 text-ink-400 hover:bg-ink-100"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-muted">Total Products</span>
        <span className="text-2xl font-bold text-ink-900">
          {productCategories.total}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 flex h-15 w-full overflow-hidden rounded-lg bg-[#F3F4F6]">
        {productCategories.data.map((d) => (
          <div
            key={d.name}
            style={{
              width: `${d.percent}%`,
              backgroundColor: d.color,
            }}
          />
        ))}
      </div>

      <ul className="mt-5 space-y-3">
        {productCategories.data.map((d) => (
          <li key={d.name} className="flex items-center gap-2.5 text-md">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: d.color }}
            />

            <span className="flex-1 truncate text-ink-700">{d.name}</span>

            <div className="flex items-center gap-2 bg-slate-100 px-2.5 py-1.5 rounded-lg">
              <span className="text-xs text-muted ">
              {d.value} products
              </span>

              <span className="w-9 text-right text-xs font-semibold text-ink-900">
                {d.percent}%
              </span>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}