"use client";

import { Button } from "@/components/ui/button";

export function FormActions({
  onDelete,
  onSubmit,
}: {
  onDelete: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:justify-end">
      <Button type="button" variant="outline" className="hover: cursor-pointer" onClick={onDelete}>
        Delete Form
      </Button>
      <Button type="button" variant="default" className="hover:bg-slate-700 cursor-pointer" onClick={onSubmit}>
        Submit Shipment
      </Button>
    </div>
  );
}
