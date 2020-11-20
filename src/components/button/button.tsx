import * as React from 'react';
import { ButtonProps } from 'react-bootstrap';
import { Container } from './styles/button';

const Button = ({ children, ...restProps }: ButtonProps) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Button;
