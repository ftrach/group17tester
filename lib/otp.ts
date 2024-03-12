'use server';
const { randomBytes } = require('crypto');
const nodemailer = require('nodemailer');
import { sql } from '@vercel/postgres';

function generateOTP() {
  let code: string = '';
  do {
    code += randomBytes(3).readUIntBE(0, 3);
    // code += Number.parseInt(randomBytes(3).toString("hex"), 16);
  } while (code.length < 6);

  return code.slice(0, 6);
}

// Assume a function to store OTP in your database, including the user's email and expiration time
async function generateAndStoreOTP(email: string) {
  const otp = await generateOTP();
  const expirationTime = new Date(new Date().getTime() + 5 * 60000); // 5 minutes from now
  const { rows, fields } =
    await sql`INSERT INTO otps (email, otp, expires_at) VALUES (${email},${otp},${expirationTime.toISOString()});`;

  return otp;
}

export async function sendOTPEmail(email: string) {
  console.log(process.env.EMAIL);
  let otp = await generateAndStoreOTP(email);
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  let info = await transporter.sendMail({
    from: `'"ECommerce 17" ${process.env.EMAIL}'`, // sender address
    to: email, // list of receivers
    subject: 'Your OTP', // Subject line
    text: `Your OTP is: ${otp}`, // plain text body
    html: `<b>Your OTP is: ${otp}</b>` // HTML body content
  });

  console.log('Message sent: %s', info.messageId);
  return { otp: otp, message: 'success' };
}

export async function validateOTP(email: string, otp: string) {
  const { rows, fields } = await sql`SELECT *
  FROM otps
  WHERE email = '${email}'
    AND otp = '${otp}'
    AND expires_at > NOW();
  `;
  if (rows.length > 0) {
    return true;
  }
  return false;
}
