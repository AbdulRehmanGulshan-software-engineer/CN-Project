export default function ActivityLog({ logs, clearLogs }) {
  return (
    <div className="bg-[#0b1220] border border-slate-800 rounded-xl shadow-lg mt-4 overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#0f172a]">
        <h2 className="text-sm font-semibold text-slate-200 tracking-wide">
          Activity Log
        </h2>

        <button
          onClick={clearLogs}
          className="text-xs px-3 py-1 rounded-md border border-red-500/40 text-red-400
                     hover:bg-red-500/10 transition"
        >
          Clear
        </button>
      </div>

      {/* LOG CONTAINER */}
      <div className="h-48 overflow-y-auto px-4 py-3 font-mono text-xs space-y-1">

        {logs.length === 0 ? (
          <div className="text-slate-500 italic">
            No network activity detected...
          </div>
        ) : (
          logs.map((log) => (
            <div
              key={log.id}
              className="flex gap-3 leading-relaxed"
            >

              {/* timestamp */}
              <span className="text-slate-500 shrink-0">
                {log.time}
              </span>

              {/* message */}
              <span className="text-slate-300 break-words">
                {log.message}
              </span>

            </div>
          ))
        )}

      </div>
    </div>
  );
}