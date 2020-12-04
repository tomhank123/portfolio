import config from '@/config';
import sr from '@/utils/sr';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Container, EmailLink, Overline, Title } from './styles/contact';

const Contact = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  const revealContainer = useRef(null);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current as any, config.srConfig())
    }
  }, []);

  return <Container ref={revealContainer} {...restProps}>{children}</Container>;
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
