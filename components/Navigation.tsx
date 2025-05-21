'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/">
          <div className="flex items-center">
            <div className="relative h-8 md:h-24 aspect-[3/1]">
              <Image 
                src="/bplogo.png" 
                alt="BUZZ PARTNERS" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 120px, 150px"
                priority
              />
            </div>
          </div>
        </Link>

        {/* ナビゲーションリンク */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="hover:text-orange-500 transition-colors">
            サービス
          </Link>
          <Link href="/results" className="hover:text-orange-500 transition-colors">
            実績
          </Link>
          <Button 
            className="bg-orange-500 hover:bg-orange-600"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            お問い合わせ
          </Button>
        </div>
      </div>
    </header>
  )
} 