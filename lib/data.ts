export const stats = [
  {
    id: "active-shipments",
    label: "Active Shipments",
    value: "1,284",
    unit: "shipments",
    change: "+8.7%",
    changeLabel: "from last week",
    trend: "up" as const,
  },
  {
    id: "delivery-performance",
    label: "Delivery Performance",
    value: "94.3%",
    unit: "on-time",
    change: "-1.2%",
    changeLabel: "from last week",
    trend: "down" as const,
  },
  {
    id: "revenue",
    label: "Revenue",
    value: "$82,450",
    unit: "",
    change: "+12.4%",
    changeLabel: "from last month",
    trend: "up" as const,
  },
];

export const shipmentStatistic = {
  total: "4,352",
  change: "+8.7%",
  peakLabel: "May 2030",
  peakValue: "3,124",
  data: [
    { month: "Jan", value: 1400 },
    { month: "Feb", value: 2100 },
    { month: "Mar", value: 1800 },
    { month: "Apr", value: 2600 },
    { month: "May", value: 3124, highlight: true },
    { month: "Jun", value: 2300 },
    { month: "Jul", value: 3600 },
    { month: "Aug", value: 2900 },
  ],
};

export const profitSummary = {
  total: "$624,550",
  change: "5.62%",
  revenueTotal: "$87,524",
  costTotal: "$45,680",
  data: [
    { month: "Jan", revenue: 62000, cost: 30000 },
    { month: "Feb", revenue: 58000, cost: 34000 },
    { month: "Mar", revenue: 71000, cost: 38000 },
    { month: "Apr", revenue: 65000, cost: 33000 },
    { month: "May", revenue: 87524, cost: 45680 },
    { month: "Jun", revenue: 74000, cost: 36000 },
    { month: "Jul", revenue: 92000, cost: 41000 },
    { month: "Aug", revenue: 80000, cost: 39000 },
  ],
};

export const shipmentType = {
  total: "2,500",
  totalLabel: "Total Shipment",
  data: [
    { name: "Road Freight", value: 1150, percent: 46, color: "#7C5CFC" },
    { name: "Air Freight", value: 700, percent: 28, color: "#14132B" },
    { name: "Ocean Freight", value: 425, percent: 17, color: "#C8C6D6" },
    { name: "Rail Freight", value: 225, percent: 9, color: "#EDEDF2" },
  ],
};

export const productCategories = {
  total: "1,000",
  totalLabel: "Total Products",
  data: [
    { name: "Electronics", value: 240, percent: 24, color: "#7C5CFC" },
    { name: "Home & Kitchen", value: 200, percent: 20, color: "#B49DFE" },
    { name: "Apparel", value: 180, percent: 18, color: "#14132B" },
    { name: "Beauty & Health", value: 140, percent: 14, color: "#4A4768" },
    { name: "Sports & Outdoors", value: 120, percent: 12, color: "#C8C6D6" },
    { name: "Automotive", value: 120, percent: 12, color: "#EDEDF2" },
  ],
};

export const tracking = {
  shipmentId: "#SH8743921",
  status: "In Transit",
  statusNote: "On Schedule",
  courier: "Daniel Cooper",
  carrier: "SkyLogix Express",
  progress: 62,
  origin: { city: "San Francisco, CA, USA", date: "Mar 19, 2035 10:30 AM" },
  destination: {
    city: "New York, NY, USA",
    date: "Mar 23, 2035 03:00 PM (estimated)",
  },
};

export const shipmentAlerts = {
  total: 12,
  totalLabel: "Delays Detected",
  summary: [
    { label: "Customs Clearance Delay", count: 5, color: "#7C5CFC" },
    { label: "Incorrect Address Provided", count: 4, color: "#14132B" },
    { label: "Weather Related Hold", count: 3, color: "#C8C6D6" },
  ],
  items: [
    {
      id: "SH8743921",
      reason: "Customs Clearance Delay",
      meta: "Ocean Freight · Mar 20",
    },
    {
      id: "SH8725810",
      reason: "Incorrect Address Provided",
      meta: "Road Freight · Mar 20",
    },
    {
      id: "SH8790043",
      reason: "Weather Related Hold",
      meta: "Air Freight · Mar 19",
    },
    {
      id: "SH8716654",
      reason: "Incorrect Address Provided",
      meta: "Rail Freight · Mar 18",
    },
  ],
};

export const recentShipments = [
  {
    id: "#SH9283746",
    company: "TechGear Inc.",
    category: "Electronics",
    carrier: "FedEx",
    route: "Los Angeles, CA → Chicago, IL",
    date: "Mar 20, 2035",
    status: "In Transit",
  },
  {
    id: "#SH9182635",
    company: "StyleHub Co.",
    category: "Apparel",
    carrier: "DHL",
    route: "New York, NY → Atlanta, GA",
    date: "Mar 19, 2035",
    status: "Out for Delivery",
  },
  {
    id: "#SH9037821",
    company: "FreshNest",
    category: "Home & Kitchen",
    carrier: "UPS",
    route: "Dallas, TX → Miami, FL",
    date: "Mar 18, 2035",
    status: "Delivered",
  },
  {
    id: "#SH9374652",
    company: "FitPlus Gear",
    category: "Sports & Outdoors",
    carrier: "USPS",
    route: "Seattle, WA → Denver, CO",
    date: "Mar 21, 2035",
    status: "Processing",
  },
  {
    id: "#SH9457830",
    company: "AutoParts Pro",
    category: "Automotive",
    carrier: "Aramex",
    route: "Detroit, MI → San Diego, CA",
    date: "Mar 20, 2035",
    status: "In Transit",
  },
];

export const recentActivity = [
  {
    id: 1,
    user: "@TechGuru99",
    action: "submitted a bulk shipment request",
    time: "12:00 PM",
  },
  {
    id: 2,
    user: "@SupportKen",
    role: "Customer Support",
    action: "added a priority tag to Order ID 77889JKL",
    time: "11:30 AM",
  },
  {
    id: 3,
    user: "@SallyMae88",
    action: "initiated a return process for Order ID 44556GHI",
    time: "11:00 AM",
  },
  {
    id: 4,
    user: "@AdminLisa",
    role: "Administrator",
    action: "resolved a delivery issue for Order ID 12345XYZ",
    time: "10:15 AM",
  },
  {
    id: 5,
    user: "@Mickey92",
    action: "updated the shipping address for Order ID 67890ABC",
    time: "09:45 AM",
  },
];

export const navItems = [
  { label: "Dashboard", icon: "LayoutDashboard", href: "/" },
  { label: "Analytics", icon: "BarChart3", href: "/analytics" },
  { label: "Calendar", icon: "Calendar", href: "/calendar" },
  { label: "Shipments", icon: "Package", href: "/shipments" },
  { label: "Tracking", icon: "MapPin", href: "/tracking" },
  { label: "Warehouse", icon: "Warehouse", href: "/warehouse" },
  { label: "Fleets", icon: "Truck", href: "/fleets" },
  { label: "Drivers", icon: "UserCog", href: "/drivers" },
  { label: "Invoices & Billing", icon: "Receipt", href: "/invoices" },
];

export const bottomNavItems = [
  { label: "Message", icon: "MessageSquare", href: "/messages", badge: 19 },
  { label: "Notification", icon: "Bell", href: "/notifications", badge: 5 },
  { label: "Settings", icon: "Settings", href: "/settings" },
];

export const currentUser = {
  name: "John Doe",
  role: "Admin",
};