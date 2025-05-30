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
        <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
          <img src="/images/intro_logo.png" alt="Intro Logo" className="w-full h-full object-cover rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  )
}
