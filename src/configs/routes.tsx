import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';
import Logout from '../components/Logout';

export interface IRoute {
  label: string,
  path: string,
  component: (() => JSX.Element) | (typeof Login), // TODO fix static type
  auth?: boolean,
}

const routes: IRoute[] = [
  {
    label: 'Login',
    path: '/login',
    component: Login,
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    auth: true,
  },
  {
    label: 'Settings',
    path: '/settings',
    component: Settings,
    auth: true,
  },
  {
    label: 'Logout',
    path: '/logout',
    component: Logout,
  },
];

export default routes;
