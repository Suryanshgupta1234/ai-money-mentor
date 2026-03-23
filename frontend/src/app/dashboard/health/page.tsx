import HealthScoreQuiz from "@/components/HealthScoreQuiz";

export default function HealthScorePage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Health Score</h1>
        <p className="text-gray-400">Take the assessment to get a snapshot of your financial well-being.</p>
      </header>

      <div className="max-w-3xl mx-auto">
        <HealthScoreQuiz />
      </div>
    </div>
  );
}
