'use client'

import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  { position: "マーケティングディレクター", image: "/marketingdirector.png?height=300&width=300" },
  { position: "動画クリエイター", image: "/videocreator.png?height=300&width=300" },
  { position: "WEBエンジニア", image: "/webengineer.png?height=300&width=300" },
  { position: "デザイナー", image: "/designer.png?height=300&width=300" },
  { position: "SNSプロデューサー", image: "/snsproducer.png?height=300&width=300" },
]

export const HorizontalScroll = () => {
  return (
    <section id="team" className="relative py-20 overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-40 h-40 rounded-full bg-blue-300/20 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-orange-300/20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ヘッダー */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">私たちのチーム</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            経験豊富なプロフェッショナルが、あなたのビジネスをサポートします。
          </p>
        </div>

        {/* チームメンバーグリッド - モバイルではスクロール可能な横並び */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
            {teamMembers.map((member, index) => (
              <Link 
                href="/team" 
                key={index}
                className="relative flex-shrink-0 w-64 md:w-auto snap-center group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.position}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* ホバーオーバーレイ */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-center px-4">
                        チームメンバーについて詳しく見る
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-lg">{member.position}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
