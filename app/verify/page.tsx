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
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

export default function VerificationPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [OTP, setOtp] = React.useState<string>();
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const validateEmail = searchParams.get('validate');

  const handleOtpChange = (newOtpValue: any) => {
    setOtp(newOtpValue);
  };
  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: validateEmail,
        otp: OTP
      });
      if (result?.error) {
        throw new Error(result.error);
      }
      console.log(result);
      if (result) {
        setIsLoading(false);
        router.push('/dashboard');
        setTimeout(() => {
          const now = Date.now();
          const date = new Date(now);
          toast({
            title: 'Login Successful!',
            description: date.toString(),
            variant: 'success'
          });
          router.refresh();
        }, 2000);
      }
    } catch (e) {
      toast({
        title: 'Invald Code!',
        description: 'Please try again',
        variant: 'error'
      });
      setIsLoading(false);
      console.log(e);
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
      {/* {session?.user ? (
        <>
          <div>logged in as {session.user.email as string}</div>
          <Button
            onClick={async () => {
              await signOut();
            }}
            size="lg"
            className="mt-4 w-1/2 h-12"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Out
          </Button>
        </>
      ) : (
        <Button size="lg" className="mt-4 w-1/2 h-12" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Not Authed
        </Button>
      )} */}
    </div>
  );
}
