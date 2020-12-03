import * as React from 'react';
import { Container, Links, Nav, ResumeButton } from './styles/header';

const Header = ({
  scrollDirection,
  scrolledToTop,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLElement> & { scrollDirection: 'up' | 'down'; scrolledToTop: boolean }) => {
  return (
    <Container scrollDirection={scrollDirection} scrolledToTop={scrolledToTop} {...restProps}>
      {children}
    </Container>
  );
};

Header.Nav = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Links = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Links {...restProps}>{children}</Links>;
};

Header.ResumeButton = ({ children, ...restProps }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <ResumeButton {...restProps}>{children}</ResumeButton>;
};

export default Header;
