import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import routes, { IRoute } from '../../configs/routes';

function Router() {
  return (
    <Switch>
      {routes.map((value: IRoute) => (
        <Route
          key={value.path}
          path={value.path}
          component={value.component}
        />
      ))}
    </Switch>
  );
}

export default Router;
