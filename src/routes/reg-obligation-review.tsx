import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  SAMPLE_DIRECTIVE,
  SAMPLE_MEMO,
  processes,
  controls,
  modules,
  navItems,
} from "../lib/grc";

type Tab = "engine" | "map";

export const Route = createFileRoute("/reg-obligation-review")({
  validateSearch: (search: Record<string, unknown>): { tab?: Tab | undefined } => {
    const raw = search["tab"];
    return raw === "map" || raw === "engine" ? { tab: raw } : {};
  },
  head: () => ({
    meta: [
      { title: "GRC Nexus — AML Obligation Coverage Engine" },
      { name: "description", content: "AI-native AML regulatory obligation review and control coverage for payment rails under Statutory and FinCEN." },
      { property: "og:title", content: "GRC Nexus — AML Obligation Coverage Engine" },
      { property: "og:description", content: "Map regulatory directives to processes and mitigating controls in seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { tab: initialTab } = Route.useSearch();
  const [tab, setTab] = useState<Tab>(initialTab === "map" ? "map" : "engine");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <aside className={`${collapsed ? "w-14" : "w-56"} flex shrink-0 flex-col border-r bg-card transition-all`}>
        <div className="flex h-14 items-center gap-2 border-b px-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">GN</div>
          {!collapsed && <span className="text-sm font-bold tracking-tight">GRC NEXUS</span>}
        </div>
        <nav className="flex-1 space-y-0.5 p-2">
          {navItems.map((n, i) => (
            <div key={n} className={`flex items-center gap-3 rounded-md px-2 py-2 text-xs font-medium ${i === 0 ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/60"}`}>
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? "bg-success" : "bg-border"}`} />
              {!collapsed && n}
            </div>
          ))}
        </nav>
        <div className="border-t">
          <div className="px-3 pt-2">
            <Link to="/" className="block font-mono text-[10px] text-muted-foreground hover:text-foreground">← NEXUS SITE</Link>
          </div>
          <button onClick={() => setCollapsed(!collapsed)} className="w-full p-3 text-left font-mono text-[10px] text-muted-foreground hover:text-foreground">
            {collapsed ? "»" : "« COLLAPSE"}
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between gap-4 border-b px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="hidden rounded border border-ai/40 bg-ai/10 px-2 py-0.5 font-mono text-[10px] text-ai lg:inline">
              Operational Scope: Payment Rails (VISA, PayPal, OCBC)
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Active Domain</div>
              <div className="truncate text-xs font-semibold">Anti-Money Laundering &amp; Counter-Financing of Terrorism</div>
            </div>
          </div>
          <div className="flex shrink-0 rounded-full border bg-card p-1 text-xs font-medium">
            {([["engine", "⚡ Live AML Intake Engine"], ["map", "🗺️ 22-Module Architecture Map"]] as const).map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} className={`rounded-full px-3 py-1.5 transition ${tab === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {l}
              </button>
            ))}
          </div>
        </header>

        <main className="grid-bg flex-1 overflow-y-auto p-5">
          {tab === "engine" ? <Engine /> : <ArchMap />}
        </main>
      </div>
    </div>
  );
}

function SectionLabel({ n, t }: { n: string; t: string }) {
  return (
    <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
      <span className="text-success">{n}</span> {t}
    </div>
  );
}

function Engine() {
  const [directive, setDirective] = useState(SAMPLE_DIRECTIVE);
  const [memo, setMemo] = useState(SAMPLE_MEMO);
  const [ran, setRan] = useState(true);
  const [running, setRunning] = useState(false);

  const run = () => {
    setRunning(true);
    setRan(false);
    setTimeout(() => { setRunning(false); setRan(true); }, 900);
  };

  return (
    <div className="mx-auto max-w-[1600px] space-y-5">
      <section>
        <SectionLabel n="01" t="Dual Document Ingestion" />
        <div className="grid gap-3 lg:grid-cols-2">
          {[["Regulatory Directive", "NOT-626 / FIN-1010", directive, setDirective], ["Legal Interpretation Memo", "LGL-2026-0417", memo, setMemo]].map(([title, ref, val, set]) => (
            <div key={title as string} className="panel-shadow overflow-hidden rounded-md border bg-card">
              <div className="flex items-center justify-between border-b px-3 py-2">
                <span className="text-xs font-semibold">{title as string}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{ref as string}</span>
              </div>
              <textarea
                value={val as string}
                onChange={(e) => (set as (v: string) => void)(e.target.value)}
                className="h-44 w-full resize-none bg-terminal p-3 font-mono text-[11px] leading-relaxed text-terminal-foreground outline-none"
              />
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button onClick={() => { setDirective(SAMPLE_DIRECTIVE); setMemo(SAMPLE_MEMO); }} className="rounded-md border bg-card px-3 py-2 text-xs font-medium hover:bg-accent">Load Sample AML Directive</button>
          <button onClick={() => { setDirective(""); setMemo(""); setRan(false); }} className="rounded-md border bg-card px-3 py-2 text-xs font-medium hover:bg-accent">Paste Custom</button>
          <div className="flex-1" />
          <span className="font-mono text-[10px] text-muted-foreground">{running ? "EVALUATING…" : ran ? "EVAL #A-7731 · 0.84s · DETERMINISTIC" : "AWAITING INPUT"}</span>
          <button onClick={run} disabled={running || !directive} className="rounded-md bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:brightness-110 disabled:opacity-50">
            {running ? "Running…" : "Run Semantic Evaluation ⚡"}
          </button>
        </div>
      </section>

      {ran && (
        <div className="space-y-5 animate-in fade-in duration-500">
          <section>
            <SectionLabel n="02" t="Executive Synthesis" />
            <div className="glow-success overflow-hidden rounded-lg border border-success/60 bg-card">
              <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                    These processes are <span className="text-success">92% likely</span> to be subject to this regulation.
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">3 / 4 of exposed processes already have associated mitigating controls.</p>
                </div>
                <div className="flex gap-3">
                  <Kpi v="3" l="Exposed Rails" tone="text-warning" />
                  <Kpi v="75%" l="Coverage Ratio" tone="text-success" />
                </div>
              </div>
              <div className="border-t border-warning/40 bg-warning/10 px-6 py-3 text-xs text-warning">
                ⚠️ <b>Immediate Vulnerability Detected:</b> Process <span className="font-mono">P-102</span> (Merchant Wallet Payouts / PayPal) lacks mandatory automated PEP screening prior to credit release.
              </div>
            </div>
          </section>

          <section>
            <SectionLabel n="03" t="Semantic Criteria Tags" />
            <div className="grid gap-3 rounded-md border bg-card p-4 md:grid-cols-2">
              <TagRow label="Process Triggers" tags={["cross-border settlement", "wire transfer", "foreign currency", "stored value"]} />
              <TagRow label="Control Triggers" tags={["sanctions lists", "velocity checks", "PEP", "SGD 1,000 threshold"]} />
            </div>
          </section>

          <section>
            <SectionLabel n="04" t="Target Alignment Matrices" />
            <div className="grid gap-3 lg:grid-cols-2">
              <Matrix title="Target Process Evaluation" col="Likelihood">
                {processes.map((p) => (
                  <Row key={p.id} id={p.id} name={p.name} sub={`${p.rail} · Controls: ${p.controls}`} pct={p.p}
                    tone={p.low ? "muted" : p.gap ? "warning" : "success"} status={p.low ? "Low Exposure" : p.gap ? "Exposed · Gap" : "Exposed · Covered"} />
                ))}
              </Matrix>
              <Matrix title="Mitigating Controls Library" col="Match">
                {controls.map((c) => (
                  <Row key={c.id} id={c.id} name={c.name} sub="AI inferred semantic match" pct={c.p} tone={c.gap ? "warning" : "success"} status={c.s} />
                ))}
              </Matrix>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function Kpi({ v, l, tone }: { v: string; l: string; tone: string }) {
  return (
    <div className="min-w-32 rounded-md border bg-terminal px-4 py-3 panel-shadow">
      <div className={`font-mono text-3xl font-semibold ${tone}`}>{v}</div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
    </div>
  );
}

function TagRow({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div>
      <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-ai/40 bg-ai/10 px-2.5 py-1 font-mono text-[11px] text-ai">{t}</span>
        ))}
      </div>
    </div>
  );
}

function Matrix({ title, col, children }: { title: string; col: string; children: React.ReactNode }) {
  return (
    <div className="panel-shadow overflow-hidden rounded-md border bg-card">
      <div className="flex items-center justify-between border-b px-4 py-2.5">
        <span className="text-xs font-semibold">{title}</span>
        <span className="font-mono text-[10px] uppercase text-muted-foreground">{col}</span>
      </div>
      <div className="divide-y">{children}</div>
    </div>
  );
}

const toneMap = {
  success: { text: "text-success", bar: "bg-success", pill: "border-success/40 bg-success/10 text-success" },
  warning: { text: "text-warning", bar: "bg-warning", pill: "border-warning/40 bg-warning/10 text-warning" },
  muted: { text: "text-muted-foreground", bar: "bg-muted-foreground", pill: "border-border bg-muted text-muted-foreground" },
};

function Row({ id, name, sub, pct, tone, status }: { id: string; name: string; sub: string; pct: number; tone: keyof typeof toneMap; status: string }) {
  const t = toneMap[tone];
  return (
    <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent/40">
      <span className="w-14 shrink-0 font-mono text-xs font-semibold text-ai">{id}</span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium">{name}</div>
        <div className="truncate font-mono text-[10px] text-muted-foreground">{sub}</div>
      </div>
      <span className={`hidden shrink-0 rounded border px-2 py-0.5 text-[10px] font-medium sm:inline ${t.pill}`}>{status}</span>
      <div className="w-20 shrink-0 text-right">
        <div className={`font-mono text-sm font-semibold ${t.text}`}>{pct}%</div>
        <div className="mt-1 h-1 rounded-full bg-muted"><div className={`h-1 rounded-full ${t.bar}`} style={{ width: `${pct}%` }} /></div>
      </div>
    </div>
  );
}

function ArchMap() {
  return (
    <div className="mx-auto max-w-[1600px]">
      <SectionLabel n="22" t="Module Architecture Map" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {modules.map((g) => (
          <div key={g.group} className="panel-shadow rounded-md border bg-card">
            <div className="flex items-center justify-between border-b px-4 py-2.5">
              <span className="text-xs font-semibold">{g.group}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{g.items.length}</span>
            </div>
            <div className="space-y-2 p-3">
              {g.items.map((m) => {
                const [code, name] = m.split(": ");
                const active = code === "CORE-02";
                return (
                  <div key={m} className={`rounded-md border px-3 py-2.5 ${active ? "glow-success border-success/60 bg-success/5" : "bg-terminal"}`}>
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-mono text-[10px] ${active ? "text-success" : "text-ai"}`}>{code}</span>
                      {active && <span className="rounded bg-success px-1.5 py-0.5 font-mono text-[9px] font-bold text-primary-foreground">ACTIVE MODULE</span>}
                    </div>
                    <div className="mt-0.5 text-xs font-medium">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
