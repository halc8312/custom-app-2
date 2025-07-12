# Document Download and Email Features

## Overview
The service pages now have document download and email sending functionality implemented.

## Features Implemented

### 1. Document Download
- **Functionality**: Users can download their application forms as HTML documents
- **Format**: HTML files that can be printed or converted to PDF
- **Content**: Includes all application details, application number, and instructions

### 2. Email Sending
- **API Route**: `/api/send-email`
- **Functionality**: Sends confirmation emails when applications are submitted
- **Note**: Currently simulated for demo purposes (no actual emails sent)

## Updated Pages
1. **Certificate Service** (`/services/certificate`)
   - Added download button for certificate applications
   - Sends confirmation email on submission

2. **Moving Service** (`/services/moving`)
   - Added download button for moving applications
   - Sends confirmation email on submission

## Technical Implementation

### Document Generator Utility
Location: `/utils/documentGenerator.ts`

Functions:
- `generateHTMLDocument(data)`: Creates formatted HTML document
- `downloadDocument(html, filename)`: Triggers browser download
- `generateFilename(type, appNumber)`: Creates standardized filenames

### Email API Route
Location: `/app/api/send-email/route.ts`

- POST endpoint for sending emails
- Currently logs to console (demo mode)
- Returns success/failure response

## Usage Example

```typescript
// Download document
const documentData = {
  title: '証明書発行申請書',
  applicationNumber: 'CERT-2024-123456',
  applicantName: '桜県 太郎',
  date: new Date().toISOString(),
  details: {
    '証明書の種類': '住民票の写し',
    '必要部数': '1通',
    // ... other details
  }
}
const htmlContent = generateHTMLDocument(documentData)
downloadDocument(htmlContent, 'certificate_application.html')

// Send email
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(emailData)
})
```

## Future Enhancements
1. Integrate real email service (SendGrid, AWS SES, or Resend)
2. Add PDF generation using @react-pdf/renderer
3. Set up environment variables for email configuration
4. Add email templates for different service types
5. Implement file storage for generated documents

## Environment Variables (To be added)
```env
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM_ADDRESS=noreply@sakura-ken.jp
EMAIL_SERVICE_PROVIDER=resend
```

## Note
This is a demo implementation. For production use:
- Configure actual email service
- Add proper error handling
- Implement rate limiting
- Add user authentication
- Store application records in database