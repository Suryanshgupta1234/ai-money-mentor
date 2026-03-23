"use client";

import { Bell, Lock, User, CreditCard } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account preferences and integrations.</p>
      </header>

      <div className="max-w-3xl grid gap-6">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Profile Information</h3>
              <p className="text-sm text-gray-400">Update your name, email, and avatar</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-all">Edit</button>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Notifications</h3>
              <p className="text-sm text-gray-400">Manage alert types and frequency</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-all">Manage</button>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-500/20 text-pink-400 rounded-xl">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Security</h3>
              <p className="text-sm text-gray-400">Change password and 2FA settings</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-all">Update</button>
        </div>
      </div>
    </div>
  );
}
