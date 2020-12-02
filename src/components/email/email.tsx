import * as React from 'react';
import { Container, Link } from './styles/email';

const Email = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Email.Link = ({ children, ...restProps }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <Link {...restProps}>{children}</Link>;
};

export default Email;
