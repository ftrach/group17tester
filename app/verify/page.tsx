'use client';
import * as React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useToast } from '@/components/ui/use-toast';

export default function VerificationPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [OTP, setOtp] = React.useState<string>('');
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  // Correctly accessing the query parameters
  const validateEmail = typeof router.query.validate === 'string' ? router.query.validate : '';

  const handleOtpChange = (newOtpValue: string) => {
    setOtp(newOtpValue);
  };

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Ensuring `OTP` and `validateEmail` are not null or undefined before proceeding
    if (validateEmail && OTP) {
      const result = await signIn('credentials', {
        redirect: false,
        email: validateEmail,
        otp: OTP,
      });
      console.log(result);
      if (result) {
        setIsLoading(false);
        router.push('/dashboard');
        setTimeout(() => {
          toast({
            title: 'Login Successful!',
            description: 'You have been successfully logged in.',
            variant: 'default',
          });
          // Assuming you want to force a reload to reset state or props
          router.reload();
        }, 2000);
      } else {
        setIsLoading(false);
        toast({
          title: 'Invalid Code!',
          description: 'Please try again',
          variant: 'default',
        });
      }
    }
  }

  return (
    <div className="w-1/4 text-center mx-auto content-center">
      <div className="h-56"></div>
      <div className="flex-item py-4 text-2xl">
        <h2>Enter your One-Time-Passcode</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <InputOTP
          maxLength={6}
          onChange={handleOtpChange}
          render={({ slots }) => (
            <>
              <InputOTPGroup>
                {slots.slice(0, 3).map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} />
                ))}{' '}
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                {slots.slice(3).map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} />
                ))}
              </InputOTPGroup>
            </>
          )}
        />
        <div className="flex flex-col mx-auto">
          <Button
            size="lg"
            className="mx-auto mt-4 w-1/2 h-12"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Verify
          </Button>
          <a className="flex mx-auto">Send Code Again</a>
        </div>
      </form>
    </div>
  );
}
