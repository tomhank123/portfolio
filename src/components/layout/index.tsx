import Email from '@/components/email';
import Header from '@/components/header';
import LoadingIndicator from '@/components/LoadingIndicator';
import Social from '@/components/social';
import FooterContainer from '@/containers/Footer';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper from './Wrapper';

interface IProps {
  children?: React.ReactNode;
}

const LayoutContainer: FC<IProps> = ({ children }: IProps) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading, location.hash]);

  return (
    <>
      {isLoading && isHome ? (
        <LoadingIndicator finishLoading={() => setIsLoading(false)} />
      ) : (
        <Wrapper>
          <Header isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />
          <div id='content'>
            {children}
            <FooterContainer />
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default LayoutContainer;
