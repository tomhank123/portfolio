import * as React from 'react';
import { Container, Text, Pic, Inner, Heading } from './styles/biography';

const Biography = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Biography.Inner = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Inner {...restProps}>{children}</Inner>;
};

Biography.Heading = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Heading {...restProps}>{children}</Heading>;
};

Biography.Text = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Text {...restProps}>{children}</Text>;
};

Biography.Pic = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Pic {...restProps}>{children}</Pic>;
};

export default Biography;
