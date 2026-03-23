"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50" />
      
      <div className="w-full max-w-md bg-black/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Log in to your AI Money Mentor</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="email" 
                placeholder="Email address" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <>Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-white hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
