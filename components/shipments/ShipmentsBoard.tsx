"use client";

import { useMemo, useState } from "react";
import { ShipmentsToolbar } from "@/components/shipments/ShipmentsToolbar";
import { ShipmentCard } from "@/components/shipments/ShipmentCard";
import { ShipmentsPagination } from "@/components/shipments/ShipmentsPagination";
import {
  shipments,
  statusTabs,
  totalShipmentResults,
  totalShipmentPages,
} from "@/lib/shipments-data";

export function ShipmentsBoard() {
  const [activeTab, setActiveTab] =
    useState<(typeof statusTabs)[number]>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const filtered = useMemo(() => {
    let result = shipments;

    if (activeTab !== "All") {
      result = result.filter((s) => s.status === activeTab);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (s) =>
          s.id.toLowerCase().includes(q) ||
          s.company.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.carrier.toLowerCase().includes(q)
      );
    }

    if (sort === "progress") {
      result = [...result].sort((a, b) => b.progress - a.progress);
    } else if (sort === "oldest") {
      result = [...result].slice().reverse();
    }

    return result;
  }, [activeTab, search, sort]);

  const visible = filtered.slice(0, pageSize);

  return (
    <div className="space-y-5">
      <ShipmentsToolbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setPage(1);
        }}
        search={search}
        onSearchChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        sort={sort}
        onSortChange={setSort}
      />

      {visible.length === 0 ? (
        <div className="card text-center text-sm text-muted">
          No shipments match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((shipment) => (
            <ShipmentCard key={shipment.id} shipment={shipment} />
          ))}
        </div>
      )}

      <ShipmentsPagination
        page={page}
        totalPages={totalShipmentPages}
        pageSize={pageSize}
        totalResults={totalShipmentResults}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}
