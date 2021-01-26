import Layout from '@/components/layout';
import { navDelay } from '@/utils';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeButton from './HomeButton';
import Subtitle from './Subtitle';
import Title from './Title';
import Wrapper from './Wrapper';

const NotFoundPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      <Helmet title='Page Not Found | Duc Tran' />

      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames='fadeup'>
            <Wrapper>
              <Title>404</Title>
              <Subtitle>Page Not Found</Subtitle>
              <HomeButton to='/'>Go Home</HomeButton>
            </Wrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
};

export default NotFoundPage;
