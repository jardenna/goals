import { RouteObject } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Protected from '../pages/Protected';
import Users from '../pages/Users';
import { PageId } from '../types/types';
import PrivateRoute from './PrivateRoute';

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home title="Home" />,
  },
  {
    path: '/login',
    element: <AuthPage id={PageId.Login} title="Login" />,
  },
  {
    path: '/register',
    element: <AuthPage id={PageId.Register} title="Register" />,
  },
  { path: '*', element: <PageNotFound /> },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      { path: '/protected', element: <Protected /> },
      { path: '/users', element: <Users /> },
    ],
  },
];
