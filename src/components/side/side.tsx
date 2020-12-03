import { loaderDelay } from '@/utils';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container } from './styles/side';

const Side = ({
  isHome,
  orientation,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLElement> & { orientation: 'left' | 'right'; isHome: boolean }) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, [isHome]);

  return (
    <Container {...restProps} orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </Container>
  );
};

export default Side;
