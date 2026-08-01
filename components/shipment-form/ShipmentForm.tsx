"use client";

import { useState } from "react";
import { toast } from "sonner";
import { SenderInfoSection } from "./SenderInfoSection";
import { RecipientInfoSection } from "./RecipientInfoSection";
import { PackageDetailsSection } from "./PackageDetailsSection";
import { ShippingDetailsSection } from "./ShippingDetailsSection";
import {
  AdditionalServicesSection,
  type AdditionalServices,
} from "./AdditionalServicesSection";
import { FormActions } from "./FormActions";

export function ShipmentForm() {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [freightType, setFreightType] = useState("road");
  const [shippingMethod] = useState("");
  const [services, setServices] = useState<AdditionalServices>({
    insurance: true,
    signature: true,
    temperature: true,
    fragile: false,
  });
  const [notify, setNotify] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const deliveryAddressError =
    submitted && !deliveryAddress ? "Address is required." : undefined;
  const shippingMethodError =
    submitted && !shippingMethod ? "Shipping method is required." : undefined;

  const handleSubmit = () => {
    setSubmitted(true);
    if (!deliveryAddress || !shippingMethod) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Shipment submitted.");
  };

  const handleDelete = () => {
    toast("Form cleared.");
    setDeliveryAddress("");
    setFreightType("road");
    setServices({
      insurance: false,
      signature: false,
      temperature: false,
      fragile: false,
    });
    setNotify(false);
    setSubmitted(false);
  };

  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-6 lg:p-7">
      <h1 className="mb-6 text-base font-bold text-ink-900">Shipment Form</h1>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        <SenderInfoSection />
        <RecipientInfoSection
          deliveryAddress={deliveryAddress}
          onDeliveryAddressChange={setDeliveryAddress}
          deliveryAddressError={deliveryAddressError}
        />

        <PackageDetailsSection />
        <ShippingDetailsSection
          freightType={freightType}
          onFreightTypeChange={setFreightType}
          shippingMethod={shippingMethod}
          shippingMethodError={shippingMethodError}
        />

        <AdditionalServicesSection
          services={services}
          onServicesChange={setServices}
          notify={notify}
          onNotifyChange={setNotify}
        />
      </div>

      <div className="mt-6">
        <FormActions onDelete={handleDelete} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
