import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailToSendTo = process.env.CONTACT_EMAIL_TO;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields (name, email, message)' },
        { status: 400 }
      );
    }
    if (!emailToSendTo) {
      console.error('Missing CONTACT_EMAIL_TO environment variable');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [emailToSendTo],
        subject: `Portfolio Contact Form: Message from ${name}`,
        reply_to: email,
        html: `<p>You received a new message from your portfolio contact form:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br>')}</p>`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      if (error) {
        console.error('Resend API Error:', error);
        return NextResponse.json(
          { message: 'Error sending email', error: error.message },
          { status: 500 }
        );
      }

      console.log('Resend success data:', data);
      return NextResponse.json(
        { message: 'Form submitted successfully!', emailId: data?.id },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      const errorMessage =
        emailError instanceof Error
          ? emailError.message
          : 'Failed to send email due to an unexpected error.';
      return NextResponse.json(
        { message: 'Error sending email', error: errorMessage },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form request:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json(
      { message: 'Error processing form', error: errorMessage },
      { status: 500 }
    );
  }
}
