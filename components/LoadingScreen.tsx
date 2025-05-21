'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // ローディングアニメーションの制御
    const timer = setTimeout(() => {
      setIsLoading(false)
      // フェードアウト後に要素を完全に非表示
      setTimeout(() => {
        setIsHidden(true)
      }, 1500)
    }, 2000) // ローディング時間

    return () => clearTimeout(timer)
  }, [])

  if (isHidden) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white
        ${!isLoading ? 'animate-fadeout' : ''}`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* ロゴ */}
        <div className="relative w-64 h-16">
          <Image
            src="/bplogo.png"
            alt="BUZZ PARTNERS"
            fill
            className="object-contain"
          />
        </div>
        
        {/* ローディングバー */}
        <div className="w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-500 animate-loading-bar" />
        </div>
      </div>
    </div>
  )
} 