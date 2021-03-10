/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'containers/Layout';
import Contact from 'components/Contact';
import Project from 'components/Project';
import Featured from 'components/Featured';
import Biography from 'components/Biography';
import Hero from 'components/Hero';
import Jobs from 'components/Jobs';

import Wrapper from './Wrapper';

export function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Duc Tran application homepage" />
      </Helmet>

      <Wrapper className="fill-height">
        <Hero />
        <Biography />
        <Jobs />
        <Featured />
        <Project />
        <Contact />
      </Wrapper>
    </Layout>
  );
}

export default HomePage;
