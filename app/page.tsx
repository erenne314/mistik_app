"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import IntroAnimation from "@/components/intro-animation"
import StartButton from "@/components/start-button"
import CardAnimation from "@/components/card-animation"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [showStart, setShowStart] = useState(false)
  const [showCards, setShowCards] = useState(false)

  useEffect(() => {
    // Show start button after intro animation completes
    const timer = setTimeout(() => {
      setShowIntro(false)
      setShowStart(true)
    }, 6000) // 6 seconds for intro animation

    return () => clearTimeout(timer)
  }, [])

  const handleStart = () => {
    setShowStart(false)
    setShowCards(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      <AnimatePresence>
        {showIntro && <IntroAnimation />}

        {showStart && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <StartButton onClick={handleStart} />
          </motion.div>
        )}

        {showCards && <CardAnimation />}
      </AnimatePresence>
    </main>
  )
}
