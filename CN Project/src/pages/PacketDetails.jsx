import { useParams } from "react-router-dom";

export default function PacketDetails({ packets }) {
  const { id } = useParams();

  const packet = packets.find((p) => String(p.id) === id);

  if (!packet) {
    return (
      <div className="p-6 text-center text-red-500 font-medium">
        Packet not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-wide">
            Packet Inspector
          </h2>

          <span className="px-3 py-1 text-xs rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
            ID: {packet.id}
          </span>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-xs text-gray-400">Protocol</p>
            <p className="text-lg font-semibold text-green-400">
              {packet.protocol}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-xs text-gray-400">Service</p>
            <p className="text-lg font-semibold text-yellow-300">
              {packet.service}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-xs text-gray-400">Size</p>
            <p className="text-lg font-semibold">
              {packet.size}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-xs text-gray-400">Destination Port</p>
            <p className="text-lg font-semibold text-pink-300">
              {packet.destPort}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-xs text-gray-400">Source</p>
            <p className="text-sm font-mono break-all text-blue-300">
              {packet.src}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-xs text-gray-400">Destination</p>
            <p className="text-sm font-mono break-all text-purple-300">
              {packet.dest}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 sm:col-span-2">
            <p className="text-xs text-gray-400">Timestamp</p>
            <p className="text-sm text-gray-200">
              {packet.time}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 text-xs text-gray-500 text-center">
          Live packet inspection view
        </div>

      </div>
    </div>
  );
}