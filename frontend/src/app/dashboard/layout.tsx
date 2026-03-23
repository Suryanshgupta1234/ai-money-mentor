"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, HeartPulse, PieChart as PieChartIcon, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Health Score", href: "/dashboard/health", icon: HeartPulse },
    { name: "Portfolio", href: "/dashboard/portfolio", icon: PieChartIcon },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 bg-black/40 backdrop-blur-xl flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-2 font-bold tracking-tight text-xl mb-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-black">M</div>
          Mentor
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? "bg-white/10 text-white font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-indigo-400" : ""}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 m-4 rounded-xl bg-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Siddh</span>
                <span className="text-xs text-gray-400">Pro Plan</span>
              </div>
            </div>
            <Link href="/" className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header here if needed later */}
        <main className="flex-1 overflow-y-auto w-full">
          <div className="p-8 md:p-12 max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
