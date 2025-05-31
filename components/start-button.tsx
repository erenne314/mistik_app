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
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <img src="/images/tufa_start.png" alt="Start Logo" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </motion.button>
  )
}
