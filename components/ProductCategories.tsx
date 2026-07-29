import { productCategories } from "@/lib/data";

export function ProductCategories() {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <p className="card-title">Product Categories</p>
        <span className="text-xs text-muted">
          Total Products{" "}
          <span className="font-semibold text-ink-900">
            {productCategories.total}
          </span>
        </span>
      </div>

      <div className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full">
        {productCategories.data.map((d) => (
          <div
            key={d.name}
            style={{ width: `${d.percent}%`, backgroundColor: d.color }}
          />
        ))}
      </div>

      <ul className="mt-4 space-y-3">
        {productCategories.data.map((d) => (
          <li key={d.name} className="flex items-center gap-2.5 text-sm">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <span className="flex-1 truncate text-ink-700">{d.name}</span>
            <span className="text-xs text-muted">{d.value} products</span>
            <span className="w-9 text-right text-xs font-semibold text-ink-900">
              {d.percent}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
