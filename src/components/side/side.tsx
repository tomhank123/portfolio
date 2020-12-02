import * as React from 'react';
import { Container } from './styles/side';

const Side = ({
  orientation,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLElement> & { orientation: 'left' | 'right' }) => {
  return (
    <Container {...restProps} orientation={orientation}>
      {children}
    </Container>
  );
};

export default Side;
