import { Layout } from '@/components';
import Email from '@/components/email';
import { FooterContainer, HeaderContainer, LoaderContainer, SocialContainer } from '@/containers';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
        <LoaderContainer finishLoading={() => setIsLoading(false)} />
      ) : (
        <Layout>
          <HeaderContainer isHome={isHome} />
          <SocialContainer isHome={isHome} />
          <Email isHome={isHome} />
          <div id='content'>
            {children}
            <FooterContainer />
          </div>
        </Layout>
      )}
    </>
  );
};

export default LayoutContainer;
