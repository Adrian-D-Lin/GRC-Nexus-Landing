// ==========================================================================
// GRC NEXUS — Interactive Landing Page Script
// ==========================================================================

const SAMPLE_DIRECTIVE_626 = `STATUTORY NOTICE 626 (AMENDMENT 2026) / FINCEN CROSS-BORDER DIRECTIVE
PREVENTION OF MONEY LAUNDERING & COUNTERING TERRORISM FINANCING

1. APPLICABILITY & THRESHOLD MANDATES:
All Major Payment Institutions, remittance intermediaries, and banking clearing rails facilitating electronic cross-border transactions exceeding SGD 1,000 (or foreign currency equivalent) must perform immediate originator and beneficiary validation.

2. REAL-TIME CONTROLS:
- Mandatory screening against consolidated UN, OFAC, and statutory sanctions lists prior to transaction execution.
- Politically Exposed Persons (PEPs) and high-risk beneficiaries require automated enhanced due diligence (EDD) prior to credit release.

3. VELOCITY MONITORING:
Rolling daily velocity monitoring must detect structured transactions designed to circumvent the statutory SGD 1,000 limit across merchant e-wallet payouts.`

const SAMPLE_LEGAL_MEMO = `CONFIDENTIAL PRIVILEGED LEGAL MEMORANDUM
TO: Compliance Committee & Head of Risk, GlobalPay Pte Ltd
SUBJECT: Scope Assessment on VISA Settlement & PayPal Merchant Rails

Counsel confirms that merchant e-wallet withdrawals via PayPal partner gateways (P-102) and international card acquiring via VISA network (P-101) directly satisfy the statutory definition of money transfer services under Section 2.1. Immediate sanctions screening and PEP controls are mandatory before settlement clearance.`

document.addEventListener("DOMContentLoaded", () => {
  const regInput = document.getElementById("input-reg")
  const legalInput = document.getElementById("input-legal")
  const btnLoad = document.getElementById("btn-load-preset")
  const btnRun = document.getElementById("btn-run-eval")
  const spinner = document.getElementById("eval-spinner")
  const resultContainer = document.getElementById("result-container")

  // Pre-load default directive
  if (regInput && legalInput) {
    regInput.value = SAMPLE_DIRECTIVE_626
    legalInput.value = SAMPLE_LEGAL_MEMO
  }

  btnLoad?.addEventListener("click", () => {
    regInput.value = SAMPLE_DIRECTIVE_626
    legalInput.value = SAMPLE_LEGAL_MEMO
    triggerEvaluation()
  })

  btnRun?.addEventListener("click", () => {
    triggerEvaluation()
  })

  function triggerEvaluation() {
    if (spinner) spinner.classList.remove("hidden")
    if (resultContainer) {
      resultContainer.style.opacity = "0.5"
    }

    setTimeout(() => {
      if (spinner) spinner.classList.add("hidden")
      if (resultContainer) {
        resultContainer.style.opacity = "1"
        resultContainer.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    }, 350)
  }
})
