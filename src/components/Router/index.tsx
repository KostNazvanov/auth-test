import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Empty, Card } from 'antd';

import routes, { IRoute } from '../../configs/routes';
import { mapLoggedToProps } from '../../helpers/utils';

interface IRouterProps {
  isLoggedIn: boolean;
}

function Router(props: IRouterProps) {
  return (
    <Switch>
      {routes.map((value: IRoute) =>
        (!value.isLoggedIn || props.isLoggedIn) && (
          <Route
            key={value.path}
            path={value.path}
            component={value.component}
          />
        ))
      }
      <Route path='/'>
        <Card>
          <Empty description="404 page not found. Missed the link or not logged in?"/>
          <br/>
          <Card.Meta description={
            <Link to='/login'>
              <Button
                type='primary'
                style={{ width: '100%' }}
              >
                Go to working page
              </Button>
            </Link>
          }/>
        </Card>
      </Route>
    </Switch>
  );
}

export default connect(mapLoggedToProps)(Router);
