export interface StakeholderAnalysis {
  score: number
  criticalMissed: string[]
  overallQuality: string
  insights: string[]
  strengths: string[]
  recommendations: string[]
  selectedCorrect: string[]
  selectedIncorrect: string[]
}

const scenarioStakeholders = {
  "ach-transfer-delays": {
    critical: ["fraud-ops", "aml-compliance"],
    important: ["cx-lead", "ops-manager"],
    optional: ["platform-pm", "tech-lead", "legal-counsel"],
  },
  "mobile-security-breach": {
    critical: ["tech-lead", "legal-counsel"],
    important: ["cx-lead", "platform-pm"],
    optional: ["fraud-ops", "aml-compliance", "ops-manager"],
  },
  "credit-application-delays": {
    critical: ["credit-risk", "ops-manager"],
    important: ["cx-lead", "platform-pm"],
    optional: ["fraud-ops", "aml-compliance", "tech-lead"],
  },
  "digital-platform-outage": {
    critical: ["tech-lead", "ops-manager"],
    important: ["cx-lead", "platform-pm"],
    optional: ["fraud-ops", "aml-compliance", "legal-counsel"],
  },
  "regulatory-reporting-failure": {
    critical: ["aml-compliance", "legal-counsel"],
    important: ["ops-manager", "platform-pm"],
    optional: ["fraud-ops", "cx-lead", "tech-lead"],
  },
}

export function analyzeStakeholderSelection(selectedStakeholders: string[], scenarioId: string): StakeholderAnalysis {
  const scenario =
    scenarioStakeholders[scenarioId as keyof typeof scenarioStakeholders] || scenarioStakeholders["ach-transfer-delays"]

  const criticalStakeholders = scenario.critical
  const importantStakeholders = scenario.important
  const optionalStakeholders = scenario.optional

  const selectedCritical = selectedStakeholders.filter((id) => criticalStakeholders.includes(id))
  const selectedImportant = selectedStakeholders.filter((id) => importantStakeholders.includes(id))
  const selectedOptional = selectedStakeholders.filter((id) => optionalStakeholders.includes(id))

  const criticalMissed = criticalStakeholders.filter((id) => !selectedStakeholders.includes(id))
  const selectedCorrect = [...selectedCritical, ...selectedImportant]
  const selectedIncorrect = selectedStakeholders.filter(
    (id) =>
      !criticalStakeholders.includes(id) && !importantStakeholders.includes(id) && !optionalStakeholders.includes(id),
  )

  // Calculate score
  let score = 0
  score += selectedCritical.length * 30 // Critical stakeholders worth 30 points each
  score += selectedImportant.length * 20 // Important stakeholders worth 20 points each
  score += selectedOptional.length * 10 // Optional stakeholders worth 10 points each
  score -= criticalMissed.length * 25 // Penalty for missing critical stakeholders
  score -= selectedIncorrect.length * 15 // Penalty for incorrect selections

  score = Math.max(0, Math.min(100, score))

  // Generate insights
  const insights: string[] = []
  const strengths: string[] = []
  const recommendations: string[] = []

  if (selectedCritical.length === criticalStakeholders.length) {
    strengths.push("You identified all critical stakeholders for this scenario")
  } else if (criticalMissed.length > 0) {
    recommendations.push(`Consider including these critical stakeholders: ${criticalMissed.join(", ")}`)
  }

  if (selectedStakeholders.length > 6) {
    recommendations.push("Try to keep your working group smaller (3-6 people) for more effective decision-making")
  }

  if (selectedImportant.length > 0) {
    strengths.push("Good selection of important stakeholders who can contribute valuable perspectives")
  }

  const overallQuality = score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Improvement"

  return {
    score,
    criticalMissed,
    overallQuality,
    insights,
    strengths,
    recommendations,
    selectedCorrect,
    selectedIncorrect,
  }
}
