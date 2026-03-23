import PortfolioUploader from "@/components/PortfolioUploader";

export default function PortfolioPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Portfolio X-Ray</h1>
        <p className="text-gray-400">Upload your Mutual Fund CAS PDF to get deep insights and XIRR calculations.</p>
      </header>

      <div className="max-w-3xl mx-auto h-[500px] bg-black/40 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-indigo-500 to-purple-500 transition-colors duration-700 blur-3xl rounded-full scale-150 group-hover:opacity-20"></div>
        <div className="relative z-10 h-full p-8">
          <PortfolioUploader />
        </div>
      </div>
    </div>
  );
}
