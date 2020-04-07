import { ConnectedComponent } from 'react-redux';

import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';
import Logout from '../components/Logout';

export interface IRoute {
  label: string;
  path: string;
  component: (() => JSX.Element) | (typeof Login) | ConnectedComponent<any, any>; // TODO fix static type
  isLoggedIn: boolean;
}

const routes: IRoute[] = [
  {
    label: 'Login',
    path: '/login',
    component: Login,
    isLoggedIn: false,
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    isLoggedIn: true,
  },
  {
    label: 'Settings',
    path: '/settings',
    component: Settings,
    isLoggedIn: true,
  },
  {
    label: 'Logout',
    path: '/logout',
    component: Logout,
    isLoggedIn: true,
  },
];

export default routes;
