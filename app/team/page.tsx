import { Navigation } from "@/components/Navigation"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[url('/backgroundsun.png')] bg-cover bg-fixed bg-center">
      {/* 半透明のオーバーレイ */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* コンテンツ */}
      <div className="relative z-10">
        <Navigation />
        
        {/* ヒーローセクション */}
        <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20">
          {/* 白の半透明オーバーレイ */}
          <div className="absolute inset-0 bg-white/60 z-[1]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-6">
              チーム紹介
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              私たちは、マーケティングのプロフェッショナルとして、
              お客様のビジネスの成長をサポートします。
            </p>
          </div>
        </section>

        {/* チームメンバー一覧 */}
        <section className="py-20 bg-white/90">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "1ppe-",
                  position: "代表取締役CEO",
                  description: "10年以上のデジタルマーケティング経験を持つ。複数のスタートアップの成長に貢献。",
                  image: "/snsproducer.png"
                },
                {
                  name: "G-Y",
                  position: "マーケティングディレクター",
                  description: "データ分析のスペシャリスト。効果的なマーケティング戦略の立案を得意とする。",
                  image: "/marketingdirector.png"
                },
                {
                  name: "date Fujinari",
                  position: "個人開発者",
                  description: "Next.jsのエキスパート。Fultterでの開発も得意。",
                  image: "/webengineer.png"
                },
                {
                  name: "K-yosi",
                  position: "クリエイティブディレクター",
                  description: "広告クリエイティブのエキスパート。数々の受賞歴を持つ。",
                  image: "/designer.png"
                },
                {
                  name: "INP Hal",
                  position: "ビデオクリエイター",
                  description: "広告クリエイティブのエキスパート。数々の受賞歴を持つ。",
                  image: "/videocreator.png"
                },
              ].map((member, index) => (
                <Card 
                  key={index} 
                  className="bg-white hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-orange-500 font-semibold mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}