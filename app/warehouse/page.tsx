import { DashboardShell } from "@/components/DashboardShell";
import { FreightTabs } from "@/components/warehouse/FreightTabs";
import { WarehouseStatCards } from "@/components/warehouse/WarehouseStatCards";
import { WarehouseInventoryChart } from "@/components/warehouse/WarehouseInventoryChart";
import { CapacityUsageCard } from "@/components/warehouse/CapacityUsageCard";
import { PackageStatusCard } from "@/components/warehouse/PackageStatusCard";
import { WarehouseStorageTable } from "@/components/warehouse/WarehouseStorageTable";
import { WarehouseMapCard } from "@/components/warehouse/WarehouseMapCard";
import { WarehouseActivityLogCard } from "@/components/warehouse/WarehouseActivityLogCard";

export default function WarehousePage() {
  return (
    <DashboardShell
      header={
        <div>
          <p className="text-xs leading-4 text-muted">Dashboard / Warehouse</p>
          <p className="text-2xl font-bold leading-7 text-ink-900">
            Warehouse
          </p>
        </div>
      }
      actions={<FreightTabs />}
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Main column */}
        <div className="flex flex-col gap-4 lg:w-[70%]">
          <div className="flex flex-col gap-4 sm:flex-row">
            <WarehouseStatCards />
            <div className="sm:flex-1">
              <WarehouseInventoryChart />
            </div>
          </div>
          <WarehouseStorageTable />
          <WarehouseMapCard />
        </div>

        {/* Side column */}
        <div className="flex flex-col gap-4 lg:w-[30%]">
          <CapacityUsageCard />
          <PackageStatusCard />
          <WarehouseActivityLogCard />
        </div>
      </div>
    </DashboardShell>
  );
}