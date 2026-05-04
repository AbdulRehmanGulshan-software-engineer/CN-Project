import { useState, useEffect } from "react";

export default function Filters({ filters, setFilters, addLog }) {
  const [tempFilters, setTempFilters] = useState(filters);

  // sync with localStorage filters (important)
  useEffect(() => {
    setTempFilters(filters);
  }, [filters]);

  const handleChange = (field, value) => {
    setTempFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleApply = () => {
    setFilters(tempFilters);
    addLog("Filter applied");
  };

  const handleReset = () => {
    const cleared = { protocol: "", src: "", dest: "" };
    setTempFilters(cleared);
    setFilters(cleared);
    addLog("Filters cleared");
  };

  const inputBase =
    "block w-full px-4 py-3 md:py-2 bg-gray-50 border border-gray-300 rounded-xl md:rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 md:p-5 mb-6">
      <div className="space-y-4">

        {/* Header */}
        <div className="hidden md:flex items-center justify-between border-b border-gray-100 pb-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Filter Traffic
          </h2>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Protocol */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">
              Protocol
            </label>
            <select
              className={inputBase}
              value={tempFilters.protocol}
              onChange={(e) => handleChange("protocol", e.target.value)}
            >
              <option value="">All Traffic</option>
              <option value="TCP">TCP</option>
              <option value="UDP">UDP</option>
              <option value="ICMP">ICMP</option>
            </select>
          </div>

          {/* Source IP */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">
              Source IP
            </label>
            <input
              className={inputBase}
              placeholder="0.0.0.0"
              value={tempFilters.src}
              onChange={(e) => handleChange("src", e.target.value)}
            />
          </div>

          {/* Destination IP */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">
              Destination IP
            </label>
            <input
              className={inputBase}
              placeholder="0.0.0.0"
              value={tempFilters.dest}
              onChange={(e) => handleChange("dest", e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-gray-100 flex flex-col md:flex-row gap-2 md:justify-end">

          <button
            onClick={handleApply}
            className="w-full md:w-auto px-6 py-3 md:py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl md:rounded-lg transition"
          >
            Apply Filter
          </button>

          <button
            onClick={handleReset}
            className="w-full md:w-auto px-6 py-3 md:py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-sm rounded-xl md:rounded-lg transition border border-gray-200"
          >
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}