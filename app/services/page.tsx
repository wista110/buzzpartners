import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, TrendingUp, MessageCircle, ArrowRight } from "lucide-react"

export default function ServicesPage() {
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
              サービス一覧
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              お客様のビジネスの成長をサポートする多様なサービスを提供しています
            </p>
          </div>
        </section>

        {/* サービス一覧 */}
        <section className="py-20 bg-white/90">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
                  title: "データ分析",
                  description: "ユーザー行動を詳細に分析し、効果的なマーケティング戦略を立案します。",
                  features: [
                    "ユーザー行動分析",
                    "コンバージョン率の改善",
                    "データドリブンな意思決定支援"
                  ],
                  color: "bg-orange-100 border-orange-200",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
                  title: "SEO対策",
                  description: "検索エンジン最適化で、あなたのウェブサイトの視認性を高めます。",
                  features: [
                    "キーワード分析",
                    "コンテンツ最適化",
                    "技術的SEO対策"
                  ],
                  color: "bg-blue-100 border-blue-200",
                },
                {
                  icon: <MessageCircle className="h-10 w-10 text-yellow-500" />,
                  title: "SNSマーケティング",
                  description: "ソーシャルメディアを活用して、ブランド認知度を向上させます。",
                  features: [
                    "SNS運用戦略策定",
                    "コンテンツ制作",
                    "エンゲージメント分析"
                  ],
                  color: "bg-yellow-100 border-yellow-200",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className={`${service.color} border hover:shadow-lg transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 p-4 rounded-full bg-white shadow-md w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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