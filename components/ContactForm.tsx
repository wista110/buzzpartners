'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'

const formSchema = z.object({
  firstName: z.string().min(1, '姓を入力してください'),
  lastName: z.string().min(1, '名を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  company: z.string().min(1, '会社名を入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上で入力してください'),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('送信に失敗しました')

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* フォームの内容 */}
    </form>
  )
} 