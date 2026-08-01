import {
  RadioOption,
  SelectField,
  TextField,
  DateField,
  TextareaField,
} from "./form-controls";

const FREIGHT_TYPES = [
  { value: "road", label: "Road Freight" },
  { value: "rail", label: "Rail Freight" },
  { value: "ocean", label: "Ocean Freight" },
  { value: "air", label: "Air Freight" },
];

export function ShippingDetailsSection({
  freightType,
  onFreightTypeChange,
  shippingMethod,
  shippingMethodError,
}: {
  freightType: string;
  onFreightTypeChange: (v: string) => void;
  shippingMethod: string;
  shippingMethodError?: string;
}) {
  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold text-ink-900">
        Shipping Details
      </h2>

      <div className="space-y-4">
        <div>
          <p className="mb-2 text-xs font-medium text-muted">Freight Type</p>
          <div className="grid grid-cols-2 gap-y-2.5 sm:flex sm:flex-wrap sm:gap-x-6">
            {FREIGHT_TYPES.map((type) => (
              <RadioOption
                key={type.value}
                label={type.label}
                selected={freightType === type.value}
                onSelect={() => onFreightTypeChange(type.value)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SelectField label="Carrier" defaultValue="FedEx" options={["FedEx", "UPS", "DHL", "USPS"]} />
          <SelectField
            label="Shipping Method"
            placeholder="Select Method"
            defaultValue={shippingMethod || undefined}
            options={["Standard", "Express", "Overnight"]}
            error={shippingMethodError}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <TextField
            label="Shipment ID"
            defaultValue="#SH9583742"
            disabled
            helper="Auto-generated"
          />
          <DateField label="Shipment Date" defaultValue="March 21, 2035" />
        </div>

        <TextareaField
          label="Notes"
          placeholder="Add special delivery notes (optional)"
        />
      </div>
    </section>
  );
}
