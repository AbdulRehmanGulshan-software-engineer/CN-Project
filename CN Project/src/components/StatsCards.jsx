export default function StatsCards({ packets }) {
  const total = packets.length;

  const tcp = packets.filter(p => p.protocol === "TCP").length;
  const udp = packets.filter(p => p.protocol === "UDP").length;
  const icmp = packets.filter(p => p.protocol === "ICMP").length;

  const avgSize =
    total === 0
      ? 0
      : (packets.reduce((sum, p) => sum + p.size, 0) / total).toFixed(0);

  const Card = ({ label, value, accent }) => (
    <div
      className="relative rounded-xl p-3 text-center
                 bg-white/20 backdrop-blur-md border border-white/30
                 shadow-sm overflow-hidden"
    >
      <div className={`absolute inset-0 opacity-20 ${accent}`} />

      <div className="relative z-10">
        <div className="text-[9px] text-gray-600 font-medium">
          {label}
        </div>

        <div className="text-lg font-bold text-gray-900 mt-1">
          {value}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-2 mb-4">

      {/* MAIN GRID */}
      <div className="grid grid-cols-2 gap-2">

        <Card label="Total" value={total} accent="bg-gray-400" />
        <Card label="TCP" value={tcp} accent="bg-blue-400" />
        <Card label="UDP" value={udp} accent="bg-green-400" />
        <Card label="ICMP" value={icmp} accent="bg-red-400" />

      </div>

      {/* AVERAGE CARD */}
      <div
        className="relative rounded-xl p-4 text-center
                   bg-white/20 backdrop-blur-md border border-white/30
                   shadow-sm overflow-hidden"
      >
        <div className="absolute inset-0 bg-purple-400 opacity-10" />

        <div className="relative z-10">
          <div className="text-[9px] text-gray-600">
            Avg Packet Size
          </div>

          <div className="text-xl font-bold text-gray-900 mt-1">
            {avgSize} <span className="text-[10px]">bytes</span>
          </div>
        </div>
      </div>

    </div>
  );
}