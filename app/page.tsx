"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BarChart3, TrendingUp, Users, MessageCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { HorizontalScroll } from '@/components/HorizontalScroll'
import { TiltCard } from '@/components/TiltCard'

const slideLeftKeyframes = {
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-100%)' }
};

const slideRightKeyframes = {
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0)' }
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 実績データの配列を定義
  const testimonials = [
    {
      id: 1,
      companyName: "WISTA",
      position: "個人開発者",
      image: "/wista.png",
      testimonial: "営業をbuzz partnersさんに任せることで、自社製品の売り上げが120%増加しました。"
    },
    {
      id: 2,
      companyName: "株式会社HOLOGRAM",
      position: "代表取締役",
      image: "/hologram.png",
      testimonial: "buzz partnersさんのサポートのおかげで、弊社の売上が大幅に向上しました。プロフェッショナルなアドバイスと迅速な対応に感謝しています。"
    },
    {
      id: 3,
      companyName: "SALFORD",
      position: "CEO",
      image: "/salford.png",
      testimonial: "SEOの改善により閲覧数が増え、使いやすくモダンなデザインのサイトで、ユーザーの満足度が高まりました。"
    },
    {
      id: 4,
      companyName: "焼肉高田屋",
      position: "店長",
      image: "/takadaya.png",
      testimonial: "SNSの運用サポートのおかげで、フォロワー数が10000人を超えました。"
    },
    {
      id: 5,
      companyName: "RIMBERIO",
      position: "マーケティング担当者",
      image: "/rimberio.png", // RIMBERIOのロゴ画像
      testimonial: "オリジナルTシャツプリントの需要拡大に伴い、デジタルマーケティング戦略の見直しが必要でした。的確な分析と戦略提案により、新規顧客の獲得数が150%増加し、リピート率も向上しました。"
    }
  ];

  return (
    <div className="min-h-screen bg-[url('/backgroundsun.png')] bg-cover bg-fixed bg-center">
      {/* 半透明のオーバーレイ */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* コンテンツ（z-indexを使用して前面に表示） */}
      <div className="relative z-10">
        {/* ヘッダー */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* ロゴコンテナ */}
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
             {/* ナビゲーション */}
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
        </header>

        {/* ヒーローセクション（パララックス効果） */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* 白の半透明オーバーレイを追加 */}
          <div className="absolute inset-0 bg-white/60 z-[1]"></div>

          {/* 既存の背景エフェクト */}
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-300/30 blur-xl"></div>
            <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-green-300/30 blur-xl"></div>
            <div className="absolute bottom-20 left-1/4 w-60 h-60 rounded-full bg-teal-300/30 blur-xl"></div>
          </div>

          <div className="container mx-auto px-4 z-20 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div
                className="space-y-6"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  あなたのビジネスを<span className="text-orange-500">加速</span>させる
                  <br />
                  <span className="text-blue-500">マーケティング</span>戦略
                </h1>
                <p className="text-xl text-gray-600">
                  最新のデジタルマーケティング手法で、あなたのビジネスの成長をサポートします。
                </p>
                <div className="flex gap-4">
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-6"
                    onClick={() => {
                      const contactSection = document.getElementById('contact')
                      contactSection?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    無料相談を予約する
                  </Button>
                  <Link href="/services">
                    <Button variant="outline" className="text-lg px-6 py-6">
                      サービスを見る
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="relative"
                style={{
                  transform: `translateY(${scrollY * -0.1}px)`,
                }}
              >
                <div className="relative h-[480px] w-full">
                  <Image
                    src="/heroimg.png"
                    alt="マーケティングイメージ"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div
                  className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-4 border border-orange-100"
                  style={{
                    transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px) rotate(${scrollY * 0.02}deg)`,
                  }}
                >
                  <TrendingUp className="h-8 w-8 text-orange-500 mb-2" />
                  <p className="font-bold">売上120%アップ！</p>
                </div>
                <div
                  className="absolute -top-5 -right-5 bg-white rounded-lg shadow-xl p-4 border border-blue-100"
                  style={{
                    transform: `translate(${scrollY * -0.15}px, ${scrollY * 0.15}px) rotate(${scrollY * -0.02}deg)`,
                  }}
                >
                  <Users className="h-8 w-8 text-blue-500 mb-2" />
                  <p className="font-bold">顧客満足度98%</p>
                </div>
                <div
                  className="absolute top-1/2 right-[-20px] bg-white rounded-lg shadow-xl p-4 border border-green-100"
                  style={{
                    transform: `translate(${scrollY * 0.12}px, ${scrollY * -0.18}px) rotate(${scrollY * 0.03}deg)`,
                  }}
                >
                  <MessageCircle className="h-8 w-8 text-green-500 mb-2" />
                  <p className="font-bold">リピート率95%</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 to-transparent z-10"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          ></div>
        </section>

        {/* サービスセクション */}
        <section id="services" className="relative py-12 md:py-20 overflow-hidden bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">私たちのサービス</h2>
            <p className="text-gray-600 text-center mb-12">
              お客様のビジネスの成長をサポートする多様なサービスを提供しています
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TiltCard
                title="デジタルマーケティング"
                description="最新のデジタルマーケティング戦略を活用し、お客様のビジネスの成長を支援します。"
                icon={<BarChart3 className="h-10 w-10 text-orange-500" />}
              />
              <TiltCard
                title="ブランディング"
                description="独自のブランドアイデンティティを確立し、市場での存在感を高めます。"
                icon={<TrendingUp className="h-10 w-10 text-blue-500" />}
              />
              <TiltCard
                title="コンサルティング"
                description="経験豊富な専門家が、ビジネスの課題解決をサポートします。"
                icon={<MessageCircle className="h-10 w-10 text-yellow-500" />}
              />
            </div>
          </div>
        </section>

        {/* 実績セクション */}
        <section
          id="results"
          ref={statsRef}
          className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">実績</h2>
              <p className="text-xl max-w-3xl mx-auto">
                私たちは多くの企業様のマーケティング戦略をサポートし、素晴らしい結果を出してきました。
              </p>
            </div>

            <div className="relative overflow-hidden">
              {/* 左から右へ流れる統計情報 */}
              <div className="flex whitespace-nowrap animate-scroll-right">
                {[
                  { number: "250+", label: "クライアント数" },
                  { number: "120%", label: "平均売上増加率" },
                  { number: "98%", label: "顧客満足度" },
                  { number: "15+", label: "受賞歴" },
                  { number: "95%", label: "リピート率" },
                  // 繰り返し用に同じ項目をもう一度
                  { number: "250+", label: "クライアント数" },
                  { number: "120%", label: "平均売上増加率" },
                  { number: "98%", label: "顧客満足度" },
                  { number: "15+", label: "受賞歴" },
                  { number: "95%", label: "リピート率" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="inline-block w-[250px] mx-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                    <p className="text-lg">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* 右から左へ流れる事例 */}
              <div className="mt-16 relative overflow-hidden">
                <div className="flex whitespace-nowrap animate-scroll-left">
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <Link 
                      href="/results" 
                      key={`${testimonial.id}-${index}`}
                    >
                      <Card
                        className="inline-block w-[350px] mx-4 bg-white text-gray-800 cursor-pointer hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex-shrink-0 overflow-hidden">
                              <Image
                                src={testimonial.image}
                                alt={`${testimonial.companyName}のロゴ`}
                                width={48}
                                height={48}
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-base truncate">{testimonial.companyName}</p>
                              <p className="text-sm text-gray-500">{testimonial.position}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                            「{testimonial.testimonial}」
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* チームセクション */}
        <HorizontalScroll />

        {/* お問い合わせセクション */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-green-500 to-teal-500 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-5"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">お問い合わせ</h2>
              <p className="text-xl max-w-3xl mx-auto">ご質問やご相談がございましたら、お気軽にお問い合わせください。</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block">
                        お名前（姓）
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block">
                        お名前（名）
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block">
                      メールアドレス
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block">
                      会社名
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block">
                      メッセージ
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-white/90">送信する</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">メール</h3>
                    <p>info@marketboost.example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">電話</h3>
                    <p>03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">住所</h3>
                    <p>
                      〒100-0001
                      <br />
                      東京都千代田区1-1-1
                      <br />
                      マーケットビル5F
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2025 BUZZ PARTNERS. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
