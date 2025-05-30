"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Card from "./card"
import { RefreshCw } from "lucide-react"

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

const cardImages = [
  "/images/card1.png",
  "/images/card2.png",
  "/images/card3.png",
  "/images/card4.png",
  "/images/card5.png",
  "/images/card6.png",
  "/images/card7.png",
  "/images/card8.png",
  "/images/card9.png",
  "/images/card10.png",
  "/images/card11.png",
  "/images/card12.png",
]

export default function CardAnimation() {
  const [currentChallenge, setCurrentChallenge] = useState("")
  const [showFinalCard, setShowFinalCard] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const selectRandomCard = () => {
    // Pick a random challenge
    const randomIndex = Math.floor(Math.random() * challengeSentences.length)
    setCurrentChallenge(challengeSentences[randomIndex])

    // Pick a random image (0-4)
    const randomImageIndex = Math.floor(Math.random() * 10)
    setSelectedImage(cardImages[randomImageIndex])
  }

  useEffect(() => {
    // Show animated cards first
    const timer1 = setTimeout(() => {
      // Then show the final challenge card
      setShowFinalCard(true)
      selectRandomCard()
    }, 3000)

    return () => {
      clearTimeout(timer1)
    }
  }, [])

  const handleNewCard = () => {
    // Animate card out and in
    setShowFinalCard(false)
    setTimeout(() => {
      selectRandomCard()
      setShowFinalCard(true)
    }, 300)
  }

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

            {/* Refresh button */}
            <motion.button
              onClick={handleNewCard}
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors duration-200 z-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RefreshCw size={20} className="drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
            </motion.button>

            {/* PNG Image */}
            <motion.div
              className="absolute inset-[2px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Card Image"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
