import * as React from 'react';
import { Container, Inner, Title, Subtitle } from './styles/certificate';

const Certificate = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Certificate.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

Certificate.Subtitle = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};


export default Certificate;
