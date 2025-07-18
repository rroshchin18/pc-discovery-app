"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface ProblemStatement {
  issue: string
  affected: string
  businessImpact: string
}

export interface Submission {
  selectedStakeholders: string[]
  problemStatement: ProblemStatement
  selectedBenefits: string[]
}

interface AppContextType {
  submission: Submission
  updateSubmission: (updates: Partial<Submission>) => void
  resetSubmission: () => void
}

const defaultSubmission: Submission = {
  selectedStakeholders: [],
  problemStatement: {
    issue: "",
    affected: "",
    businessImpact: "",
  },
  selectedBenefits: [],
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [submission, setSubmission] = useState<Submission>(defaultSubmission)

  const updateSubmission = (updates: Partial<Submission>) => {
    console.log("Updating submission:", updates)
    setSubmission((prev) => ({
      ...prev,
      ...updates,
      problemStatement: {
        ...prev.problemStatement,
        ...(updates.problemStatement || {}),
      },
    }))
  }

  const resetSubmission = () => {
    console.log("Resetting submission")
    setSubmission(defaultSubmission)
  }

  return <AppContext.Provider value={{ submission, updateSubmission, resetSubmission }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
