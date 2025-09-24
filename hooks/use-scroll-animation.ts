import { useEffect, useRef } from 'react'

export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: animate all elements immediately
      const timer = setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll')
        elements.forEach((el) => {
          el.classList.add('animate-fade-in')
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      }, 500)
      return () => clearTimeout(timer)
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Wait for DOM to be ready and try multiple times
    let attempts = 0
    const maxAttempts = 10
    
    const tryObserve = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      if (elements.length > 0) {
        elements.forEach((el) => {
          if (observerRef.current) {
            observerRef.current.observe(el)
          }
        })
      } else if (attempts < maxAttempts) {
        attempts++
        setTimeout(tryObserve, 100)
      }
    }
    
    setTimeout(tryObserve, 200)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return observerRef.current
}
