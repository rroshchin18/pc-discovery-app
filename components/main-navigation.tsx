"use client"

import { Users, Target, TrendingUp, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface MainNavigationProps {
  currentStep: "stakeholders" | "problem" | "benefits" | "complete"
  completedSteps: string[]
}

export function MainNavigation({ currentStep, completedSteps }: MainNavigationProps) {
  const steps = [
    {
      id: "stakeholders",
      label: "Identify Stakeholders",
      description: "Who are the key people involved?",
      icon: Users,
    },
    {
      id: "problem",
      label: "Define Problem",
      description: "What problem are we solving?",
      icon: Target,
    },
    {
      id: "benefits",
      label: "Estimate Impact",
      description: "What value will this create?",
      icon: TrendingUp,
    },
    {
      id: "complete",
      label: "Review & Submit",
      description: "Finalize your analysis",
      icon: CheckCircle,
    },
  ]

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = completedSteps.includes(step.id)
              const isAccessible = index === 0 || completedSteps.includes(steps[index - 1].id)

              return (
                <div
                  key={step.id}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 text-sm font-medium border-b-2 transition-colors",
                    isActive
                      ? "border-blue-500 text-blue-600"
                      : isCompleted
                        ? "border-green-500 text-green-600"
                        : isAccessible
                          ? "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                          : "border-transparent text-gray-300 cursor-not-allowed",
                  )}
                >
                  <Icon className={cn("w-4 h-4", isCompleted && "text-green-500")} />
                  <div className="hidden sm:block">
                    <div className="font-medium">{step.label}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                  <div className="sm:hidden font-medium">{step.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
