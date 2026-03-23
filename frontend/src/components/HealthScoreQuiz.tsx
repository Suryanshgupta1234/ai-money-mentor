"use client";

import { useState } from "react";

export default function HealthScoreQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ savings: 50, debt: 50, investments: 50 });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const steps = [
    { id: "savings", title: "How comfortable are you with your savings?", gradient: "from-blue-500 to-cyan-400" },
    { id: "debt", title: "How manageable is your current debt?", gradient: "from-rose-500 to-orange-400" },
    { id: "investments", title: "Are you actively investing for the future?", gradient: "from-emerald-500 to-teal-400" }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else submitQuiz();
  };

  const submitQuiz = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/health/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scores })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-[#111] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-500 animate-in fade-in zoom-in-95">
        <div className="relative w-48 h-48 mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1">
          <div className="bg-[#0a0a0a] w-full h-full rounded-full flex flex-col items-center justify-center">
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">{result.overall_score}</span>
            <span className="text-sm text-gray-400 uppercase tracking-widest mt-1">Score</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
          Grade: {result.grade}
        </h2>
        <p className="text-gray-400 mb-8 text-center max-w-sm">We've analyzed your financial health. Here are a few things to consider based on your profile.</p>
        <button onClick={() => { setResult(null); setStep(0); }} className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all hover:scale-105 active:scale-95">
          Take Again
        </button>
      </div>
    );
  }

  const currentStep = steps[step];

  return (
    <div className="relative overflow-hidden p-8 sm:p-12 bg-black/40 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl min-h-[400px] flex flex-col justify-between group">
      <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${currentStep.gradient} transition-colors duration-700 blur-3xl rounded-full scale-150`}></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-12">
          <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">Question {step + 1} of {steps.length}</span>
          <div className="flex gap-1">
            {steps.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-white' : 'w-2 bg-white/20'}`} />
            ))}
          </div>
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">{currentStep.title}</h3>

        <div className="space-y-6">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={scores[currentStep.id as keyof typeof scores]} 
            onChange={(e) => setScores({...scores, [currentStep.id]: parseInt(e.target.value)})}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white hover:accent-gray-300 transition-all"
          />
          <div className="flex justify-between text-sm text-gray-500 font-medium">
            <span>Needs Work</span>
            <span>Excellent</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleNext}
        disabled={loading}
        className="relative z-10 mt-12 w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
        ) : step === steps.length - 1 ? "Analyze Health Score" : "Next Question"}
      </button>
    </div>
  );
}
