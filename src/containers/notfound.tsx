import { NotFound } from '@/components';
import Notfound from '@/components/notfound';
import { navDelay } from '@/utils';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface IProps {}

const NotfoundContainer: FC<IProps> = (props: IProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition timeout={500} classNames='fadeup'>
          <NotFound>
            <Notfound.Title>404</Notfound.Title>
            <Notfound.Subtitle>Page Not Found</Notfound.Subtitle>
            <Notfound.HomeButton to='/'>Go Home</Notfound.HomeButton>
          </NotFound>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default NotfoundContainer;
