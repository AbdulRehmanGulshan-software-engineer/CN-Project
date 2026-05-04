import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function StatsCharts({ packets }) {
  const tcp = packets.filter((p) => p.protocol === "TCP").length;
  const udp = packets.filter((p) => p.protocol === "UDP").length;
  const icmp = packets.filter((p) => p.protocol === "ICMP").length;

  const pieData = [
    { name: "TCP", value: tcp },
    { name: "UDP", value: udp },
    { name: "ICMP", value: icmp },
  ];

  // Increase this number (e.g., -20) to show more history in real-time
  const barData = packets.slice(-15).map((p, index) => ({
    name: p.protocol,
    size: p.size,
    // Add a unique ID to help Recharts animate correctly
    id: `${p.protocol}-${index}`, 
  }));

  // Define a shared color palette
  const COLORS = {
    TCP: "#3b82f6",  // Blue
    UDP: "#22c55e",  // Green
    ICMP: "#ef4444", // Red
    Default: "#6366f1"
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
      {/* PIE CHART */}
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-3">
        <h3 className="text-sm font-semibold text-center mb-2">Protocol Distribution</h3>
        <div className="w-full h-[220px] sm:h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius="70%">
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={Object.values(COLORS)[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BAR CHART */}
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-3">
        <h3 className="text-sm font-semibold text-center mb-2">Live Packet Sizes</h3>
        <div className="w-full h-[220px] sm:h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="id" hide /> {/* Hide ID to keep it clean */}
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip 
                labelStyle={{ display: 'none' }} 
                formatter={(value, name, props) => [value, `Protocol: ${props.payload.name}`]}
              />
              <Bar dataKey="size" radius={[4, 4, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[entry.name] || COLORS.Default} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}