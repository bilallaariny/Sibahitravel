"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  baseText: string
  wordsToAnimate: string[] // e.g., ["Design", "publicité"]
  className?: string
  typingSpeed?: number
  erasingSpeed?: number
  delayBetweenActions?: number // Delay after typing a word before erasing, or after erasing before typing next
}

export function TypewriterEffect({
  baseText,
  wordsToAnimate,
  className,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenActions = 1000,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState(baseText)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [animationFinished, setAnimationFinished] = useState(false)

  useEffect(() => {
    if (animationFinished) return

    const currentWord = wordsToAnimate[currentWordIndex]

    let timer: NodeJS.Timeout

    if (isDeleting) {
      // Erasing phase
      if (currentCharIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(baseText + currentWord.substring(0, currentCharIndex - 1))
          setCurrentCharIndex((prev) => prev - 1)
        }, erasingSpeed)
      } else {
        // Finished erasing current word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => prev + 1) // Move to the next word
        // Add a delay before starting to type the next word
        timer = setTimeout(() => {
          // No action needed here, the next useEffect cycle will handle typing
        }, delayBetweenActions)
      }
    } else {
      // Typing phase
      if (currentCharIndex < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(baseText + currentWord.substring(0, currentCharIndex + 1))
          setCurrentCharIndex((prev) => prev + 1)
        }, typingSpeed)
      } else {
        // Finished typing current word
        if (currentWordIndex < wordsToAnimate.length - 1) {
          // If there are more words to animate, start deleting after a delay
          timer = setTimeout(() => {
            setIsDeleting(true)
          }, delayBetweenActions)
        } else {
          // All words animated, animation is finished
          setAnimationFinished(true)
        }
      }
    }

    return () => clearTimeout(timer)
  }, [
    currentCharIndex,
    currentWordIndex,
    isDeleting,
    animationFinished,
    baseText,
    wordsToAnimate,
    typingSpeed,
    erasingSpeed,
    delayBetweenActions,
  ])

  return (
    <h2
      className={cn(
        "text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg min-h-[4.5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem]",
        className,
      )}
    >
      {displayText}
      {!animationFinished && <span className="animate-pulse">|</span>} {/* Blinking cursor */}
    </h2>
  )
}
