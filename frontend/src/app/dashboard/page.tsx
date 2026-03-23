"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Activity, TrendingUp, AlertTriangle } from "lucide-react";

const portfolioData = [
  { month: "Jan", balance: 40000, xirr: 12.0 },
  { month: "Feb", balance: 42500, xirr: 12.5 },
  { month: "Mar", balance: 41000, xirr: 11.2 },
  { month: "Apr", balance: 48000, xirr: 14.0 },
  { month: "May", balance: 52000, xirr: 15.5 },
  { month: "Jun", balance: 56000, xirr: 16.2 },
];

const healthData = [
  { subject: "Savings", score: 85, fullMark: 100 },
  { subject: "Debt", score: 60, fullMark: 100 },
  { subject: "Investments", score: 90, fullMark: 100 },
  { subject: "Budgeting", score: 70, fullMark: 100 },
  { subject: "Emergency", score: 40, fullMark: 100 },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome back, Siddh.</h1>
        <p className="text-gray-400">Here's what's happening with your finances today.</p>
      </header>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Total Net Worth</p>
              <h3 className="text-3xl font-bold">$56,000</h3>
            </div>
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-medium">+14.2%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Health Score</p>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">69 / 100</h3>
            </div>
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
              <Activity className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Grade: <span className="text-white font-medium">B- (Needs work)</span>
          </div>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-orange-400 text-sm font-medium mb-1">Action Required</p>
              <h3 className="text-xl font-bold text-white">Emergency Fund Low</h3>
            </div>
            <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your emergency fund has dropped below the 3-month recommended threshold.
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-black/40 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Portfolio Growth</h3>
            <p className="text-sm text-gray-500">6-month performance view</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="month" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff50" fontSize={12} tickFormatter={(tick) => `$${tick/1000}k`} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-black/40 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col">
          <div className="mb-2">
            <h3 className="text-xl font-bold">Health Snapshot</h3>
            <p className="text-sm text-gray-500">Dimension break-down</p>
          </div>
          <div className="flex-1 min-h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={healthData}>
                <PolarGrid stroke="#ffffff20" />
                <PolarAngleAxis dataKey="subject" stroke="#ffffff70" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="transparent" />
                <Radar name="Score" dataKey="score" stroke="#a855f7" strokeWidth={2} fill="#a855f7" fillOpacity={0.4} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
