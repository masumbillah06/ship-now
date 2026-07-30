export type ShipmentStatus =
  | "In Transit"
  | "Out for Delivery"
  | "Delivered"
  | "Processing";

export interface Shipment {
  id: string;
  company: string;
  category: string;
  status: ShipmentStatus;
  origin: { city: string; date: string };
  destination: { city: string; date: string };
  progress: number;
  carrier: string;
}

export const statusTabs: Array<"All" | ShipmentStatus> = [
  "All",
  "Delivered",
  "In Transit",
  "Processing",
  "Out for Delivery",
];

export const statusBadgeVariant: Record<
  ShipmentStatus,
  "primary" | "warning" | "success" | "neutral"
> = {
  "In Transit": "primary",
  "Out for Delivery": "warning",
  Delivered: "success",
  Processing: "neutral",
};

/** Icon + accent color per product category — reuses existing design tokens. */
export const categoryStyles: Record<
  string,
  { icon: string; bg: string; text: string }
> = {
  Electronics: { icon: "Cpu", bg: "bg-primary-50", text: "text-primary-600" },
  Apparel: { icon: "Shirt", bg: "bg-ink-100", text: "text-ink-600" },
  "Home & Kitchen": {
    icon: "UtensilsCrossed",
    bg: "bg-warning/10",
    text: "text-warning",
  },
  "Sports & Outdoors": {
    icon: "Dumbbell",
    bg: "bg-success/10",
    text: "text-success",
  },
  Automotive: { icon: "Car", bg: "bg-danger/10", text: "text-danger" },
  "Home & Garden": {
    icon: "Leaf",
    bg: "bg-success/10",
    text: "text-success",
  },
  "Food & Beverage": {
    icon: "Apple",
    bg: "bg-warning/10",
    text: "text-warning",
  },
  Fashion: { icon: "Shirt", bg: "bg-ink-100", text: "text-ink-600" },
};

export const shipments: Shipment[] = [
  {
    id: "#SH9283746",
    company: "TechGear Inc.",
    category: "Electronics",
    status: "In Transit",
    origin: { city: "Los Angeles, CA", date: "Mar 20, 2035 – 10:00 AM" },
    destination: { city: "Chicago, IL", date: "Mar 23, 2035 – 03:00 PM" },
    progress: 60,
    carrier: "FedEx",
  },
  {
    id: "#SH9182635",
    company: "StyleHub Co.",
    category: "Apparel",
    status: "Out for Delivery",
    origin: { city: "New York, NY", date: "Mar 19, 2035 – 11:30 AM" },
    destination: { city: "Atlanta, GA", date: "Mar 22, 2035 – 01:00 PM" },
    progress: 75,
    carrier: "DHL",
  },
  {
    id: "#SH9037821",
    company: "FreshNest",
    category: "Home & Kitchen",
    status: "Delivered",
    origin: { city: "Dallas, TX", date: "Mar 18, 2035 – 09:00 AM" },
    destination: { city: "Miami, FL", date: "Mar 21, 2035 – 06:00 PM" },
    progress: 100,
    carrier: "UPS",
  },
  {
    id: "#SH9374652",
    company: "FitPlus Gear",
    category: "Sports & Outdoors",
    status: "Processing",
    origin: { city: "Seattle, WA", date: "Mar 21, 2035 – 08:45 AM" },
    destination: { city: "Denver, CO", date: "Mar 25, 2035 – 04:30 PM" },
    progress: 40,
    carrier: "USPS",
  },
  {
    id: "#SH8821349",
    company: "EcoLights",
    category: "Electronics",
    status: "Out for Delivery",
    origin: { city: "Austin, TX", date: "Mar 19, 2035 – 12:00 PM" },
    destination: { city: "Phoenix, AZ", date: "Mar 21, 2035 – 05:00 PM" },
    progress: 90,
    carrier: "FedEx",
  },
  {
    id: "#SH9457830",
    company: "AutoParts Pro",
    category: "Automotive",
    status: "Delivered",
    origin: { city: "Detroit, MI", date: "Mar 20, 2035 – 07:15 AM" },
    destination: { city: "San Diego, CA", date: "Mar 26, 2035 – 02:00 PM" },
    progress: 100,
    carrier: "Aramex",
  },
  {
    id: "#SH8967432",
    company: "GreenHaven",
    category: "Home & Garden",
    status: "In Transit",
    origin: { city: "Portland, OR", date: "Mar 18, 2035 – 02:45 PM" },
    destination: {
      city: "Salt Lake City, UT",
      date: "Mar 22, 2035 – 11:00 AM",
    },
    progress: 65,
    carrier: "USPS",
  },
  {
    id: "#SH8893247",
    company: "ModaWear",
    category: "Apparel",
    status: "Out for Delivery",
    origin: { city: "Boston, MA", date: "Mar 20, 2035 – 01:00 PM" },
    destination: { city: "Charlotte, NC", date: "Mar 23, 2035 – 08:00 AM" },
    progress: 80,
    carrier: "DHL",
  },
  {
    id: "#SH9018723",
    company: "SunCore Panels",
    category: "Electronics",
    status: "Processing",
    origin: { city: "San Diego, CA", date: "Mar 21, 2035 – 09:30 AM" },
    destination: { city: "Reno, NV", date: "Mar 24, 2035 – 01:30 PM" },
    progress: 30,
    carrier: "UPS",
  },
  {
    id: "#SH9113471",
    company: "QuickParts",
    category: "Automotive",
    status: "In Transit",
    origin: { city: "Tampa, FL", date: "Mar 20, 2035 – 04:00 PM" },
    destination: { city: "Houston, TX", date: "Mar 23, 2035 – 12:00 PM" },
    progress: 90,
    carrier: "Aramex",
  },
  {
    id: "#SH8881190",
    company: "VitaFresh",
    category: "Food & Beverage",
    status: "Out for Delivery",
    origin: { city: "Nashville, TN", date: "Mar 21, 2035 – 06:00 AM" },
    destination: { city: "Jacksonville, FL", date: "Mar 22, 2035 – 10:00 AM" },
    progress: 85,
    carrier: "Local Courier",
  },
  {
    id: "#SH8776103",
    company: "StyleDepot",
    category: "Fashion",
    status: "In Transit",
    origin: { city: "Minneapolis, MN", date: "Mar 19, 2035 – 10:15 AM" },
    destination: { city: "Kansas City, MO", date: "Mar 22, 2035 – 03:30 PM" },
    progress: 60,
    carrier: "FedEx",
  },
];

/** Total matches the "Show 12 of 520 results" footer in the design. */
export const totalShipmentResults = 520;
export const totalShipmentPages = 16;
