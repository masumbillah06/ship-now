"use client";

import {
  LayoutDashboard,
  BarChart3,
  Calendar,
  Package,
  MapPin,
  Warehouse,
  Truck,
  UserCog,
  Receipt,
  MessageSquare,
  Bell,
  Settings,
  ChevronDown,
  Send,
  X,
} from "lucide-react";
import { navItems, bottomNavItems, currentUser } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const icons: Record<string, React.ElementType> = {
  LayoutDashboard,
  BarChart3,
  Calendar,
  Package,
  MapPin,
  Warehouse,
  Truck,
  UserCog,
  Receipt,
  MessageSquare,
  Bell,
  Settings,
};

function NavRow({
  label,
  icon,
  active,
  badge,
  collapsed,
}: {
  label: string;
  icon: string;
  active?: boolean;
  badge?: number;
  collapsed?: boolean;
}) {
  const Icon = icons[icon];
  return (
    <a
      href="#"
      title={collapsed ? label : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        collapsed && "justify-center px-2",
        active
          ? "bg-primary-50 text-primary-600"
          : "text-ink-400 hover:bg-ink-50 hover:text-ink-700"
      )}
    >
      <Icon
        size={19}
        className={cn(active ? "text-primary-600" : "text-ink-300")}
        strokeWidth={2}
      />
      {!collapsed && <span className="flex-1 truncate">{label}</span>}
      {!collapsed && badge ? (
        <span className="min-w-[20px] rounded-full bg-primary-500 px-1.5 py-0.5 text-center text-[11px] font-semibold text-white">
          {badge}
        </span>
      ) : null}
    </a>
  );
}

export function Sidebar({
  collapsed = false,
  mobileOpen = false,
  onCloseMobile,
}: {
  collapsed?: boolean;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink-900/40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={cn(
          "z-50 flex h-screen flex-col border-r border-line bg-white transition-all duration-200",
          collapsed ? "w-[84px]" : "w-[264px]",
          "fixed left-0 top-0 lg:sticky lg:top-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "flex items-center gap-2 px-5 py-6",
            collapsed && "justify-center px-2"
          )}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-500">
            <Send size={17} className="text-white" strokeWidth={2.2} />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold tracking-tight text-ink-900">
              Shipnow
            </span>
          )}
          <button
            onClick={onCloseMobile}
            className="ml-auto rounded-lg p-1.5 text-ink-400 hover:bg-ink-50 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* User */}
        <div
          className={cn(
            "mx-4 mb-4 flex items-center gap-2.5 rounded-xl border border-line px-3 py-2.5",
            collapsed && "mx-2 justify-center px-2"
          )}
        >
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-primary-300 to-primary-600" />
          {!collapsed && (
            <>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink-900">
                  {currentUser.name}
                </p>
                <p className="truncate text-xs text-muted">
                  {currentUser.role}
                </p>
              </div>
              <ChevronDown size={16} className="shrink-0 text-ink-300" />
            </>
          )}
        </div>

        {/* Nav */}
        <nav className="scrollbar-thin flex-1 space-y-1 overflow-y-auto px-3">
          {navItems.map((item, i) => (
            <NavRow
              key={item.label}
              label={item.label}
              icon={item.icon}
              active={i === 0}
              collapsed={collapsed}
            />
          ))}
        </nav>

        {/* Promo card */}
        {!collapsed && (
          <div className="mx-4 mb-4 rounded-2xl bg-ink-900 p-4 text-white">
            <p className="text-sm font-semibold leading-snug">
              Loving ShipNow Free?
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink-300">
              Go Pro to access priority support, real-time tracking, and full
              analytics.
            </p>
            <Button variant="primary" size="sm" className="mt-3 w-full">
              Go Pro Today
            </Button>
          </div>
        )}

        {/* Bottom items */}
        <div className="space-y-1 border-t border-line px-3 py-3">
          {bottomNavItems.map((item) => (
            <NavRow
              key={item.label}
              label={item.label}
              icon={item.icon}
              badge={item.badge}
              collapsed={collapsed}
            />
          ))}
        </div>
      </aside>
    </>
  );
}
