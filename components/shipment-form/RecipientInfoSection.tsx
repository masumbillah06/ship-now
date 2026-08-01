import { TextField, PhoneField } from "./form-controls";

export function RecipientInfoSection({
  deliveryAddress,
  onDeliveryAddressChange,
  deliveryAddressError,
}: {
  deliveryAddress: string;
  onDeliveryAddressChange: (value: string) => void;
  deliveryAddressError?: string;
}) {
  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold text-ink-900">
        Recipient Info
      </h2>

      <div className="space-y-4">
        <TextField label="Company" defaultValue="FreshNest" />

        <div className="grid grid-cols-2 gap-3">
          <TextField label="Email" defaultValue="warehouse@freshnest.com" />
          <PhoneField label="Phone Number" defaultValue="786-555-4432" />
        </div>

        <TextField
          label="Delivery Address"
          placeholder="Street address, city, state/province, ZIP code"
          value={deliveryAddress}
          onChange={onDeliveryAddressChange}
          error={deliveryAddressError}
        />
      </div>
    </section>
  );
}
