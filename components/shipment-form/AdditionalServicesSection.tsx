import { Checkbox, Toggle } from "./form-controls";

export type AdditionalServices = {
  insurance: boolean;
  signature: boolean;
  temperature: boolean;
  fragile: boolean;
};

export function AdditionalServicesSection({
  services,
  onServicesChange,
  notify,
  onNotifyChange,
}: {
  services: AdditionalServices;
  onServicesChange: (services: AdditionalServices) => void;
  notify: boolean;
  onNotifyChange: (v: boolean) => void;
}) {
  const toggleService = (key: keyof AdditionalServices) =>
    onServicesChange({ ...services, [key]: !services[key] });

  return (
    <>
      <section>
        <h2 className="mb-4 text-sm font-semibold text-ink-900">
          Additional Services
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          <Checkbox
            label="Insurance Coverage"
            checked={services.insurance}
            onChange={() => toggleService("insurance")}
          />
          <Checkbox
            label="Signature on Delivery"
            checked={services.signature}
            onChange={() => toggleService("signature")}
          />
          <Checkbox
            label="Temperature Control"
            checked={services.temperature}
            onChange={() => toggleService("temperature")}
          />
          <Checkbox
            label="Fragile Item Handling"
            checked={services.fragile}
            onChange={() => toggleService("fragile")}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold text-ink-900">
          Tracking &amp; Status Updates
        </h2>
        <label className="flex items-center gap-2.5 text-sm text-ink-700">
          <Toggle checked={notify} onChange={onNotifyChange} />
          Notify Recipient via Email/SMS
        </label>
      </section>
    </>
  );
}
