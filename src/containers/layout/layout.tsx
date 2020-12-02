import { Layout } from '@/components';
import { EmailContainer, FooterContainer, HeaderContainer, SocialContainer } from '@/containers';
import * as React from 'react';
import { FC } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const LayoutContainer: FC<IProps> = ({ children }: IProps) => {
  return (
    <Layout>
      <SocialContainer />
      <EmailContainer />
      <HeaderContainer />
      <div id='content'>
        {children}
        <FooterContainer />
      </div>
    </Layout>
  );
};

export default LayoutContainer;
