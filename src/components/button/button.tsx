import * as React from 'react';
import { Container } from './styles/button';

const Button = ({ children, ...restProps }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Button;
