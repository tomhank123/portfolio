import * as React from 'react';
import { Container, Inner } from './styles/loader';

const Loader = ({ isMounted, children, ...restProps }: React.HTMLAttributes<HTMLElement> & { isMounted: boolean; }) => {
  return (
    <Container {...restProps}>
      <Inner isMounted={isMounted}>{children}</Inner>
    </Container>
  );
};

export default Loader;
