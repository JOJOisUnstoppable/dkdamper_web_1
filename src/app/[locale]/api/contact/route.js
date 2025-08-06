import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  // 验证必填字段
  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL, // 必须是您验证的域名邮箱
      to: process.env.RECIPIENT_EMAIL,
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ message: 'Error sending email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ 
      message: 'Email sent successfully',
      id: data.id 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}