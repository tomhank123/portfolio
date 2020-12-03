import routes from '@/routes';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFoundPage } from '@/pages';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} exact path={route.path} component={route.component} />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
