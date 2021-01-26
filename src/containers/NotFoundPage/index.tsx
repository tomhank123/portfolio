import NotFound from '@/components/notfound';
import LayoutContainer from '@/containers/layout';
import { navDelay } from '@/utils';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const NotFoundPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LayoutContainer>
      <Helmet title='Page Not Found | Duc Tran' />
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames='fadeup'>
            <NotFound>
              <NotFound.Title>404</NotFound.Title>
              <NotFound.Subtitle>Page Not Found</NotFound.Subtitle>
              <NotFound.HomeButton to='/'>Go Home</NotFound.HomeButton>
            </NotFound>
          </CSSTransition>
        )}
      </TransitionGroup>
    </LayoutContainer>
  );
};

export default NotFoundPage;
