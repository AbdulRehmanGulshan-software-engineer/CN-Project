import { useNavigate } from "react-router-dom";

export default function PacketTable({ packets }) {
  const navigate = useNavigate();

  return (
    <div className="mt-4 bg-white border rounded-xl shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b bg-gray-50">
        <h2 className="text-sm font-semibold text-gray-700">Packet Capture</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-xs uppercase">
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Protocol</th>
              <th className="p-3 text-left">Source IP</th>
              <th className="p-3 text-left">Destination IP</th>
              <th className="p-3 text-left">Size (bytes)</th>
              <th className="p-3 text-left">Service</th>
            </tr>
          </thead>

          <tbody>
            {packets.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-400">
                  No packets captured yet
                </td>
              </tr>
            ) : (
              packets.map((p) => (
                <tr
                  key={p.id}
                  onClick={() => navigate(`/packet/${p.id}`)}
                  className="border-t hover:bg-gray-50 cursor-pointer transition"
                >
                  <td className="p-3 text-gray-600">{p.time}</td>

                  <td className="p-3 font-medium text-gray-800">
                    {p.protocol}
                  </td>

                  <td className="p-3 text-gray-700">{p.src}</td>

                  <td className="p-3 text-gray-700">{p.dest}</td>

                  <td className="p-3 text-gray-600">{p.size}</td>

                  <td className="p-3 text-gray-700 font-medium">{p.service}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
