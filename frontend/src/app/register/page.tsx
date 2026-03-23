"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, User, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] opacity-50" />
      
      <div className="w-full max-w-md bg-black/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Join the Mentor</h1>
          <p className="text-gray-400 mt-2">Start your journey to financial freedom</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="email" 
                placeholder="Email address" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="password" 
                placeholder="Password" 
                required
                minLength={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>Create Account <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline hover:text-purple-400">Log in</Link>
        </p>
      </div>
    </div>
  );
}
