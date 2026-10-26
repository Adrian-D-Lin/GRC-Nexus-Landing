export const SAMPLE_DIRECTIVE = `MAS NOTICE 626 / FinCEN 31 CFR 1010.410 — CROSS-BORDER WIRE TRANSFERS
§ 13.4  A financial institution effecting a cross-border wire transfer
        of SGD 1,000 or more shall screen originator and beneficiary
        against applicable sanctions lists prior to settlement.
§ 13.6  Stored value facility holders shall apply enhanced due
        diligence where a party is identified as a PEP.
§ 13.9  Institutions shall implement velocity checks on foreign
        currency remittances exceeding prescribed thresholds.`;

export const SAMPLE_MEMO = `PRIVILEGED & CONFIDENTIAL — COUNSEL MEMO  REF: LGL-2026-0417
RE: Applicability of §13 to card network & wallet rails
1. VISA settlement flows constitute "wire transfer" under §13.4
   where cross-border settlement occurs in foreign currency.
2. PayPal merchant wallet payouts fall within "stored value"
   scope; PEP screening must precede credit release.
3. OCBC FAST domestic clearing is in scope only where onward
   cross-border routing is detected.
4. Corporate payroll disbursements: low exposure; monitor only.`;

export const processes = [
  { id: "P-101", name: "VISA Settlement", rail: "Card Network", p: 94, controls: "C-201, C-202" },
  { id: "P-102", name: "PayPal Payouts", rail: "Merchant Wallet", p: 88, controls: "C-201 · PEP gap", gap: true },
  { id: "P-103", name: "OCBC FAST Clearing", rail: "Domestic RTGS", p: 76, controls: "C-201, C-203" },
  { id: "P-104", name: "Corporate Payroll", rail: "Internal", p: 18, controls: "—", low: true },
];

export const controls = [
  { id: "C-201", name: "Real-Time Sanctions Screening", s: "Active Mitigating", p: 92 },
  { id: "C-202", name: "Velocity & Anomaly Alert", s: "Active Mitigating", p: 86 },
  { id: "C-203", name: "PEP Screening", s: "Active Mitigating", p: 81 },
  { id: "C-204", name: "Merchant KYC Refresh", s: "Coverage Gap", p: 74, gap: true },
];

export const modules = [
  { group: "Core Platform Services", items: ["PLAT-01: Identity & Access", "PLAT-02: Evidence Vault", "PLAT-03: Semantic AI Engine", "PLAT-04: Audit Trail Ledger", "PLAT-05: Integration Hub"] },
  { group: "Core Modules", items: ["CORE-01: Policy Management", "CORE-02: Regulatory Obligations", "CORE-03: Risk Register", "CORE-04: Control Library", "CORE-05: Issues & Actions", "CORE-06: Process Taxonomy"] },
  { group: "Orbit Modules", items: ["ORB-01: Third-Party Risk", "ORB-02: Internal Audit", "ORB-03: Incident Management", "ORB-04: Regulatory Change", "ORB-05: Model Risk", "ORB-06: Business Continuity"] },
  { group: "Halo Modules", items: ["HALO-01: Board Reporting", "HALO-02: Regulator Portal", "HALO-03: ESG Disclosure", "HALO-04: Benchmark Analytics", "HALO-05: Horizon Scanning"] },
];

export const navItems = ["Obligations", "Processes", "Controls", "Risk Register", "Evidence", "Audit Trail", "Reports"];

export const totalModules = modules.reduce((n, g) => n + g.items.length, 0);
