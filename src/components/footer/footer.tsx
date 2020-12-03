import * as React from 'react';
import { Container, SocialLinks, Credit } from './styles/footer';

const Footer = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.SocialLinks = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <SocialLinks {...restProps}>{children}</SocialLinks>;
};

Footer.Credit = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Credit {...restProps}>{children}</Credit>;
};

export default Footer;
