// app/page.tsx
// VAYU landing page — temporary placeholder.
// Will be replaced with actual landing once foundation is complete.

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight text-green-400">VAYU</h1>
        <p className="text-xl text-gray-400">CleanAir &amp; Clear Streets</p>
        <p className="text-sm text-gray-600">Foundation phase — setting up...</p>
        <div className="flex gap-4 justify-center mt-8">
          <a
            href="/dashboard"
            className="px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/map"
            className="px-6 py-2 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition-colors"
          >
            Live Map
          </a>
        </div>
      </div>
    </main>
  );
}
