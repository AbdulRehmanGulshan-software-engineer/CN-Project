import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PacketDetails from "./pages/PacketDetails";
import { usePackets } from "./hooks/usePackets";
import NotFound from "./pages/NotFound";

export default function App() {
  const { packets, running, setRunning, clearPackets } = usePackets();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              packets={packets}
              running={running}
              setRunning={setRunning}
              clearPackets={clearPackets}
            />
          }
        />

        <Route
          path="/packet/:id"
          element={<PacketDetails packets={packets} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
