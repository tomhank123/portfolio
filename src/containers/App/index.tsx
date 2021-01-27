import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

import NotFoundPage from '@/containers/NotFoundPage';
import ArchivePage from '@/containers/ArchivePage';
import Homepage from '@/containers/HomePage';

import GlobalStyle from '@/styles/globalStyle';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Homepage} />
        <Route exact path={ROUTES.ARCHIVE} component={ArchivePage} />
        <Route path='' component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
