import * as React from 'react';
import { LinkProps } from 'react-router-dom';
import { Container, HomeButton, Subtitle, Title } from './styles/notfound';

interface NotfoundProps extends React.HTMLProps<HTMLElement> {}

const propChilds = {
  Title: React.forwardRef<HTMLHeadingElement, React.ComponentProps<'h1'>>((restProps, ref) => (
    <Title {...restProps} ref={ref} />
  )),
  Subtitle: React.forwardRef<HTMLHeadingElement, React.ComponentProps<'h2'>>((restProps, ref) => (
    <Subtitle {...restProps} ref={ref} />
  )),
  HomeButton: ({ children, ...restProps }: LinkProps) => {
    return <HomeButton {...restProps}>{children}</HomeButton>;
  },
};

type Notfound = React.ForwardRefExoticComponent<NotfoundProps> & {
  Title: typeof propChilds.Title;
  Subtitle: typeof propChilds.Subtitle;
  HomeButton: typeof propChilds.HomeButton;
};

const Notfound = React.forwardRef<HTMLDivElement, NotfoundProps>(({ children }: NotfoundProps, ref) => {
  return <Container ref={ref}>{children}</Container>;
}) as Notfound;

Notfound.displayName = 'Notfound';

Notfound.Title = propChilds.Title;
Notfound.Subtitle = propChilds.Subtitle;
Notfound.HomeButton = propChilds.HomeButton;

export default Notfound;
