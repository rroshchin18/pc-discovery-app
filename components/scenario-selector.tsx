"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, TrendingUp, Shield, CreditCard, Zap } from "lucide-react"
import { scenarioData } from "@/data/scenarios"

interface ScenarioSelectorProps {
  onSelectScenario: (scenarioIndex: number) => void
}

export function ScenarioSelector({ onSelectScenario }: ScenarioSelectorProps) {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)

  const getScenarioIcon = (scenarioId: string) => {
    switch (scenarioId) {
      case "ach-transfer-delays":
        return <Clock className="w-5 h-5 text-orange-500" />
      case "mobile-security-breach":
        return <Shield className="w-5 h-5 text-red-500" />
      case "credit-application-delays":
        return <CreditCard className="w-5 h-5 text-blue-500" />
      case "digital-platform-outage":
        return <Zap className="w-5 h-5 text-purple-500" />
      case "regulatory-reporting-failure":
        return <AlertTriangle className="w-5 h-5 text-red-600" />
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-500" />
    }
  }

  const getScenarioMetrics = (scenario: any) => {
    // Extract key metrics from each scenario for display
    switch (scenario.id) {
      case "ach-transfer-delays":
        return {
          urgency: "High",
          impact: "Regulatory Risk",
          complexity: "Medium",
        }
      case "mobile-security-breach":
        return {
          urgency: "Critical",
          impact: "2.3M Users",
          complexity: "High",
        }
      case "credit-application-delays":
        return {
          urgency: "High",
          impact: "$2.8M Revenue",
          complexity: "Medium",
        }
      case "digital-platform-outage":
        return {
          urgency: "Critical",
          impact: "8.2M Users",
          complexity: "High",
        }
      case "regulatory-reporting-failure":
        return {
          urgency: "Critical",
          impact: "Compliance Risk",
          complexity: "High",
        }
      default:
        return {
          urgency: "Medium",
          impact: "TBD",
          complexity: "Medium",
        }
    }
  }

  const handleScenarioSelect = (index: number) => {
    setSelectedScenario(scenarioData[index].id)
    onSelectScenario(index)
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Choose Your Product Challenge</h2>
        <p className="text-gray-600">Select a real-world banking scenario to practice your product management skills</p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {scenarioData.map((scenario, index) => {
          const metrics = getScenarioMetrics(scenario)
          const isSelected = selectedScenario === scenario.id

          return (
            <Card
              key={scenario.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected ? "ring-2 ring-blue-500 shadow-md" : ""
              }`}
              onClick={() => handleScenarioSelect(index)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {getScenarioIcon(scenario.id)}
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{scenario.title}</CardTitle>
                    </div>
                  </div>
                  <Badge
                    variant={metrics.urgency === "Critical" ? "destructive" : "secondary"}
                    className="flex-shrink-0"
                  >
                    {metrics.urgency}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{scenario.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md">
                    <TrendingUp className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600">Impact: {metrics.impact}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md">
                    <AlertTriangle className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600">Complexity: {metrics.complexity}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    Includes customer feedback, compliance data, and stakeholder context
                  </div>
                  <Button size="sm" variant={isSelected ? "default" : "outline"} className="ml-2">
                    {isSelected ? "Selected" : "Select"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
