'use server';
const { randomBytes } = require('crypto');
import { sql } from '@vercel/postgres';
import type { User } from 'next-auth';
// import { Resend } from 'resend';

// const resend: Resend = new Resend(process.env.RESEND_API_KEY);

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
  let otp = await generateAndStoreOTP(email);
  let data = {
    email: email,
    otp: otp
  };
  //send the OTP to user email
  console.log(process.env.URL);
  const res = await fetch(`${process.env.URL}/api/mail`, {
    method: 'POST', // Specify the method
    headers: {
      // Content-Type header tells the server what kind of data is being sent
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // Convert the JavaScript object to a JSON string
  });
  console.log('Message sent!');
  return { otp: otp, message: 'success' };
}

export async function validateOTP(
  credentials: Partial<Record<'email' | 'otp', unknown>>
) {
  // Validate that email and otp are strings
  if (
    typeof credentials.email === 'string' &&
    typeof credentials.otp === 'string'
  ) {
    try {
      const { rows } = await sql`
        SELECT * FROM otps
        WHERE email = ${credentials.email} AND otp = ${credentials.otp} AND used = false AND expires_at > NOW();
      `;

      console.log(rows);

      if (rows.length > 0) {
        // OTP is valid, mark otp as used and return user
        const makeOtpUsed = await sql`
        UPDATE otps
        SET used = true
        WHERE id = ${rows[0].id};
      `;
        //return the user
        const user = await sql`
      SELECT *
      FROM users
      WHERE email = ${credentials.email};
      `;
        // if user.rows[0] is undefined, then the user does not exist in the database
        console.log(user.rows[0]);
        if (user.rows[0] === undefined) {
          throw new Error('User does not exist');
        }
        //parse query result into a user to return in authorize()
        const parsedUser: User = {
          name: user.rows[0].name,
          email: user.rows[0].email,
          image: null
        };
        return parsedUser;
        // Adjust this return value based on your needs
      } else {
        // OTP is invalid or expired
        return null; // Or throw an error, based on your application logic
      }
    } catch (error) {
      console.error('Error validating OTP:', error);
      throw new Error('Failed to validate OTP due to an error');
    }
  } else {
    throw new Error('Email and OTP must be provided as strings');
  }
}
