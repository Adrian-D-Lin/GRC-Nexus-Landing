import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { modules, processes, totalModules } from "../lib/grc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GRC Nexus — Turn MAS Directives into Instant Control Mapping" },
      { name: "description", content: "Deterministic, on-premise AI that ingests statutory AML directives and maps them to your processes, controls and audit gaps in minutes." },
      { property: "og:title", content: "GRC Nexus — AI Governance Platform | MAS Regulated" },
      { property: "og:description", content: "Turn 60-page MAS directives into instant process and control mapping. Built for Singapore financial institutions and payment processors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const workflow = [
  {
    n: "01",
    t: "Ingest",
    short: "Statutory directives and counsel memos, side by side",
    body: "Drop MAS Notice 626 or FinCEN 31 CFR 1010.410 in one pane and your privileged counsel memo in the other. The directive supplies the obligation; the memo supplies your institution's own reading of it. No templates, no taxonomy project first.",
    tags: ["MAS Notice 626", "FinCEN 31 CFR 1010.410", "Privileged counsel memos"],
  },
  {
    n: "02",
    t: "Semantic Criteria Extraction",
    short: "Mandatory process criteria and control triggers, separated",
    body: "The engine pulls the criteria that make a process in-scope — cross-border settlement, foreign currency, stored value — and the criteria that describe a mitigating control — sanctions lists, velocity checks, PEP, the SGD 1,000 threshold. Both sets stay visible, so a reviewer can see exactly what the model matched on.",
    tags: ["Process triggers", "Control triggers", "No hidden reasoning"],
  },
  {
    n: "03",
    t: "Audit Gap Report",
    short: "Likelihood of applicability plus unmitigated rails flagged",
    body: "You get a percentage likelihood that the directive bites, the coverage ratio across exposed rails, and a flag on any rail without a mandatory control behind it — in the sample run, PayPal merchant wallet payouts reaching credit before automated PEP screening.",
    tags: ["92% applicability", "Coverage ratio", "Gap flags"],
  },
];

const capabilities = [
  { t: "Dual Document Ingestion", d: "Regulatory text and legal interpretation are evaluated together, not one after the other.", tone: "text-ai" },
  { t: "Deterministic Evaluation", d: "The same directive and the same memo produce the same readout, every time it is run.", tone: "text-primary" },
  { t: "Alignment Matrices", d: "Every exposed process and every candidate control scored on one screen, with the match shown.", tone: "text-ai" },
  { t: "Evidence-Grade Output", d: "Triggers, citations and gap flags come out as a reviewable record, not a summary paragraph.", tone: "text-warning" },
];

const wedge = [
  { w: "Weeks 1–4", t: "Ingest and map", d: "Statutory directives, counsel memos and the institution's process taxonomy loaded into the platform." },
  { w: "Weeks 5–10", t: "Evaluate and flag", d: "Semantic evaluation run across the payment rails in scope, with unmitigated controls surfaced as gaps." },
  { w: "Weeks 11–16", t: "Remediate and hand over", d: "Gap remediation pack, board reporting and the evidence trail a regulator can be walked through." },
];

