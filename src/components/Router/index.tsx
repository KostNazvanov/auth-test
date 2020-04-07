import React from 'react';
import {
  Switch,
  Route, Redirect,
} from 'react-router-dom';
import { connect } from "react-redux";

import routes, { IRoute } from '../../configs/routes';
import { IState } from "../../reducers";

interface IRouterProps {
  isLoggedIn: boolean;
}

function Router(props: IRouterProps) {
  return (
    <Switch>
      {routes.map((value: IRoute) =>
        value.isLoggedIn === props.isLoggedIn && (
          <Route
            key={value.path}
            path={value.path}
            component={value.component}
          />
        ))
      }
      <Redirect to={props.isLoggedIn ? '/dashboard' : '/login'}/>
    </Switch>
  );
}

const mapStateToProps = (state: IState) => {
  const { isLoggedIn } = state;
  return { isLoggedIn };
};

export default connect(mapStateToProps)(Router);
