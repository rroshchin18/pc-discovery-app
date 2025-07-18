export interface ProblemAnalysis {
  score: number
  insights: string[]
  issueQuality: number
  affectedQuality: number
  impactQuality: number
  overallClarity: "excellent" | "good" | "needs-work" | "poor"
  reasoning: string
}

const rootCauseIndicators = [
  "manual process",
  "system failure",
  "integration issue",
  "workflow bottleneck",
  "process gap",
  "automation failure",
  "handoff delay",
  "system limitation",
  "configuration error",
  "capacity constraint",
  "resource shortage",
  "technical debt",
  "legacy system",
  "data synchronization",
  "api timeout",
  "database issue",
]

const symptomIndicators = [
  "customers complain",
  "users frustrated",
  "slow response",
  "poor experience",
  "dissatisfied",
  "unhappy",
  "angry customers",
  "bad reviews",
  "complaints",
  "frustrated users",
]

const bankingDomainTerms = [
  "regulatory",
  "compliance",
  "ach",
  "processing",
  "sla",
  "fraud",
  "aml",
  "kyc",
  "cfpb",
  "occ",
  "examination",
  "audit",
  "penalty",
  "risk",
  "capital",
  "liquidity",
  "dispute",
  "resolution",
  "reporting",
  "filing",
]

export function analyzeProblemStatement(
  problemStatement: {
    issue: string
    affected: string
    businessImpact: string
  },
  scenarioId: string,
): ProblemAnalysis {
  let issueQuality = 0
  let affectedQuality = 0
  let impactQuality = 0
  const insights: string[] = []

  // Analyze issue quality
  if (problemStatement.issue.length > 50) {
    issueQuality += 40
  } else if (problemStatement.issue.length > 20) {
    issueQuality += 25
  }

  if (
    problemStatement.issue.toLowerCase().includes("root cause") ||
    problemStatement.issue.toLowerCase().includes("process") ||
    problemStatement.issue.toLowerCase().includes("system")
  ) {
    issueQuality += 30
    insights.push("Good focus on root causes rather than symptoms")
  }

  if (
    problemStatement.issue.toLowerCase().includes("regulatory") ||
    problemStatement.issue.toLowerCase().includes("compliance")
  ) {
    issueQuality += 30
    insights.push("Correctly identified regulatory/compliance aspects")
  }

  // Analyze affected parties
  if (problemStatement.affected.length > 30) {
    affectedQuality += 50
  } else if (problemStatement.affected.length > 15) {
    affectedQuality += 30
  }

  if (
    problemStatement.affected.toLowerCase().includes("customer") &&
    problemStatement.affected.toLowerCase().includes("internal")
  ) {
    affectedQuality += 50
    insights.push("Comprehensive view of both external and internal impacts")
  }

  // Analyze business impact alignment
  const expectedImpacts = {
    "ach-transfer-delays": ["regulatory-risk", "operational-cost"],
    "mobile-security-breach": ["customer-trust", "regulatory-risk"],
    "credit-application-delays": ["revenue", "customer-trust"],
    "digital-platform-outage": ["customer-trust", "revenue"],
    "regulatory-reporting-failure": ["regulatory-risk", "operational-cost"],
  }

  const scenarioExpected = expectedImpacts[scenarioId as keyof typeof expectedImpacts] || ["regulatory-risk"]

  if (scenarioExpected.includes(problemStatement.businessImpact)) {
    impactQuality = 100
    insights.push("Business impact aligns well with the scenario context")
  } else {
    impactQuality = 50
    insights.push("Consider if there might be a more primary business impact for this scenario")
  }

  const score = Math.round((issueQuality + affectedQuality + impactQuality) / 3)

  let reasoning = ""
  if (score >= 80) {
    reasoning =
      "Excellent problem statement with clear issue definition, comprehensive stakeholder analysis, and appropriate business impact assessment."
  } else if (score >= 60) {
    reasoning = "Good problem statement with room for improvement in specificity and completeness."
  } else {
    reasoning = "Problem statement needs more detail and focus on root causes and business impact."
  }

  return {
    score,
    insights,
    issueQuality: Math.min(100, issueQuality),
    affectedQuality: Math.min(100, affectedQuality),
    impactQuality,
    reasoning,
  }
}
