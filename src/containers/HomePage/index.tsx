import BiographyContainer from '@/containers/sections/biography';
import ContactContainer from '@/containers/sections/contact';
import FeaturedContainer from '@/containers/sections/featured';
import JobsContainer from '@/containers/sections/jobs';
import JumbotronContainer from '@/containers/sections/jumbotron';
import ProjectContainer from '@/containers/sections/project';
import Layout from '@/components/layout';
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
