import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  // 创建一个 SMTP 传输对象
  const transporter = nodemailer.createTransport({
    service: 'gmail', // 可以根据需要更换为其他邮件服务提供商
    auth: {
      user: 'samlin1995huazhou@gmail.com', // 替换为你的邮箱地址
      pass: 'samlin18219112207..a' // 替换为你的邮箱密码或应用专用密码
    }
  });

  // 邮件选项
  const mailOptions = {
    from: 'your_email@gmail.com', // 替换为你的邮箱地址
    to: 'recipient_email@example.com', // 替换为接收邮件的邮箱地址
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    // 发送邮件
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
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