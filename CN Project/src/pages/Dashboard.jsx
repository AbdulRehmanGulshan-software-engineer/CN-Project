import { useState } from "react";
import Filters from "../components/Filters";
import PacketTable from "../components/PacketTable";
import StatsCards from "../components/StatsCards";
import { useActivityLog } from "../hooks/useActivityLog";
import ActivityLog from "../components/ActivityLog";
import StatsCharts from "../components/StatsCharts";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Dashboard({
  packets,
  running,
  setRunning,
  clearPackets,
}) {
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [filters, setFilters] = useLocalStorage("filters", {
    protocol: "",
    src: "",
    dest: "",
  });

  const filteredPackets = packets.filter((p) => {
    return (
      (filters.protocol === "" || p.protocol === filters.protocol) &&
      (filters.src === "" || p.src.includes(filters.src)) &&
      (filters.dest === "" || p.dest.includes(filters.dest))
    );
  });

  const { logs, addLog, clearLogs } = useActivityLog();

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* 1. GLASSMORPHIC COMPACT HEADER */}
      <header className="sticky top-0 z-[100] w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* Branding */}
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${running ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]' : 'bg-gray-300'}`} />
              <h1 className="text-lg font-bold text-gray-900 tracking-tight">
                Network<span className="text-blue-600 font-black">Analyzer</span>
              </h1>
            </div>

            {/* Desktop Buttons (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2">
              {!running ? (
                <button
                  onClick={() => { setRunning(true); addLog("Monitoring started"); }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
                >
                  Start
                </button>
              ) : (
                <button
                  onClick={() => { setRunning(false); addLog("Monitoring stopped"); }}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
                >
                  Stop
                </button>
              )}
              <button
                onClick={() => { clearPackets(); addLog("Packets Cleared"); }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-xs font-bold transition"
              >
                Clear
              </button>
            </div>

            {/* Mobile Toggle Button (Visible only on mobile) */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? (
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown (Collapsible) */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-gray-100 flex flex-col gap-2 animate-in slide-in-from-top-2">
              <button
                onClick={() => {
                  setRunning(!running);
                  addLog(running ? "Monitoring stopped" : "Monitoring started");
                  setIsMenuOpen(false);
                }}
                className={`w-full py-2.5 rounded-xl text-sm font-bold ${running ? 'bg-amber-500 text-white' : 'bg-emerald-600 text-white'}`}
              >
                {running ? "Stop Capturing" : "Start Capturing"}
              </button>
              <button
                onClick={() => { clearPackets(); addLog("Packets Cleared"); setIsMenuOpen(false); }}
                className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-bold"
              >
                Clear Packets
              </button>
            </div>
          )}
        </div>
      </header>

      {/* 2. MAIN CONTENT GRID */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Filters */}
        <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-2 border border-white/40">
          <Filters filters={filters} setFilters={setFilters} addLog={addLog} />
        </section>

        {/* Charts & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Traffic View</h3>
            <StatsCharts packets={filteredPackets} />
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Live Metrics</h3>
            <StatsCards packets={filteredPackets} />
          </div>
        </div>

        {/* Packet Table */}
        <section className="bg-white rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Live Telemetry Log</h3>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <PacketTable packets={filteredPackets} />
          </div>
        </section>

        {/* Activity Log */}
        <section className="bg-white rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden">
          <ActivityLog logs={logs} clearLogs={clearLogs} />
        </section>

      </main>
    </div>
  );
}