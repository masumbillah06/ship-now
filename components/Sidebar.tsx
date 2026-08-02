"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Menu,
  X,
} from "lucide-react";
import { navItems, bottomNavItems, currentUser } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Logo({ dark }: { dark?: boolean }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center">
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 6H26L21 18H12L17 6Z" fill={dark ? "#7C6FF2" : "#7C6FF2"} />
        <path d="M22 20H31L26 32H17L22 20Z" fill={dark ? "#8B5CF6" : "#8B5CF6"} />
      </svg>
    </div>
  );
}

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
  href,
  active,
  badge,
  collapsed,
}: {
  label: string;
  icon: string;
  href?: string;
  active?: boolean;
  badge?: number;
  collapsed?: boolean;
}) {
  const Icon = icons[icon];
  return (
    <Link
      href={href ?? "#"}
      title={collapsed ? label : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        collapsed && "relative justify-center px-2",
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
      {badge ? (
        collapsed ? (
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary-500" />
        ) : (
          <span className="min-w-[20px] rounded-full bg-primary-500 px-1.5 py-0.5 text-center text-[11px] font-semibold text-white">
            {badge}
          </span>
        )
      ) : null}
    </Link>
  );
}


export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-50 md:hidden"
    >
      <Menu size={22} />
    </button>
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
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink-900/40 md:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={cn(
          "z-50 flex h-screen flex-col border-r border-line bg-white transition-all duration-200",
          collapsed ? "w-[84px]" : "w-[264px]",
          // Fixed on mobile (so it overlays content when opened),
          // sticky from md upward (tablet + desktop) so it sits in flow.
          "fixed left-0 top-0 md:sticky md:top-0",
          // Off-canvas only below md; visible (translate-x-0) from md upward.
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Logo — always visible, in every state (mobile, tablet-collapsed, desktop) */}
        <div
          className={cn(
            "flex items-center gap-2 px-5 py-6",
            collapsed && "justify-center px-2"
          )}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              className="h-9 w-9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 6H26L21 18H12L17 6Z" fill="#7C6FF2" />
              <path d="M22 20H31L26 32H17L22 20Z" fill="#8B5CF6" />
            </svg>
          </div>
          {!collapsed && (
            <span className="text-lg font-bold uppercase tracking-wide text-ink-900">
              Shipnow
            </span>
          )}
          <button
            onClick={onCloseMobile}
            className="ml-auto rounded-lg p-1.5 text-ink-400 hover:bg-ink-50 md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* User — hidden when collapsed (tablet rail shows icons only, no profile) */}
        {!collapsed && (
          <div className="mx-4 mb-4 flex items-center gap-2.5 rounded-xl border border-line px-3 py-2.5">
            <div className="h-8 w-8 shrink-0 rounded-full bg-linear-to-br from-primary-300 to-primary-600" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink-900">
                {currentUser.name}
              </p>
              <p className="truncate text-xs text-muted">
                {currentUser.role}
              </p>
            </div>
            <ChevronDown size={16} className="shrink-0 text-ink-300" />
          </div>
        )}

        {/* Nav — one continuous list: main items, then Message/Notification/Settings,
            exactly as ordered in the design (no divider between the two groups).
            Always rendered — collapsed just drops labels/text badges via NavRow. */}
        <nav
          className={cn(
            "scrollbar-thin flex-1 space-y-1 overflow-y-auto",
            collapsed ? "px-2" : "px-3"
          )}
        >
          {navItems.map((item) => (
            <NavRow
              key={item.label}
              label={item.label}
              icon={item.icon}
              href={item.href}
              active={
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              }
              collapsed={collapsed}
            />
          ))}

          {bottomNavItems.map((item) => (
            <NavRow
              key={item.label}
              label={item.label}
              icon={item.icon}
              href={item.href}
              badge={item.badge}
              active={pathname.startsWith(item.href)}
              collapsed={collapsed}
            />
          ))}
        </nav>

        {/* Promo card — hidden when collapsed (no room for the copy/CTA on the rail) */}
        {!collapsed && (
          <div className="mx-4 mb-5 overflow-hidden rounded-xl border border-violet-500/20 bg-gradient-to-br from-[#1E1A35] via-[#17142A] to-[#0F0D1A] p-3 shadow-lg">
            {/* Logo */}
            <Logo dark />

            {/* Content */}
            <div className="mt-1">
              <h3 className="text-base font-semibold leading-tight text-white">
                Loving ShipNow Free?
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                Go Pro to access priority support,
                real-time tracking, and full analytics.
              </p>
            </div>

            {/* Button */}
            <Button
              variant="primary"
              size="sm"
              className="mt-5 w-full rounded-lg bg-slate-50 hover:bg-slate-300 text-slate-900 cursor-pointer"
            >
              Go Pro Today
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}