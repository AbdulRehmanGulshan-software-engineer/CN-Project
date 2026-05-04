import { useLocalStorage } from "./useLocalStorage";

export function useActivityLog() {
  const [logs, setLogs] = useLocalStorage("logs", []);

  const addLog = (message) => {
    const newLog = {
      id: Date.now(),
      message,
      time: new Date().toLocaleTimeString(),
    };

    setLogs([newLog, ...logs]);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return { logs, addLog, clearLogs };
}