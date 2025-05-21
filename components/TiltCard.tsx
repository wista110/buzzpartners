'use client'

import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { useInView } from 'react-intersection-observer'

interface TiltCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export const TiltCard: React.FC<TiltCardProps> = ({ title, description, icon, className = '' }) => {
  const tiltRef = useRef<HTMLDivElement>(null)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  useEffect(() => {
    // モバイルチェック
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const element = tiltRef.current

    if (!element || isMobile) return

    // Tiltの設定
    VanillaTilt.init(element, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
      scale: 1.05
    })

    return () => {
      if (element) {
        // @ts-ignore - VanillaTiltの型定義にvanillaTiltがないため
        element.vanillaTilt?.destroy()
      }
    }
  }, [])

  return (
    <div
      ref={(el) => {
        // 両方のrefを設定
        if (el) {
          tiltRef.current = el
          inViewRef(el)
        }
      }}
      className={`
        transform transition-all duration-700
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        bg-amber-50 rounded-xl p-6 shadow-lg
        hover:bg-amber-100
        ${className}
      `}
    >
      {icon && <div className="text-4xl mb-4 text-primary">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
} 