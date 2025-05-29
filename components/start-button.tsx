"use client"

import { motion } from "framer-motion"

interface StartButtonProps {
  onClick: () => void
}

export default function StartButton({ onClick }: StartButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-64 h-64 md:w-72 md:h-72 bg-gray-800 rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {/* Animated border glow with heartbeat */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-cyan-400"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Inner content */}
      <div className="absolute inset-[2px] rounded-2xl bg-gray-800 flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full max-h-full"
          >
            {/* Example SVG content - replace with your desired image */}
            <circle cx="60" cy="60" r="50" fill="url(#startGradient)" />
            <polygon points="45,40 75,60 45,80" fill="white" />
            <defs>
              <linearGradient id="startGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffdd57" />
                <stop offset="50%" stopColor="#ff9f43" />
                <stop offset="100%" stopColor="#39c5bb" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.button>
  )
}
