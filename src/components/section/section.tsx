import * as React from 'react';
import { Container, Title, Prefix, Body } from './styles/section';

const Section = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Section.Title = ({ prefix, children, ...restProps }: React.HTMLAttributes<HTMLElement> & { prefix?: string; }) => {
  return (
    <Title {...restProps}>
      {prefix && <Prefix>{prefix}</Prefix>}
      {children}
    </Title>
  );
};

Section.Body = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Body {...restProps}>{children}</Body>
  );
};

export default Section;
