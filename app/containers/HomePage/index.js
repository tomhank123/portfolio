/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from 'components/Hero';
import Biography from 'components/Biography';
import Wrapper from './Wrapper';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Duc Tran application homepage" />
      </Helmet>
      <Wrapper className="fill-height">
        <Hero />
        <Biography />
      </Wrapper>
    </article>
  );
}

export default HomePage;
