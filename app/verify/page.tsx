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

export default function VerificationPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    //TODO: Create entry in database
    console.log(event.target);
    // const response = await sendOTPEmail(email);
    // await createNewUser(FormData);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <div className="w-1/4 text-center mx-auto content-center ">
      <div className="h-56"></div>
      <div className="flex-item py-4 text-2xl">
        <h2>Enter your One-Time-Passcode</h2>
      </div>
      <form onSubmit={onSubmit}>
        <InputOTP
          maxLength={6}
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

        <Button size="lg" className="mt-4 w-1/2 h-12" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Verify
        </Button>
      </form>
    </div>
  );
}
