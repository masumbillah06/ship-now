import { TextField, SelectField, DimensionField } from "./form-controls";

export function PackageDetailsSection() {
  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold text-ink-900">
        Package Details
      </h2>

      <div className="space-y-4">
        <TextField label="Item Description" defaultValue="Premium Garden Tool Set" />

        <div className="grid grid-cols-2 gap-3">
          <TextField label="Quantity" defaultValue="40" />
          <TextField label="Value" defaultValue="$3,200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <TextField label="Weight" defaultValue="125" />
          <SelectField label="Units" defaultValue="Kg" options={["Kg", "Lb", "g"]} />
        </div>

        <div>
          <p className="mb-1.5 text-xs font-medium text-muted">Dimensions</p>
          <div className="grid grid-cols-3 gap-3">
            <DimensionField defaultValue="80" unit="cm" label="Length" />
            <DimensionField defaultValue="60" unit="cm" label="Width" />
            <DimensionField placeholder="ex. 20" unit="cm" label="Height" />
          </div>
        </div>
      </div>
    </section>
  );
}
