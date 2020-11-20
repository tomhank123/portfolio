import * as React from 'react';
import { Container, Inner, Subtitle, Title } from './styles/technology';

const Technology = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Technology.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

Technology.Subtitle = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

export default Technology;
