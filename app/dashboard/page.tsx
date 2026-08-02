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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Main column (2/3) */}
        <div className="space-y-4 lg:col-span-2">
          {/* Stat cards row - confined to main column only */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <StatCard key={s.id} {...s} />
            ))}
          </div>

          {/* Shipment Statistic + Profit Summary */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ShipmentStatisticChart />
            <ProfitSummaryChart />
          </div>

          {/* Product Categories + Tracking */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProductCategories />
            <TrackingCard />
          </div>

          {/* Recent Shipments - full width of main column */}
          <RecentShipments />
        </div>

        {/* Sidebar column (1/3) - spans full height of main column */}
        <div className="space-y-4">
          <ShipmentTypeChart />
          <ShipmentAlerts />
          <RecentActivity />
        </div>
      </div>
    </DashboardShell>
  );
}