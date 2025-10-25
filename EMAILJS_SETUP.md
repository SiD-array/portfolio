# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form messages in your email.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. **Important**: Note down your **Service ID** (starts with `service_`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
You can reply directly to this email to respond to {{from_name}}.
```

4. **Important**: Note down your **Template ID** (starts with `template_`)

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Update Configuration

1. Open `src/config/emailjs.js` in your project
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',      // From Step 2
  TEMPLATE_ID: 'your_actual_template_id',    // From Step 3
  PUBLIC_KEY: 'your_actual_public_key',      // From Step 4
  TO_EMAIL: 'sid.work0403@gmail.com'         // Your email (already set)
}
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

### Common Issues:

1. **"Invalid service ID"**: Double-check your service ID
2. **"Invalid template ID"**: Verify your template ID
3. **"Invalid public key"**: Make sure your public key is correct
4. **Emails not received**: Check your spam folder

### EmailJS Limits (Free Plan):
- 200 emails per month
- 2 email services
- 2 email templates

## Security Notes

- Never commit your EmailJS credentials to version control
- Consider using environment variables for production
- The current setup is safe for portfolio websites

## Next Steps

Once everything is working:
1. Test thoroughly with different email addresses
2. Consider upgrading to a paid plan if you expect high volume
3. Add email validation if needed
4. Consider adding a "copy to sender" feature

Your contact form is now ready to receive real emails! 🎉
