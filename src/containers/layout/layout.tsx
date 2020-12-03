import { Layout } from '@/components';
import { EmailContainer, FooterContainer, HeaderContainer, LoaderContainer, SocialContainer } from '@/containers';
import * as React from 'react';
import { FC, useState } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const LayoutContainer: FC<IProps> = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoaderContainer finishLoading={() => setIsLoading(false)} />
      ) : (
        <Layout>
          <SocialContainer />
          <EmailContainer />
          <HeaderContainer />
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
