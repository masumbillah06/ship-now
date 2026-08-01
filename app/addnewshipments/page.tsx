"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ShipmentFormHeader } from "@/components/shipment-form/ShipmentFormHeader";
import { ShipmentForm } from "@/components/shipment-form/ShipmentForm";
import { Footer } from "@/components/Footer";

export default function AddNewShipmentPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-canvas">
      {/* Tablet sidebar — logo + icon rail */}
      <div className="hidden md:block lg:hidden">
        <Sidebar collapsed />
      </div>

      {/* Desktop sidebar — full sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar — off-canvas, toggled via the header trigger */}
      <div className="md:hidden">
        <Sidebar
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />
      </div>

      <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        <ShipmentFormHeader onOpenMobileMenu={() => setMobileOpen(true)} />

        <ShipmentForm />

        <Footer />
      </main>
    </div>
  );
}
