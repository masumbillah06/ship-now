"use client";

import { ChevronDown, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Shared field chrome                                                       */
/* -------------------------------------------------------------------------- */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-xs font-medium text-muted">
      {children}
    </label>
  );
}

function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1 text-[11px] text-red-500">{children}</p>;
}

function FieldHelper({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1 text-[11px] text-muted">{children}</p>;
}

const inputBase =
  "h-10 w-full rounded-lg border bg-white px-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-muted focus:ring-1 focus:ring-primary-300 disabled:bg-ink-50 disabled:text-muted";

/* -------------------------------------------------------------------------- */
/*  Text input                                                                */
/* -------------------------------------------------------------------------- */

export function TextField({
  label,
  placeholder,
  defaultValue,
  value,
  onChange,
  error,
  helper,
  disabled,
  className,
  suffix,
}: {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  helper?: string;
  disabled?: boolean;
  className?: string;
  suffix?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel>{label}</FieldLabel>
      <div className="relative">
        <input
          type="text"
          {...(onChange
            ? { value: value ?? "", onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value) }
            : { defaultValue })}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(inputBase, error && "border-red-300", suffix && "pr-10")}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">
            {suffix}
          </span>
        )}
      </div>
      <FieldError>{error}</FieldError>
      <FieldHelper>{helper}</FieldHelper>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Select                                                                    */
/* -------------------------------------------------------------------------- */

export function SelectField({
  label,
  placeholder,
  options,
  defaultValue,
  error,
  helper,
  className,
}: {
  label: string;
  placeholder?: string;
  options: string[];
  defaultValue?: string;
  error?: string;
  helper?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel>{label}</FieldLabel>
      <div className="relative">
        <select
          defaultValue={defaultValue ?? ""}
          className={cn(
            inputBase,
            "appearance-none pr-8",
            !defaultValue && "text-muted",
            error && "border-red-300"
          )}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-ink-900">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-300"
        />
      </div>
      <FieldError>{error}</FieldError>
      <FieldHelper>{helper}</FieldHelper>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Date field                                                                */
/* -------------------------------------------------------------------------- */

export function DateField({
  label,
  defaultValue,
  className,
}: {
  label: string;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel>{label}</FieldLabel>
      <div className="relative">
        <input
          type="text"
          readOnly
          defaultValue={defaultValue}
          className={cn(inputBase, "pr-9 cursor-pointer")}
        />
        <Calendar
          size={15}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-300"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Textarea                                                                  */
/* -------------------------------------------------------------------------- */

export function TextareaField({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel>{label}</FieldLabel>
      <textarea
        placeholder={placeholder}
        rows={3}
        className={cn(
          "w-full resize-none rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-muted focus:ring-1 focus:ring-primary-300"
        )}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Phone field — country code + number                                      */
/* -------------------------------------------------------------------------- */

export function PhoneField({
  label,
  countryCode = "+1",
  defaultValue,
  className,
}: {
  label: string;
  countryCode?: string;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel>{label}</FieldLabel>
      <div className="flex h-10 items-stretch overflow-hidden rounded-lg border border-line bg-white focus-within:ring-1 focus-within:ring-primary-300">
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 border-r border-line px-2.5 text-sm text-ink-900"
        >
          <span className="text-base leading-none">🇺🇸</span>
          {countryCode}
          <ChevronDown size={13} className="text-ink-300" />
        </button>
        <input
          type="tel"
          defaultValue={defaultValue}
          className="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink-900 outline-none"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Dimension field — value + unit label underneath                          */
/* -------------------------------------------------------------------------- */

export function DimensionField({
  placeholder,
  defaultValue,
  unit,
  label,
}: {
  placeholder?: string;
  defaultValue?: string;
  unit: string;
  label: string;
}) {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={cn(inputBase, "pr-9")}
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">
          {unit}
        </span>
      </div>
      <p className="mt-1 text-[11px] text-muted">{label}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Checkbox                                                                  */
/* -------------------------------------------------------------------------- */

export function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-700">
      <span
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
          checked
            ? "border-primary-500 bg-primary-500"
            : "border-line bg-white"
        )}
      >
        {checked && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path
              d="M1 4.3 4 7.3 10 1.3"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}

/* -------------------------------------------------------------------------- */
/*  Radio option                                                             */
/* -------------------------------------------------------------------------- */

export function RadioOption({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <label
      onClick={onSelect}
      className="flex cursor-pointer items-center gap-2 text-sm text-ink-700"
    >
      <span
        className={cn(
          "flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border",
          selected ? "border-primary-500" : "border-line"
        )}
      >
        {selected && (
          <span className="h-[9px] w-[9px] rounded-full bg-primary-500" />
        )}
      </span>
      {label}
    </label>
  );
}

/* -------------------------------------------------------------------------- */
/*  Toggle switch                                                             */
/* -------------------------------------------------------------------------- */

export function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-6 w-10 shrink-0 rounded-full transition-colors",
        checked ? "bg-primary-500" : "bg-ink-200"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
          checked ? "translate-x-[18px]" : "translate-x-0.5"
        )}
      />
    </button>
  );
}
