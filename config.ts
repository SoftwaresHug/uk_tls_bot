// Auto-generated configuration for TLS Contact France UK AutoBot

export const config = {
  botName: "TLS Contact France UK",
  country: "United Kingdom",
  provider: "TLS Contact",
  destination: "France",
  loginUrl: "https://visas-fr.tlscontact.com/en-us/login",
  centers: [
  "London",
  "Manchester",
  "Edinburgh"
],
  visaCategories: [
  "Tourism",
  "Business",
  "Family Visit",
  "Student"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
