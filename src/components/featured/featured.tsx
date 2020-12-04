import * as React from 'react';
import {
  Container,
  Content,
  Description,
  Heading,
  Image,
  Links,
  Overline,
  Project,
  TechList,
  Title,
} from './styles/featured';

const Featured = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Featured.Heading = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Heading {...restProps}>{children}</Heading>;
};

Featured.Project = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Project {...restProps}>{children}</Project>;
};

Featured.Content = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Content {...restProps}>{children}</Content>;
};

Featured.Overline = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Overline {...restProps}>{children}</Overline>;
};

Featured.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

Featured.Description = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Description {...restProps}>{children}</Description>;
};

Featured.TechList = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <TechList {...restProps}>{children}</TechList>;
};

Featured.Links = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Links {...restProps}>{children}</Links>;
};

Featured.Image = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Image {...restProps}>{children}</Image>;
};

export default Featured;
