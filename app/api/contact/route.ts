import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // ここにメール送信処理やデータベースへの保存処理を実装
    // 例：
    // - SendGridやGmailなどのメールサービス
    // - データベース（PostgreSQL、MongoDB等）への保存
    
    return NextResponse.json({ message: 'お問い合わせを受け付けました' })
  } catch (error) {
    return NextResponse.json(
      { error: 'エラーが発生しました' },
      { status: 500 }
    )
  }
} 