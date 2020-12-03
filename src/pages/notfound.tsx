import {
  LayoutContainer,
  NotFoundContainer
} from '@/containers';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <LayoutContainer>
      <Helmet title='Page Not Found' />
      <NotFoundContainer />
    </LayoutContainer>
  );
};

export default App;
