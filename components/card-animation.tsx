"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Card from "./card"

const challengeSentences = [
  "Try not to laugh for 30 seconds!",
  "Tell a joke without smiling!",
  "Speak in an accent for 1 minute!",
  "Do your best celebrity impression!",
  "Make up a song about your day!",
  "Try to balance on one foot for 30 seconds!",
  "Draw a perfect circle with your eyes closed!",
  "Tell a story using only sound effects!",
  "Do your best robot dance move!",
  "Recite the alphabet backwards in 15 seconds!",
]

export default function CardAnimation() {
  const [currentChallenge, setCurrentChallenge] = useState("")
  const [showFinalCard, setShowFinalCard] = useState(false)
  const [selectedSvg, setSelectedSvg] = useState(0)

  useEffect(() => {
    // Show animated cards first
    const timer1 = setTimeout(() => {
      // Then show the final challenge card
      setShowFinalCard(true)
      // Pick a random challenge
      const randomIndex = Math.floor(Math.random() * challengeSentences.length)
      setCurrentChallenge(challengeSentences[randomIndex])

      // Pick a random SVG (0-4)
      const randomSvgIndex = Math.floor(Math.random() * 5)
      setSelectedSvg(randomSvgIndex)
    }, 3000)

    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background animated cards */}
      <Card
        color="from-yellow-400 to-orange-500"
        initialX={-100}
        initialY={50}
        delay={0.2}
        duration={5}
        rotateRange={[-10, 5]}
        scaleRange={[0.8, 1]}
      />

      <Card
        color="from-orange-500 to-red-500"
        initialX={100}
        initialY={-50}
        delay={0.4}
        duration={6}
        rotateRange={[5, 15]}
        scaleRange={[0.7, 0.9]}
      />

      <Card
        color="from-cyan-400 to-blue-500"
        initialX={-50}
        initialY={-100}
        delay={0.6}
        duration={5.5}
        rotateRange={[-15, -5]}
        scaleRange={[0.75, 0.95]}
      />

      <Card
        color="from-purple-500 to-pink-500"
        initialX={50}
        initialY={100}
        delay={0.8}
        duration={5.2}
        rotateRange={[0, 10]}
        scaleRange={[0.85, 1.05]}
      />

      {/* Final challenge card */}
      {showFinalCard && (
        <motion.div
          className="absolute z-10 w-72 md:w-80 h-96 md:h-[28rem] bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50, rotateZ: 10, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateZ: 0,
            scale: 1,
            rotate: [0, 2, -2, 0],
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.5,
            rotate: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            y: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-cyan-400 to-orange-500 animate-pulse" />

          {/* Inner content */}
          <div className="absolute inset-[2px] rounded-2xl bg-gray-800 flex flex-col items-center justify-center p-6">
            {/* Close button */}
            <motion.button
              onClick={() => window.location.reload()}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-red-400 transition-colors duration-200 z-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </motion.button>

            {/* SVG Image */}
            <motion.div
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              {selectedSvg === 0 && (
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full max-h-full"
                >
                  <circle cx="100" cy="100" r="80" fill="url(#gradient1)" />
                  <path
                    d="M70 90 L90 110 L130 70"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#39c5bb" />
                      <stop offset="50%" stopColor="#ffdd57" />
                      <stop offset="100%" stopColor="#ff9f43" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {selectedSvg === 1 && (
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full max-h-full"
                >
                  <rect x="50" y="50" width="100" height="100" rx="20" fill="url(#gradient2)" />
                  <circle cx="100" cy="100" r="30" fill="white" />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff9f43" />
                      <stop offset="50%" stopColor="#39c5bb" />
                      <stop offset="100%" stopColor="#ffdd57" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {selectedSvg === 2 && (
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full max-h-full"
                >
                  <polygon points="100,30 170,170 30,170" fill="url(#gradient3)" />
                  <circle cx="100" cy="120" r="25" fill="white" />
                  <defs>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffdd57" />
                      <stop offset="50%" stopColor="#ff9f43" />
                      <stop offset="100%" stopColor="#39c5bb" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {selectedSvg === 3 && (
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full max-h-full"
                >
                  <path
                    d="M100 30 L130 70 L180 70 L140 110 L160 160 L100 130 L40 160 L60 110 L20 70 L70 70 Z"
                    fill="url(#gradient4)"
                  />
                  <circle cx="100" cy="100" r="20" fill="white" />
                  <defs>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#39c5bb" />
                      <stop offset="50%" stopColor="#ff9f43" />
                      <stop offset="100%" stopColor="#ffdd57" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {selectedSvg === 4 && (
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full max-h-full"
                >
                  <ellipse cx="100" cy="100" rx="80" ry="60" fill="url(#gradient5)" />
                  <rect x="80" y="80" width="40" height="40" rx="5" fill="white" />
                  <defs>
                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff9f43" />
                      <stop offset="50%" stopColor="#ffdd57" />
                      <stop offset="100%" stopColor="#39c5bb" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
