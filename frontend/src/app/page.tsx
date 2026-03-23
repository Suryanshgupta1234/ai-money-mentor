import HealthScoreQuiz from "@/components/HealthScoreQuiz";
import PortfolioUploader from "@/components/PortfolioUploader";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header Navigation */}
      <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between p-6 lg:px-8">
        <div className="flex font-semibold text-lg items-center gap-2 tracking-tight">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-black font-bold">M</div>
          Mentor
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Log in</Link>
          <Link href="/register" className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">Sign up</Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glow Effects */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Master your money with <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">AI</span>
          </h1>
          <p className="text-lg leading-8 text-gray-400">
            Get an instant health score on your finances or use our X-Ray tool to analyze your mutual fund statement. Your personal AI mentor is ready.
          </p>
        </div>

        {/* Two Columns for Features */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
          {/* We wrapped PortfolioUploader in a div so they match in height and positioning roughly */}
          <HealthScoreQuiz />
          <div className="h-full bg-black/40 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-indigo-500 to-purple-500 transition-colors duration-700 blur-3xl rounded-full scale-150 group-hover:opacity-20"></div>
             <div className="relative z-10 h-full p-8 sm:p-12">
               <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Portfolio X-Ray</h3>
               <PortfolioUploader />
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
