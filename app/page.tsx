"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { LearningFlow } from "@/components/learning-flow"
import { AppProvider } from "@/context/app-context"

export default function Home() {
  const [showLearning, setShowLearning] = useState(false)

  const handleStartLearning = () => {
    setShowLearning(true)
  }

  return <AppProvider>{!showLearning ? <WelcomeScreen onStart={handleStartLearning} /> : <LearningFlow />}</AppProvider>
}
