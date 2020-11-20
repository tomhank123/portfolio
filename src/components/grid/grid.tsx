import * as React from 'react';
import { Container, Item } from './styles/grid';

const Grid = ({
  children,
  sm = 3,
  md = 4,
  lg = 6,
  ...restProps
}: React.HTMLAttributes<HTMLElement> & { sm?: number; md?: number; lg?: number }) => {
  return (
    <Container sm={sm} md={md} lg={lg} {...restProps}>
      {children}
    </Container>
  );
};

Grid.Item = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Item {...restProps}>{children}</Item>;
};

export default Grid;
