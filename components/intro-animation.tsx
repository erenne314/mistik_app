"use client"

import { motion } from "framer-motion"

export default function IntroAnimation() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 6,
        times: [0, 0.2, 0.8, 1],
      }}
    >
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-yellow-400 opacity-70 blur-md" />
        <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full max-h-full"
          >
            {/* Example SVG content - replace with your desired image */}
            <circle cx="40" cy="40" r="30" fill="url(#introGradient)" />
            <path
              d="M30 35 L35 40 L50 25"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="introGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#39c5bb" />
                <stop offset="50%" stopColor="#ffdd57" />
                <stop offset="100%" stopColor="#ff9f43" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  )
}
