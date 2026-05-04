import { portRules } from "./portRules";

export function buildPacket() {
  const ports = Object.keys(portRules);

  // 20% ICMP traffic
  const isICMP = Math.random() < 0.2;

  if (isICMP) {
    return {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),

      protocol: "ICMP",
      service: "PING",

      src: "192.168.0." + Math.floor(Math.random() * 255),
      dest: "10.0.0." + Math.floor(Math.random() * 255),

      size: Math.floor(Math.random() * 200) + 40,

      destPort: "-",
    };
  }

  // PORT-BASED TRAFFIC (TCP/UDP)
  const destPort = ports[Math.floor(Math.random() * ports.length)];
  const rule = portRules[destPort];

  return {
    id: Date.now(),
    time: new Date().toLocaleTimeString(),

    protocol: rule.protocol,
    service: rule.service,

    src: "192.168.0." + Math.floor(Math.random() * 255),
    dest: "10.0.0." + Math.floor(Math.random() * 255),

    size: Math.floor(Math.random() * 1500),

    destPort,
  };
}