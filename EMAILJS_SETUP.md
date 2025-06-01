# EmailJS Setup Guide for Code.af

This guide will help you complete the EmailJS integration for your contact form.

## Current Status

✅ EmailJS package installed  
✅ Environment variables configured with your keys  
✅ Contact form updated with EmailJS integration  
✅ Error handling and status messages implemented  
✅ Security measures in place

## Required Setup on EmailJS Dashboard

You still need to complete these steps on the EmailJS website:

### 1. Create EmailJS Account & Service

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up or log in
3. Create a new service (Gmail, Outlook, etc.)
4. Note your **Service ID**

### 2. Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{project_type}}` - Type of project
   - `{{budget_range}}` - Budget range
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name (Code.af Team)
3. Note your **Template ID**

### 3. Update Environment Variables

Edit your `.env.local` file and replace the placeholder values:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=-uGWL1_EQqIpOlCmJ
EMAILJS_PRIVATE_KEY=zw2VeUESekv8Afa315TDJ
```

## Email Template Example

Here's a suggested template for your EmailJS template:

```
Subject: New Contact Form Submission - {{project_type}}

Hello {{to_name}},

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}
Budget Range: {{budget_range}}

Message:
{{message}}

Best regards,
Code.af Contact Form
```

## Security Features Implemented

- ✅ Environment variables for sensitive data
- ✅ Client-side validation
- ✅ Error handling with user-friendly messages
- ✅ Rate limiting protection (built into EmailJS)
- ✅ Email format validation
- ✅ Required field validation

## Features Added

- ✅ Real-time form submission with EmailJS
- ✅ Loading spinner during submission
- ✅ Success/error status messages
- ✅ Form reset after successful submission
- ✅ Beautiful status indicators with icons
- ✅ Responsive design maintained

## Testing the Contact Form

After completing the setup:

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message
5. Verify the form shows success/error states

## Troubleshooting

- **"Configuration incomplete" error**: Make sure all environment variables are set
- **Network errors**: Check your internet connection and EmailJS service status
- **Template errors**: Verify your template ID and that all variables are properly set
- **Service errors**: Ensure your EmailJS service is properly configured and active

## Next Steps

1. Complete the EmailJS dashboard setup
2. Update the environment variables
3. Test the contact form
4. Consider adding additional features like auto-reply emails

## Support

If you encounter any issues:

- Check the browser console for detailed error messages
- Verify your EmailJS dashboard configuration
- Ensure all environment variables are correctly set
- Test with a minimal form submission first
