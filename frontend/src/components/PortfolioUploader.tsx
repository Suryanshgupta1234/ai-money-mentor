"use client";

import { useState, useRef } from "react";

export default function PortfolioUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadFile = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/api/portfolio/analyze", {
        method: "POST",
        body: formData,
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
      <div className="p-8 bg-[#111] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">✓</div>
          Analysis Complete
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <p className="text-sm text-gray-500 mb-1">Total Funds</p>
            <p className="text-2xl font-semibold text-white">12</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <p className="text-sm text-gray-500 mb-1">Est. XIRR</p>
            <p className="text-2xl font-semibold text-emerald-400">+14.2%</p>
          </div>
        </div>
        <button onClick={() => { setResult(null); setFile(null); }} className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all">
          Upload Another Statement
        </button>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[400px] flex flex-col justify-center">
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-3xl transition-all duration-300 cursor-pointer group
          ${isDragging ? 'border-indigo-500 bg-indigo-500/10 scale-105' : 'border-white/20 hover:border-white/40 hover:bg-white/5'}
          ${file ? 'border-emerald-500/50 bg-emerald-500/5' : ''}
        `}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept=".pdf" 
          className="hidden" 
        />
        
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 ${isDragging ? 'scale-110 -translate-y-2' : 'group-hover:-translate-y-2'} ${file ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white'}`}>
          {file ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          )}
        </div>

        {file ? (
          <div className="text-center animate-in fade-in slide-in-from-bottom-2">
            <p className="text-xl font-medium text-white mb-2">{file.name}</p>
            <p className="text-sm text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl font-medium text-white mb-2">Upload Mutual Fund Statement</p>
            <p className="text-sm text-gray-400">Drag & drop your CAS PDF here, or click to browse</p>
          </div>
        )}
      </div>

      {file && (
        <button 
          onClick={uploadFile}
          disabled={loading}
          className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
             <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : "Analyze Portfolio X-Ray"}
        </button>
      )}
    </div>
  );
}
