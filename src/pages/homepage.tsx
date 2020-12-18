import {
  BiographyContainer,
  ContactContainer,
  FeaturedContainer,
  JobsContainer,
  JumbotronContainer,
  LayoutContainer,
  ProjectContainer,
} from '@/containers';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const Homepage = () => {
  return (
    <LayoutContainer>
      <Helmet title='Duc Tran' />

      <main className='fill-height' style={{ counterReset: 'section' }}>
        <JumbotronContainer />
        <BiographyContainer />
        <JobsContainer />
        <FeaturedContainer />
        <ProjectContainer />
        <ContactContainer />
      </main>
    </LayoutContainer>
  );
};

export default Homepage;
