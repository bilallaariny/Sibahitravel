"use client"

import { useRef, useEffect, useState, type RefObject } from "react"

interface IntersectionObserverOptions extends IntersectionObserverInit {}

export function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverOptions,
  animationKey?: string, // New parameter to store animation state in session storage
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  // Initialize hasAnimated to false for SSR.
  // The actual state from sessionStorage will be loaded in a useEffect.
  const [hasAnimated, setHasAnimated] = useState(false)

  // Effect to load animation state from sessionStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined" && animationKey) {
      const storedState = sessionStorage.getItem(animationKey) === "true"
      if (storedState) {
        setHasAnimated(true) // Update state if animation already occurred in this session
      }
    }
  }, [animationKey]) // Run once on client mount for sessionStorage check

  useEffect(() => {
    // If animation has already occurred for this key (from sessionStorage), no need to observe
    // This check ensures the observer is not set up if the animation was already marked as played
    if (hasAnimated && animationKey) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        // Ensure it hasn't animated yet
        setHasAnimated(true) // Set to true once it intersects
        if (animationKey && typeof window !== "undefined") {
          sessionStorage.setItem(animationKey, "true") // Persist state in session storage
        }
        observer.disconnect() // Stop observing after the first intersection
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options, hasAnimated, animationKey]) // Add animationKey to dependencies

  return [ref, hasAnimated]
}
