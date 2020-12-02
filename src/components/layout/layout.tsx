import * as React from 'react';
import { Container } from './styles/layout';

const Layout = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Layout;
