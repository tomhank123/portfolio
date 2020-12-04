import * as React from 'react';
import { Container, Title, Overline, EmailLink } from './styles/contact';

const Contact = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Contact.Overline = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Overline {...restProps}>{children}</Overline>;
};

Contact.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

Contact.EmailLink = ({ children, ...restProps }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <EmailLink {...restProps}>{children}</EmailLink>;
};

export default Contact;
