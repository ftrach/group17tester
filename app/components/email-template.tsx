import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName
}) => (
  <div>
    <h1>This is your one-time-passcode, Thanks {firstName}!</h1>
  </div>
);

export default EmailTemplate;
