"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, Users, FileText, BarChart3, ArrowRight } from "lucide-react"

interface ScenarioIntroductionProps {
  scenario: any
  onNext: () => void
}

export function ScenarioIntroduction({ scenario, onNext }: ScenarioIntroductionProps) {
  const getUrgencyBadge = (scenarioId: string) => {
    const urgencyMap: { [key: string]: { variant: "destructive" | "secondary" | "default"; label: string } } = {
      "ach-transfer-delays": { variant: "secondary", label: "High Priority" },
      "mobile-security-breach": { variant: "destructive", label: "Critical" },
      "credit-application-delays": { variant: "secondary", label: "High Priority" },
      "digital-platform-outage": { variant: "destructive", label: "Critical" },
      "regulatory-reporting-failure": { variant: "destructive", label: "Critical" },
    }
    return urgencyMap[scenarioId] || { variant: "secondary", label: "Medium Priority" }
  }

  const getScenarioStats = (scenario: any) => {
    switch (scenario.id) {
      case "ach-transfer-delays":
        return {
          affectedCustomers: "Thousands",
          timeframe: "12+ days",
          businessRisk: "Regulatory penalties",
        }
      case "mobile-security-breach":
        return {
          affectedCustomers: "2.3M users",
          timeframe: "Immediate",
          businessRisk: "Security breach",
        }
      case "credit-application-delays":
        return {
          affectedCustomers: "New applicants",
          timeframe: "12+ days",
          businessRisk: "$2.8M revenue loss",
        }
      case "digital-platform-outage":
        return {
          affectedCustomers: "8.2M users",
          timeframe: "4+ hours",
          businessRisk: "Service disruption",
        }
      case "regulatory-reporting-failure":
        return {
          affectedCustomers: "Internal systems",
          timeframe: "6+ weeks",
          businessRisk: "Compliance violations",
        }
      default:
        return {
          affectedCustomers: "Multiple",
          timeframe: "Ongoing",
          businessRisk: "Business impact",
        }
    }
  }

  const urgencyBadge = getUrgencyBadge(scenario.id)
  const stats = getScenarioStats(scenario)

  const handleStartAnalysis = () => {
    console.log("Starting analysis for scenario:", scenario.id)
    onNext()
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{scenario.title}</h1>
          <Badge variant={urgencyBadge.variant} className="text-sm">
            {urgencyBadge.label}
          </Badge>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">{scenario.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Affected Users</div>
              <div className="text-lg font-bold text-blue-600">{stats.affectedCustomers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Duration</div>
              <div className="text-lg font-bold text-orange-600">{stats.timeframe}</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Business Risk</div>
              <div className="text-lg font-bold text-red-600">{stats.businessRisk}</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-gray-600" />
            <span>What You'll Analyze</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-gray-900">Customer Feedback</div>
                <div className="text-sm text-gray-600">Real customer complaints and concerns</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-gray-900">Internal Communications</div>
                <div className="text-sm text-gray-600">Compliance memos and operational alerts</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-gray-900">Performance Metrics</div>
                <div className="text-sm text-gray-600">Key business and operational data</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-gray-900">Stakeholder Context</div>
                <div className="text-sm text-gray-600">Key people and organizational structure</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-gray-600" />
            <span>Your Learning Objectives</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-medium text-gray-900">Identify Key Stakeholders</div>
                <div className="text-sm text-gray-600">Learn to map the right people for product decisions</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-medium text-gray-900">Define the Core Problem</div>
                <div className="text-sm text-gray-600">Practice writing clear, actionable problem statements</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-medium text-gray-900">Estimate Business Impact</div>
                <div className="text-sm text-gray-600">Quantify the value of solving this problem</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button
          onClick={handleStartAnalysis}
          size="lg"
          className="px-8 py-3 text-lg hover:scale-105 transition-transform duration-200"
        >
          Start Analysis
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}
