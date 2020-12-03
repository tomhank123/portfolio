import routes from '@/routes';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFoundContainer } from './containers';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} exact path={route.path} component={route.component} />
          ))}
          <Route component={NotFoundContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
