"use client"

import { Users, Target, TrendingUp, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileNavigationProps {
  currentStep: "stakeholders" | "problem" | "benefits" | "complete"
  completedSteps: string[]
  onStepChange: (step: string) => void
}

export function MobileNavigation({ currentStep, completedSteps, onStepChange }: MobileNavigationProps) {
  const steps = [
    {
      id: "stakeholders",
      label: "Stakeholders",
      shortLabel: "Who",
      icon: Users,
    },
    {
      id: "problem",
      label: "Problem",
      shortLabel: "What",
      icon: Target,
    },
    {
      id: "benefits",
      label: "Impact",
      shortLabel: "Value",
      icon: TrendingUp,
    },
    {
      id: "complete",
      label: "Review",
      shortLabel: "Done",
      icon: CheckCircle,
    },
  ]

  const currentIndex = steps.findIndex((step) => step.id === currentStep)
  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < steps.length - 1 && completedSteps.includes(currentStep)

  return (
    <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-2">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => canGoPrevious && onStepChange(steps[currentIndex - 1].id)}
          disabled={!canGoPrevious}
          className="touch-target"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex space-x-1">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = completedSteps.includes(step.id)

            return (
              <div
                key={step.id}
                className={cn(
                  "flex flex-col items-center space-y-1 px-2 py-1 rounded-lg transition-colors touch-target",
                  isActive ? "bg-blue-50 text-blue-600" : isCompleted ? "bg-green-50 text-green-600" : "text-gray-400",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{step.shortLabel}</span>
              </div>
            )
          })}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => canGoNext && onStepChange(steps[currentIndex + 1].id)}
          disabled={!canGoNext}
          className="touch-target"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Current step info */}
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-900">{steps[currentIndex]?.label}</h2>
        <p className="text-sm text-gray-500">
          Step {currentIndex + 1} of {steps.length}
        </p>
      </div>
    </div>
  )
}
