import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';

export interface IRoute {
  label: string,
  path: string,
  component: () => JSX.Element,
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
];

export default routes;
