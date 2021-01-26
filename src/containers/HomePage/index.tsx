import {
  BiographyContainer,
  ContactContainer,
  FeaturedContainer,
  JobsContainer,
  JumbotronContainer,
  ProjectContainer,
} from '@/containers';
import Layout from '@/components/Layout';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const Homepage = () => {
  return (
    <Layout>
      <Helmet title='Duc Tran' />

      <main className='fill-height' style={{ counterReset: 'section' }}>
        <JumbotronContainer />
        <BiographyContainer />
        <JobsContainer />
        <FeaturedContainer />
        <ProjectContainer />
        <ContactContainer />
      </main>
    </Layout>
  );
};

export default Homepage;
