import { DashboardShell } from "@/components/DashboardShell";
import { StatCard } from "@/components/StatCard";
import { ShipmentStatisticChart } from "@/components/charts/ShipmentStatisticChart";
import { ProfitSummaryChart } from "@/components/charts/ProfitSummaryChart";
import { ShipmentTypeChart } from "@/components/charts/ShipmentTypeChart";
import { ProductCategories } from "@/components/ProductCategories";
import { TrackingCard } from "@/components/TrackingCard";
import { ShipmentAlerts } from "@/components/ShipmentAlerts";
import { RecentShipments } from "@/components/RecentShipments";
import { RecentActivity } from "@/components/RecentActivity";
import { stats } from "@/lib/data";

export default function Home() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Top stat row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <StatCard key={s.id} {...s} />
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ShipmentStatisticChart />
          <ProfitSummaryChart />
          <ShipmentTypeChart />
        </div>

        {/* Categories / Tracking / Alerts row */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ProductCategories />
          <TrackingCard />
          <ShipmentAlerts />
        </div>

        {/* Table + Activity row */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentShipments />
          </div>
          <RecentActivity />
        </div>
      </div>
    </DashboardShell>
  );
}
