export interface BenefitAnalysis {
  score: number
  selectedCorrect: string[]
  selectedIncorrect: string[]
  strategicAlignment: number
  insights: string[]
  reasoning: string
}

const scenarioBenefits = {
  "ach-transfer-delays": {
    primary: ["mitigate-regulatory-risk", "improve-operational-throughput"],
    secondary: ["reduce-operational-costs", "increase-customer-trust"],
    tertiary: ["reduce-chargebacks", "accelerate-revenue-recognition"],
  },
  "mobile-security-breach": {
    primary: ["increase-customer-trust", "mitigate-regulatory-risk"],
    secondary: ["reduce-operational-costs", "improve-operational-throughput"],
    tertiary: ["reduce-chargebacks", "accelerate-revenue-recognition"],
  },
  "credit-application-delays": {
    primary: ["accelerate-revenue-recognition", "increase-customer-trust"],
    secondary: ["improve-operational-throughput", "reduce-operational-costs"],
    tertiary: ["mitigate-regulatory-risk", "reduce-chargebacks"],
  },
  "digital-platform-outage": {
    primary: ["increase-customer-trust", "improve-operational-throughput"],
    secondary: ["reduce-operational-costs", "accelerate-revenue-recognition"],
    tertiary: ["mitigate-regulatory-risk", "reduce-chargebacks"],
  },
  "regulatory-reporting-failure": {
    primary: ["mitigate-regulatory-risk", "reduce-operational-costs"],
    secondary: ["improve-operational-throughput", "increase-customer-trust"],
    tertiary: ["reduce-chargebacks", "accelerate-revenue-recognition"],
  },
}

export function analyzeBenefitSelection(selectedBenefits: string[], scenarioId: string): BenefitAnalysis {
  const scenario =
    scenarioBenefits[scenarioId as keyof typeof scenarioBenefits] || scenarioBenefits["ach-transfer-delays"]

  const primaryBenefits = scenario.primary
  const secondaryBenefits = scenario.secondary
  const tertiaryBenefits = scenario.tertiary

  const selectedPrimary = selectedBenefits.filter((id) => primaryBenefits.includes(id))
  const selectedSecondary = selectedBenefits.filter((id) => secondaryBenefits.includes(id))
  const selectedTertiary = selectedBenefits.filter((id) => tertiaryBenefits.includes(id))

  const selectedCorrect = [...selectedPrimary, ...selectedSecondary]
  const selectedIncorrect = selectedBenefits.filter(
    (id) => !primaryBenefits.includes(id) && !secondaryBenefits.includes(id) && !tertiaryBenefits.includes(id),
  )

  // Calculate score
  let score = 0
  score += selectedPrimary.length * 40 // Primary benefits worth 40 points each
  score += selectedSecondary.length * 25 // Secondary benefits worth 25 points each
  score += selectedTertiary.length * 10 // Tertiary benefits worth 10 points each
  score -= selectedIncorrect.length * 20 // Penalty for incorrect selections

  score = Math.max(0, Math.min(100, score))

  // Calculate strategic alignment
  const totalRelevant = primaryBenefits.length + secondaryBenefits.length
  const totalSelected = selectedPrimary.length + selectedSecondary.length
  const strategicAlignment = Math.round((totalSelected / totalRelevant) * 100)

  // Generate insights
  const insights: string[] = []

  if (selectedPrimary.length === primaryBenefits.length) {
    insights.push("Excellent identification of primary benefits for this scenario")
  } else if (selectedPrimary.length > 0) {
    insights.push("Good focus on key benefits, consider the other primary benefits as well")
  } else {
    insights.push("Focus on the most critical benefits that directly address this scenario's challenges")
  }

  if (selectedBenefits.length > 4) {
    insights.push("Consider prioritizing fewer, more impactful benefits for clearer focus")
  }

  if (selectedSecondary.length > 0) {
    insights.push("Good consideration of secondary benefits that support the primary objectives")
  }

  let reasoning = ""
  if (score >= 80) {
    reasoning = "Strong benefit selection with good alignment to scenario priorities and business value."
  } else if (score >= 60) {
    reasoning = "Reasonable benefit selection with some alignment to scenario needs."
  } else {
    reasoning = "Benefit selection could be more focused on the specific challenges and opportunities in this scenario."
  }

  return {
    score,
    selectedCorrect,
    selectedIncorrect,
    strategicAlignment,
    insights,
    reasoning,
  }
}
