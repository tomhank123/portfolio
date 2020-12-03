import * as React from 'react';
import { LinkProps } from 'react-router-dom';
import { Container, Title, Subtitle, HomeButton } from './styles/notfound';

const Notfound = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Notfound.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

Notfound.Subtitle = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Notfound.HomeButton = ({ children, ...restProps }: LinkProps) => {
  return <HomeButton {...restProps}>{children}</HomeButton>;
};

export default Notfound;
