import * as React from 'react';
import { LinkProps } from 'react-router-dom';
import {
  ArchiveLink,
  Container,
  Grid,
  Heading,
  Item,
  ItemDescription,
  ItemInner,
  ItemTechList,
  ItemTitle,
  ItemTop,
  MoreButton,
  ItemLinks,
} from './styles/project';

const Project = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Project.Heading = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Heading {...restProps}>{children}</Heading>;
};

Project.ArchiveLink = ({ children, ...restProps }: LinkProps) => {
  return <ArchiveLink {...restProps}>{children}</ArchiveLink>;
};

Project.MoreButton = ({ children, ...restProps }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <MoreButton {...restProps}>{children}</MoreButton>;
};

Project.Grid = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Grid {...restProps}>{children}</Grid>;
};
Project.Item = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Item {...restProps}>{children}</Item>;
};
Project.ItemDescription = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <ItemDescription {...restProps}>{children}</ItemDescription>;
};
Project.ItemLinks = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <ItemLinks {...restProps}>{children}</ItemLinks>;
};
Project.ItemInner = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <ItemInner {...restProps}>{children}</ItemInner>;
};
Project.ItemTechList = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <ItemTechList {...restProps}>{children}</ItemTechList>;
};
Project.ItemTitle = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};
Project.ItemTop = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <ItemTop {...restProps}>{children}</ItemTop>;
};

export default Project;
