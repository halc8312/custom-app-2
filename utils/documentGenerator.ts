// Utility functions for generating downloadable documents

export interface DocumentData {
  title: string
  applicationNumber: string
  applicantName: string
  date: string
  details: Record<string, string>
  additionalInfo?: string
}

export function generateHTMLDocument(data: DocumentData): string {
  const formattedDate = new Date(data.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const detailsHTML = Object.entries(data.details)
    .map(([key, value]) => `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">${key}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
      </tr>
    `)
    .join('')

  return `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title}</title>
  <style>
    body {
      font-family: 'Hiragino Sans', 'Meiryo', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 2px solid #1a73e8;
    }
    .logo {
      font-size: 24px;
      color: #1a73e8;
      margin-bottom: 10px;
    }
    h1 {
      color: #1a73e8;
      margin-bottom: 10px;
    }
    .application-number {
      font-size: 20px;
      font-weight: bold;
      color: #d1387d;
      margin: 20px 0;
    }
    .content {
      margin-bottom: 40px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .footer {
      margin-top: 60px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .stamp-area {
      margin: 40px 0;
      padding: 20px;
      border: 2px dashed #999;
      text-align: center;
      color: #999;
    }
    @media print {
      body {
        padding: 20px;
      }
      .no-print {
        display: none;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">🌸 桜県</div>
    <h1>${data.title}</h1>
    <div class="application-number">申請番号: ${data.applicationNumber}</div>
    <p>申請日: ${formattedDate}</p>
  </div>

  <div class="content">
    <h2>申請者情報</h2>
    <p><strong>氏名:</strong> ${data.applicantName}</p>
    
    <h2>申請内容</h2>
    <table>
      ${detailsHTML}
    </table>

    ${data.additionalInfo ? `
      <div style="margin-top: 30px; padding: 20px; background-color: #f0f8ff; border-radius: 8px;">
        <h3>備考</h3>
        <p>${data.additionalInfo}</p>
      </div>
    ` : ''}

    <div class="stamp-area">
      <p>受付印</p>
      <p style="margin-top: 40px;">（この欄は記入しないでください）</p>
    </div>
  </div>

  <div class="footer">
    <p>この書類は申請内容の控えです。正式な手続きは窓口で行ってください。</p>
    <p>桜県 県民サービスセンター</p>
    <p>〒123-4567 桜県桜花市中央1-1-1 | 電話: 0123-45-6789</p>
  </div>
</body>
</html>
  `
}

export function downloadDocument(htmlContent: string, filename: string) {
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

export function generateFilename(type: string, applicationNumber: string): string {
  const date = new Date().toISOString().split('T')[0]
  return `${type}_${applicationNumber}_${date}.html`
}