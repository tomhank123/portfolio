import * as React from 'react';
import { Container, Item, Link, List } from './styles/social';

const Social = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Social.List = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <List {...restProps}>{children}</List>;
};

Social.Item = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Item {...restProps}>{children}</Item>;
};

Social.Link = ({ children, ...restProps }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <Link {...restProps}>{children}</Link>;
};

export default Social;
