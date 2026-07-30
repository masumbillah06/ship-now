import Link from "next/link";
import { DashboardShell } from "@/components/DashboardShell";
import { ShipmentsBoard } from "@/components/shipments/ShipmentsBoard";

export default function ShipmentsPage() {
  return (
    <DashboardShell
      addLabel="New Shipment"
      header={
        <>
          <p className="text-xs text-muted">
            <Link href="/" className="hover:text-ink-700">
              Dashboard
            </Link>{" "}
            / Shipments
          </p>
          <p className="text-2xl font-bold text-ink-900">Shipments</p>
        </>
      }
    >
      <ShipmentsBoard />
    </DashboardShell>
  );
}