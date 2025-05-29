"use client"

import { motion } from "framer-motion"

interface CardProps {
  color: string
  initialX: number
  initialY: number
  delay: number
  duration: number
  rotateRange: [number, number]
  scaleRange: [number, number]
}

export default function Card({ color, initialX, initialY, delay, duration, rotateRange, scaleRange }: CardProps) {
  return (
    <motion.div
      className={`absolute w-64 h-80 md:w-72 md:h-96 rounded-2xl shadow-xl overflow-hidden`}
      initial={{
        x: initialX,
        y: initialY,
        opacity: 0,
        rotateZ: rotateRange[0],
        scale: scaleRange[0],
      }}
      animate={{
        x: [initialX, -initialX, initialX],
        y: [initialY, -initialY, initialY],
        opacity: [0, 0.7, 0.5, 0.7, 0],
        rotateZ: [rotateRange[0], rotateRange[1], rotateRange[0]],
        scale: [scaleRange[0], scaleRange[1], scaleRange[0]],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    >
      {/* Card glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-80 blur-sm`} />

      {/* Card inner */}
      <div className="absolute inset-[1px] rounded-2xl bg-gray-800 bg-opacity-90" />

      {/* Card decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white opacity-10" />
        <div className="absolute bottom-8 right-6 w-16 h-16 rounded-full bg-white opacity-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white opacity-5" />
      </div>
    </motion.div>
  )
}
