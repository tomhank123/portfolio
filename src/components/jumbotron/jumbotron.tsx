import * as React from 'react';
import { Container, Inner, Prefix, Subtitle, Text, Title } from './styles/jumbotron';

const Jumbotron = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Jumbotron.Prefix = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Prefix {...restProps}>{children}</Prefix>;
};

Jumbotron.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.Text = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Text {...restProps}>{children}</Text>;
};

export default Jumbotron;
