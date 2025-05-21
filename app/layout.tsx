import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from '@/components/LoadingScreen'

export const metadata = {
  title: "BUZZ PARTNERS - WEBマーケティング企業",
  description: "最新のデジタルマーケティング手法で、あなたのビジネスの成長をサポートします。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <LoadingScreen />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
