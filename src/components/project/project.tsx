import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Container, Header, Body, Footer, Title, Text } from './styles/project';

const Project = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Project.Header = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Header {...restProps}>
      <FontAwesomeIcon icon={['far', 'folder-open']} size='3x' />
      <div>{children}</div>
    </Header>
  );
};

Project.Body = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Body {...restProps}>{children}</Body>;
};

Project.Footer = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Footer {...restProps}>{children}</Footer>;
};

Project.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

Project.Text = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Text {...restProps}>{children}</Text>;
};

export default Project;
