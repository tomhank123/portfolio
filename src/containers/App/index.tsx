import routes from '@/routes';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '@/containers/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
