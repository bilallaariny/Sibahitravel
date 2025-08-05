"use client"

import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" // Import cn utility

interface AnimatedButtonProps {
  children: ReactNode
  className?: string // Add className prop
}

export default function AnimatedButton({ children, className }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      className={cn(
        // Use cn to merge classes
        "group relative bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-8 py-3 text-lg flex items-center overflow-hidden",
        className, // Apply external className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="relative z-10 flex items-center"
        animate={{ x: isHovered ? -8 : 0 }} // Shift text left by 8px to make space for the arrow
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children} {/* Render children here */}
      </motion.span>
      <motion.span
        className="absolute flex items-center"
        style={{ right: 0 }} // Position the arrow container at the very right edge of the button
        initial={{ x: 32, opacity: 0 }} // Start 32px to the right (outside px-8 padding), invisible
        animate={{ x: isHovered ? -13 : 32, opacity: isHovered ? 1 : 0 }} // Slide to 8px from right edge, fade in/out
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <ArrowRight className="h-5 w-5" />
      </motion.span>
    </Button>
  )
}
