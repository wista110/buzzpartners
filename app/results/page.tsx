import { Navigation } from "@/components/Navigation"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Star } from "lucide-react"

export default function ResultsPage() {
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
              実績
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              私たちは多くの企業様のマーケティング戦略をサポートし、素晴らしい結果を出してきました
            </p>
          </div>
        </section>

        {/* 実績コンテンツ */}
        <section className="py-20 bg-white/90">
          <div className="container mx-auto px-4">
            {/* 主要な実績指標 */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
                  title: "売上向上率",
                  value: "120%",
                  description: "クライアントの平均売上向上率"
                },
                {
                  icon: <Users className="h-8 w-8 text-blue-500" />,
                  title: "顧客満足度",
                  value: "98%",
                  description: "サービス満足度調査結果"
                },
                {
                  icon: <Star className="h-8 w-8 text-yellow-500" />,
                  title: "支援企業数",
                  value: "1,000+",
                  description: "これまでに支援した企業の総数"
                }
              ].map((stat, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-fit mb-4">{stat.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                    <p className="text-3xl font-bold text-orange-500 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 事例紹介 */}
            <h2 className="text-2xl font-bold text-center mb-6">成功事例</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  company: "株式会社A",
                  industry: "EC事業",
                  achievement: "売上200%増加",
                  description: "SEO対策とSNSマーケティングの統合戦略により、オーガニックトラフィックが3倍に増加し、売上が大幅に向上。",
                },
                {
                  company: "B株式会社",
                  industry: "サービス業",
                  achievement: "顧客獲得数150%増",
                  description: "データ分析に基づくターゲティング精度の向上により、広告費用を抑えながら新規顧客の獲得数を大幅に改善。",
                },
              ].map((case_, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{case_.company}</h3>
                    <p className="text-gray-600 mb-2">業種: {case_.industry}</p>
                    <p className="text-orange-500 font-semibold mb-4">
                      達成成果: {case_.achievement}
                    </p>
                    <p className="text-gray-700">{case_.description}</p>
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