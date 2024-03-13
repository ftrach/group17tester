import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  // rate limit
  // authorization

  const { email, otp } = await request.json();

  const { data, error } = await resend.emails.send({
    from: 'ECommerce <auth@aspirationquest.com>',
    to: [email],
    subject: 'ECommerce - Your One-Time-Password',
    html: `  <div class="container">
    <h1>Your One-Time Password (OTP)</h1>
    <p>Dear user,</p>
    <p>Your One-Time Password (OTP) for accessing your account is:</p>
    <p class="otp">${otp}</p>
    <p>Please enter this password at this <a href="${process.env.URL}/verify?validate=${email}">link</a>. Remember, this OTP is valid for only 15 minutes and should not be shared with anyone.</p>
    <p>If you didn't request this code, please ignore this email or contact support if you have concerns.</p>
    <p>Best regards,</p>
    <p>Your ECommerce</p>
</div>`
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: 'Email sent successfully' });
}
