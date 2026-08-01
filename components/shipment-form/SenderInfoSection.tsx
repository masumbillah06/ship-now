import { TextField, PhoneField } from "./form-controls";

export function SenderInfoSection() {
  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold text-ink-900">Sender Info</h2>

      <div className="space-y-4">
        <TextField label="Company" defaultValue="GreenHaven" />

        <div className="grid grid-cols-2 gap-3">
          <TextField
            label="Email"
            defaultValue="logistics@greenhaven.com"
          />
          <PhoneField label="Phone Number" defaultValue="408-555-7210" />
        </div>

        <TextField
          label="Pickup Address"
          defaultValue="1120 Birch Street, Portland, OR 97205, USA"
        />
      </div>
    </section>
  );
}
