/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import fa from 'utils/fontAwesome';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'containers/Footer';
import Header from 'components/Header';
import Email from 'components/Email';

import GlobalStyle from '../../global-styles';

fa.init();

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Duc Tran" defaultTitle="Duc Tran">
        <meta name="description" content="A portfolio application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Email />
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
