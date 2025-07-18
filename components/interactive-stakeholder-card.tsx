"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

interface StakeholderCardProps {
  stakeholder: {
    id: string
    name: string
    role: string
    department: string
    description: string
    expertise: string[]
    priority: string
  }
  isSelected: boolean
  showFeedback: boolean
  onToggle: (id: string, checked: boolean) => void
  disabled?: boolean
}

export function InteractiveStakeholderCard({
  stakeholder,
  isSelected,
  showFeedback,
  onToggle,
  disabled = false,
}: StakeholderCardProps) {
  const handleToggle = (checked: boolean) => {
    if (!disabled) {
      onToggle(stakeholder.id, checked)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "important":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "optional":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getFeedbackIcon = () => {
    if (!showFeedback) return null

    if (stakeholder.priority === "critical" && isSelected) {
      return <CheckCircle className="w-4 h-4 text-green-500" />
    } else if (stakeholder.priority === "critical" && !isSelected) {
      return <XCircle className="w-4 h-4 text-red-500" />
    } else if (stakeholder.priority === "important") {
      return <AlertTriangle className="w-4 h-4 text-yellow-500" />
    }
    return null
  }

  return (
    <Card
      className={`transition-all duration-200 cursor-pointer hover:shadow-md ${
        isSelected ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-gray-50"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={() => !disabled && handleToggle(!isSelected)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <Checkbox
              checked={isSelected}
              onCheckedChange={handleToggle}
              disabled={disabled}
              className="mt-1"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex-1">
              <CardTitle className="text-sm font-medium">{stakeholder.name}</CardTitle>
              <p className="text-xs text-gray-600 mt-1">{stakeholder.role}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getFeedbackIcon()}
            <Badge variant="outline" className={`text-xs ${getPriorityColor(stakeholder.priority)}`}>
              {stakeholder.department}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-gray-600 mb-3">{stakeholder.description}</p>
        <div className="flex flex-wrap gap-1">
          {stakeholder.expertise.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
