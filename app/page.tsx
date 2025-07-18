"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { WelcomeScreen } from "@/components/welcome-screen"
import { AppProvider } from "@/context/app-context"

const LearningFlow = dynamic(() => import("@/components/learning-flow").then(mod => ({ default: mod.LearningFlow })), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
})

export default function Home() {
  const [showLearning, setShowLearning] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleStartLearning = () => {
    setShowLearning(true)
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <AppProvider>
      {!showLearning ? <WelcomeScreen onStart={handleStartLearning} /> : <LearningFlow />}
    </AppProvider>
  )
}