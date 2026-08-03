export const warehouseStats = [
  {
    id: "total-sku",
    label: "Total SKU",
    value: "285",
    unit: "",
    change: "+2.58%",
    trend: "up" as const,
  },
  {
    id: "quantity-on-hand",
    label: "Quantity on Hand",
    value: "12,450",
    unit: "units",
    change: "+4.37%",
    trend: "up" as const,
  },
  {
    id: "capacity-usage",
    label: "Capacity Usage",
    value: "62.5%",
    unit: "Full",
    change: "+1.54%",
    trend: "up" as const,
  },
];

export const freightTabs = [
  { label: "Road Freight", active: true },
  { label: "Rail Freight", active: false },
  { label: "Ocean Freight", active: false },
  { label: "Air Freight", active: false },
];

export const warehouseInventory = {
  total: "10,000",
  totalLabel: "packages",
  data: [
    { name: "Electronics", percent: 25, value: 2500, color: "#7C5CFC" },
    { name: "Apparel", percent: 20, value: 2000, color: "#B49DFE" },
    { name: "Home & Kitchen", percent: 18, value: 1800, color: "#14132B" },
    { name: "Beauty & Health", percent: 15, value: 1500, color: "#C8C6D6" },
    { name: "Automotive Parts", percent: 12, value: 1200, color: "#9C99B3" },
    { name: "Sports Equipment", percent: 10, value: 1000, color: "#EDEDF2" },
  ],
};

export const capacityUsage = {
  totalUsage: 62.5,
  loadedLabel: "Loaded",
  loadedValue: "40 shelves",
  emptyLabel: "Empty",
  emptyValue: "24 shelves",
};

export type PackageStatus = "Expected" | "Received" | "Sent";

export const packageStatusTabs: Array<"All" | PackageStatus> = [
  "All",
  "Expected",
  "Received",
  "Sent",
];

export const packageStatusBadgeVariant: Record<
  PackageStatus,
  "neutral" | "success" | "warning"
> = {
  Sent: "neutral",
  Received: "success",
  Expected: "warning",
};

export const packageStatusList: Array<{
  id: string;
  date: string;
  status: PackageStatus;
}> = [
  { id: "PKG-HK77420", date: "March 20, 2035 05:30 PM", status: "Sent" },
  { id: "PKG-A50812", date: "March 21, 2035 01:45 PM", status: "Received" },
  { id: "PKG-E10293", date: "March 22, 2035 09:00 AM", status: "Expected" },
];

export const warehouseStorage: Array<{
  floor: number;
  section: string;
  category: string;
  storageUsedPercent: number;
  availableSpace: number;
  totalSpace: number;
}> = [
  {
    floor: 1,
    section: "A1 - A10",
    category: "Electronics",
    storageUsedPercent: 80,
    availableSpace: 20,
    totalSpace: 100,
  },
  {
    floor: 2,
    section: "B1 - B10",
    category: "Apparel",
    storageUsedPercent: 60,
    availableSpace: 40,
    totalSpace: 100,
  },
  {
    floor: 1,
    section: "C1 - C10",
    category: "Home & Kitchen",
    storageUsedPercent: 90,
    availableSpace: 10,
    totalSpace: 100,
  },
  {
    floor: 3,
    section: "D1 - D10",
    category: "Automotive Parts",
    storageUsedPercent: 50,
    availableSpace: 50,
    totalSpace: 100,
  },
  {
    floor: 2,
    section: "E1 - E10",
    category: "Beauty & Health",
    storageUsedPercent: 70,
    availableSpace: 30,
    totalSpace: 100,
  },
];

export const warehouseFloors = ["Floor 1", "Floor 2", "Floor 3"];

export const warehouseMap: Array<{
  category: string;
  slots: string[];
  availableSpace: number;
  totalSpace: number;
  full?: boolean;
}> = [
  {
    category: "Electronics",
    slots: ["A1", "A2", "A3"],
    availableSpace: 20,
    totalSpace: 100,
  },
  {
    category: "Home & Kitchen",
    slots: ["C1", "C2", "C3"],
    availableSpace: 10,
    totalSpace: 100,
  },
  {
    category: "Automotive Parts",
    slots: ["D1", "D2", "D3"],
    availableSpace: 50,
    totalSpace: 100,
  },
  {
    category: "Sports Equipment",
    slots: ["F1", "F2", "F3"],
    availableSpace: 45,
    totalSpace: 100,
  },
  {
    category: "Apparel",
    slots: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
    availableSpace: 40,
    totalSpace: 100,
    full: true,
  },
  {
    category: "Beauty & Health",
    slots: ["E1", "E2", "E3", "E4"],
    availableSpace: 30,
    totalSpace: 100,
  },
];

export const warehouseActivityLog: Array<{
  id: number;
  actor: string;
  action: string;
  time: string;
  color: string;
}> = [
  {
    id: 1,
    actor: "Leo Fernandez",
    action:
      "confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)",
    time: "01:45 PM",
    color: "#7C5CFC",
  },
  {
    id: 2,
    actor: "Ava Martinez",
    action: "added 25 units of Smart Router Kit to Section A1 (Electronics)",
    time: "09:15 AM",
    color: "#F5A623",
  },
  {
    id: 3,
    actor: "Oscar Liem",
    action:
      "dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)",
    time: "05:30 PM",
    color: "#14132B",
  },
  {
    id: 4,
    actor: "Dina Choi",
    action:
      "created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)",
    time: "04:10 PM",
    color: "#F4533E",
  },
];
