"use client"

import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { RotateCcw, Menu } from "lucide-react"
import { useState } from "react"

interface TopNavigationProps {
  currentScenario: number
  totalScenarios: number
  onScenarioChange: (scenario: number) => void
}

export function TopNavigation({ currentScenario, totalScenarios, onScenarioChange }: TopNavigationProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const progressPercentage = ((currentScenario + 1) / totalScenarios) * 100

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex h-16 bg-white border-b border-gray-200 px-6 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-900">ProblemFit Training</h1>
          <div className="text-sm text-gray-500">Interactive Product Discovery Workshop</div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Progress:</span>
            <Progress value={progressPercentage} className="w-32" />
            <span className="text-sm text-gray-600">
              {currentScenario + 1}/{totalScenarios}
            </span>
          </div>

          <Select
            value={currentScenario.toString()}
            onValueChange={(value) => onScenarioChange(Number.parseInt(value))}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select scenario" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: totalScenarios }, (_, i) => (
                <SelectItem key={i} value={i.toString()}>
                  Scenario {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm" className="touch-target bg-transparent">
            <RotateCcw className="w-4 h-4 mr-2" />
            Restart
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="touch-target"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">ProblemFit</h1>
              <p className="text-xs text-gray-500">Product Discovery</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">
                {currentScenario + 1}/{totalScenarios}
              </div>
              <Progress value={progressPercentage} className="w-16 h-2" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
            <div className="space-y-3">
              <Select
                value={currentScenario.toString()}
                onValueChange={(value) => onScenarioChange(Number.parseInt(value))}
              >
                <SelectTrigger className="w-full touch-target">
                  <SelectValue placeholder="Select scenario" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: totalScenarios }, (_, i) => (
                    <SelectItem key={i} value={i.toString()}>
                      Scenario {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" className="w-full touch-target bg-transparent">
                <RotateCcw className="w-4 h-4 mr-2" />
                Restart Training
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
