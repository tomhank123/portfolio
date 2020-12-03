import { Layout } from '@/components';
import { EmailContainer, FooterContainer, HeaderContainer, LoaderContainer, SocialContainer } from '@/containers';
import * as React from 'react';
import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface IProps {
  children?: React.ReactNode;
}

const LayoutContainer: FC<IProps> = ({ children }: IProps) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && isHome ? (
        <LoaderContainer finishLoading={() => setIsLoading(false)} />
      ) : (
        <Layout>
          <HeaderContainer isHome={isHome} />
          <SocialContainer isHome={isHome} />
          <EmailContainer isHome={isHome} />
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
