export const portRules = {
  80: { service: "HTTP", protocol: "TCP" },
  443: { service: "HTTPS", protocol: "TCP" },
  53: { service: "DNS", protocol: "UDP" },
  21: { service: "FTP", protocol: "TCP" },
  25: { service: "SMTP", protocol: "TCP" },
};