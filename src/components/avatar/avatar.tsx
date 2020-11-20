import * as React from 'react';
import { Container, Title, Subtitle, Image } from './styles/avatar';

const Avatar = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Avatar.Image = ({ ...restProps }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <Image {...restProps} />;
};

Avatar.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

Avatar.Subtitle = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

export default Avatar;
