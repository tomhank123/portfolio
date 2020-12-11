import * as React from 'react';
import { Container } from './styles/table';

const Table = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Table;
