import { NextRequest, NextResponse } from 'next/server'

export interface EmailData {
  to: string
  subject: string
  applicationNumber: string
  applicantName: string
  serviceType: string
  details: Record<string, string>
}

export async function POST(request: NextRequest) {
  try {
    const emailData: EmailData = await request.json()

    // In a real application, you would use a service like SendGrid, AWS SES, or Resend
    // For now, we'll simulate the email sending
    console.log('Simulating email send:', emailData)

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Format the email content
    const emailContent = `
申請を受け付けました

${emailData.applicantName} 様

この度は、${emailData.serviceType}の申請をいただき、ありがとうございます。
以下の内容で申請を受け付けました。

申請番号: ${emailData.applicationNumber}

【申請内容】
${Object.entries(emailData.details)
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n')}

【次のステップ】
1. 必要書類をご準備ください
2. 申請番号を控えて、窓口にお越しください
3. 正式な手続きを行います

ご不明な点がございましたら、下記までお問い合わせください。

桜県 県民サービスセンター
電話: 0123-45-6789
受付時間: 平日 9:00-17:00

※このメールは自動送信されています。返信はできません。
    `

    // In production, this would actually send an email
    // For demo purposes, we'll just return success
    return NextResponse.json({
      success: true,
      message: 'メールを送信しました',
      emailContent: emailContent,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'メールの送信に失敗しました' 
      },
      { status: 500 }
    )
  }
}