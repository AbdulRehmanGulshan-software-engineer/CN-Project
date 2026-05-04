import { useEffect, useState } from "react";
import { buildPacket } from "../utils/packetGenerator";
import { useLocalStorage } from "./useLocalStorage";

export function usePackets() {
    const [packets, setPackets] = useLocalStorage("packets", []);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            const packet = buildPacket();

            setPackets((prev) => {
                const updated = [packet, ...prev];

                // optional safety limit (VERY IMPORTANT)
                return updated.slice(0, 100);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [running]);

    const clearPackets = () => {
        setPackets([]);
        localStorage.removeItem("packets");
    };

    return { packets, running, setRunning, clearPackets };
}