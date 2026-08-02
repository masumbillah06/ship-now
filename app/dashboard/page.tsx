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
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Main column - wider than sidebar */}
        <div className="flex flex-col gap-4 lg:w-[76%]">
          {/* Stat cards row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <StatCard key={s.id} {...s} />
            ))}
          </div>

          {/* Shipment Statistic (narrower) + Profit Summary (wider) */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="sm:w-[42%]">
              <ShipmentStatisticChart />
            </div>
            <div className="sm:w-[58%]">
              <ProfitSummaryChart />
            </div>
          </div>

          {/* Product Categories (narrower) + Tracking (wider) */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="sm:w-[42%]">
              <ProductCategories />
            </div>
            <div className="sm:w-[58%]">
              <TrackingCard />
            </div>
          </div>

          {/* Recent Shipments - full width of main column */}
          <RecentShipments />
        </div>

        {/* Sidebar column - narrower, full height */}
        <div className="flex flex-col gap-4 lg:w-[24%]">
          <ShipmentTypeChart />
          <ShipmentAlerts />
          <RecentActivity />
        </div>
      </div>
    </DashboardShell>
  );
}