const security = [
  { t: "Zero Third-Party Cloud Data Leakage", d: "Model execution stays on the workstation or inside your own perimeter. Directive text, counsel memos and process data never leave for a hosted inference endpoint.", tone: "border-ai/40" },
  { t: "Audit-Trail Immutability & Conflict Preservation", d: "The engine never smooths over an audit gap to produce a tidier answer. Where two readings of a directive conflict, both are preserved and attributed rather than averaged away.", tone: "border-warning/40" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Capabilities />
      <Wedge />
      <Architecture />
      <Consultancies />
      <Security />
      <Closing />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="font-mono text-sm font-bold uppercase tracking-widest">GRC NEXUS</span>
          <span className="hidden rounded border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground md:inline">
            AI Governance Platform | MAS Regulated
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-xs font-medium text-muted-foreground lg:flex">
          {[["#capabilities", "Capabilities"], ["#wedge", "The 16-Week Wedge"], ["#architecture", "Architecture Map"], ["#consultancies", "For Consultancies"]].map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-foreground">{label}</a>
          ))}
        </nav>
        <Link to="/reg-obligation-review" className="shrink-0 rounded-md bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:brightness-110">
          Launch Live AML Parser ⚡
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-24">
        <div>
          <span className="inline-block rounded-full border border-ai/40 bg-ai/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ai">
            Built for Singapore Financial Institutions &amp; Payment Processors
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight md:text-5xl lg:text-6xl">
            Turn 60-Page MAS Directives into Instant Process &amp; Control Mapping.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Stop drowning in manual regulatory checklists and brittle enterprise GRC suites. GRC Nexus uses
            deterministic, on-premise AI to ingest statutory directives and evaluate organizational exposure in minutes.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/reg-obligation-review" className="rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110">
              Test Live AML Wedge
            </Link>
            <Link to="/reg-obligation-review" search={{ tab: "map" }} className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:bg-secondary">
              View 22-Module Architecture
            </Link>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-7 sm:grid-cols-4">
            <Stat v={String(totalModules)} l="Platform modules" />
            <Stat v="0.84s" l="Median evaluation" />
            <Stat v="4" l="Rails in scope" />
            <Stat v="0" l="Cloud inference calls" />
          </div>
        </div>
        <HeroCard />
      </div>
    </section>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div>
      <div className="font-mono text-2xl font-semibold text-primary">{v}</div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{l}</div>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="glow-primary overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Executive Synthesis</span>
        <span className="font-mono text-[10px] text-ai">EVAL #A-7731 · 0.84s</span>
      </div>
      <div className="px-5 py-6">
        <p className="text-xl font-extrabold leading-snug tracking-tight md:text-2xl">
          These processes are <span className="text-success">92% likely</span> to be subject to this regulation.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">3 / 4 of exposed processes already have associated mitigating controls.</p>
        <div className="mt-5 space-y-2">
          {processes.slice(0, 3).map((p) => (
            <div key={p.id} className="flex items-center gap-3 rounded-md border border-border bg-card px-3 py-2">
              <span className="w-12 shrink-0 font-mono text-[10px] font-semibold text-ai">{p.id}</span>
              <span className="min-w-0 flex-1 truncate text-xs font-medium">{p.name}</span>
              <span className={`font-mono text-[10px] font-semibold ${p.gap ? "text-warning" : "text-success"}`}>{p.p}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-warning/40 bg-warning/10 px-5 py-3 text-xs leading-relaxed text-warning">
        ⚠️ <span className="font-semibold">P-102</span> (Merchant Wallet Payouts / PayPal) lacks mandatory automated PEP screening prior to credit release.
      </div>
      <div className="border-t border-border px-5 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Demonstration dataset
      </div>
    </div>
  );
}

function SectionHeading({ n, t, d }: { n: string; t: string; d?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{n}</div>
      <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">{t}</h2>
      {d && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>}
    </div>
  );
}

function Capabilities() {
  const [step, setStep] = useState(0);
  const active = workflow[step];
  return (
    <section id="capabilities" className="scroll-mt-20 border-b border-border px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          n="01 / Capabilities"
          t="The 3-Step Deterministic Workflow"
          d="Three moves, no configuration project in front of them. Select a step to see what happens inside it."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {workflow.map((s, i) => (
            <button
              key={s.n}
              onClick={() => setStep(i)}
              className={`rounded-md border px-4 py-4 text-left transition ${i === step ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:bg-secondary"}`}
            >
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <span className={i === step ? "text-primary" : "text-muted-foreground"}>{s.n}</span>
                <span className="font-semibold text-foreground">{s.t}</span>
              </div>
              <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.short}</div>
            </button>
          ))}
        </div>
        {active && (
          <div className="mt-3 rounded-md border border-border bg-secondary p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ai">Step {active.n} · {active.t}</div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground">{active.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <span key={t} className="rounded-full border border-ai/40 bg-ai/10 px-3 py-1 font-mono text-[10px] text-ai">{t}</span>
              ))}
            </div>
          </div>
        )}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.t} className="rounded-md border border-border bg-card p-5">
              <div className={`font-mono text-[10px] uppercase tracking-widest ${c.tone}`}>Feature</div>
              <div className="mt-2 text-sm font-semibold">{c.t}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wedge() {
  return (
    <section id="wedge" className="scroll-mt-20 border-b border-border bg-secondary px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          n="02 / The 16-Week Wedge"
          t="One domain, four payment rails, one working wedge."
          d="We do not start with a company-wide rollout. The wedge is the Anti-Money Laundering domain across the rails that actually move money — VISA settlement, PayPal merchant wallets and OCBC FAST clearing — proven end to end before anything else is added."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {wedge.map((s) => (
            <div key={s.w} className="rounded-md border border-border bg-card p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{s.w}</div>
              <div className="mt-2 text-sm font-semibold">{s.t}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {["VISA Settlement", "PayPal Payouts", "OCBC FAST Clearing", "Corporate Payroll"].map((r) => (
            <span key={r} className="rounded border border-border bg-card px-3 py-1.5 font-mono text-[10px] text-muted-foreground">{r}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-20 border-b border-border px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          n="03 / Architecture Map"
          t={`${totalModules} modules. One obligation engine at the centre.`}
          d="The wedge sits inside CORE-02: Regulatory Obligations. Every other module is a surface the same evidence already feeds — no re-keying, no parallel spreadsheet."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((g) => (
            <div key={g.group} className="rounded-md border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="text-xs font-semibold">{g.group}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{g.items.length}</span>
              </div>
              <div className="space-y-2 p-3">
                {g.items.map((m) => {
                  const [code, name] = m.split(": ");
                  const active = code === "CORE-02";
                  return (
                    <div key={m} className={`rounded-md border px-3 py-2 ${active ? "glow-success border-success/40 bg-success/5" : "border-border bg-secondary"}`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`font-mono text-[10px] ${active ? "text-success" : "text-ai"}`}>{code}</span>
                        {active && <span className="rounded bg-success px-1.5 py-0.5 font-mono text-[9px] font-bold text-primary-foreground">ACTIVE WEDGE</span>}
                      </div>
                      <div className="mt-0.5 text-xs font-medium">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Module names provisional — pending the confirmed architecture list.
        </p>
      </div>
    </section>
  );
}

function Consultancies() {
  return (
    <section id="consultancies" className="scroll-mt-20 border-b border-border bg-secondary px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
        <div>
          <SectionHeading
            n="04 / For Consultancies"
            t="Empowering Boutique GRC Consultancies & 2nd-Line Risk Teams."
            d="Advisory firms sell judgement, not data entry. GRC Nexus multiplies audit throughput roughly tenfold on the mechanical half of an engagement — reading the directive, listing the exposed processes, checking what stands behind them — without a multi-year bank IT integration cycle in the way."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[["10x", "Audit throughput"], ["0", "IT integration cycles"], ["1", "Evidence pack per engagement"]].map(([v, l]) => (
              <div key={l} className="rounded-md border border-border bg-card px-4 py-3">
                <div className="font-mono text-2xl font-semibold text-primary">{v}</div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ai">What a partner delivers</div>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
            {[
              "A directive-to-process map the client's own process owners can dispute line by line.",
              "Coverage ratios per payment rail, with the unmitigated ones named and dated.",
              "A preserved audit trail showing which reading of the directive produced which flag.",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <Link to="/reg-obligation-review" className="mt-6 inline-block rounded-md border border-border bg-secondary px-4 py-2.5 text-xs font-semibold transition hover:bg-card">
            Open the engine and see the output
          </Link>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="border-b border-border px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading n="05 / The Banking Advantage" t="Technical & security highlights." />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {security.map((s) => (
            <div key={s.t} className={`rounded-md border ${s.tone} bg-card p-6`}>
              <div className="text-sm font-semibold">{s.t}</div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative overflow-hidden px-5 py-20">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Run your first obligation review in the next ten minutes.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          The sample MAS Notice 626 directive and counsel memo are already loaded. Press evaluate and read the
          gap report.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/reg-obligation-review" className="rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110">
            Launch Live AML Parser ⚡
          </Link>
          <Link to="/reg-obligation-review" search={{ tab: "map" }} className="rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:bg-secondary">
            View Architecture Map
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest">GRC NEXUS</span>
        </div>
        <p className="font-mono text-[10px] text-muted-foreground">
          GRC Nexus © 2026. A Mamba MVP Studio Portfolio Company (Cohort 2).
        </p>
      </div>
    </footer>
  );
}
