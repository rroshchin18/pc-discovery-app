"use client"

import { useEffect, useState } from "react"

interface AnimatedProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function AnimatedProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  className = "",
}: AnimatedProgressRingProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 100)

    return () => clearTimeout(timer)
  }, [progress])

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference

  const getColor = (progress: number) => {
    if (progress >= 80) return "#10b981" // green-500
    if (progress >= 60) return "#f59e0b" // amber-500
    return "#ef4444" // red-500
  }

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="transparent" />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(animatedProgress)}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {/* Progress text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-gray-900">{Math.round(animatedProgress)}%</span>
      </div>
    </div>
  )
}
