import * as React from 'react';
import { Container, Text, Pic, Inner, Heading } from './styles/biography';
import { useEffect, useRef } from 'react';
import config from '@/config';
import sr from '@/utils/sr';

const Biography = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  const revealContainer = useRef(null);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current as any, config.srConfig())
    }
  }, []);

  return <Container ref={revealContainer} {...restProps}>{children}</Container>;
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
