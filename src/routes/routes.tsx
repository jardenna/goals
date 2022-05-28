import { RouteObject } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import AuthPage from '../pages/AuthPage';
import PageNotFound from '../pages/PageNotFound';
import Protected from '../pages/Protected';
import Users from '../pages/Users';
import { PageId } from '../types/types';
import PrivateRoute from './PrivateRoute';

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <PageLayout />,
    children: [
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
    ],
  },
];
