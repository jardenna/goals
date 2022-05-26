import { RouteObject } from 'react-router-dom';
import Login from '../pages/AuthPage';
import Home from '../pages/Home';
import { PageId } from '../types/types';

import PageNotFound from '../pages/PageNotFound';

import PrivateRoute from '../routes/PrivateRoute';
import Protected from '../pages/Protected';
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home title="home" />,
  },
  {
    path: 'login',
    element: <Login id={PageId.Login} title="Login" />,
  },
  {
    path: 'register',
    element: <Login id={PageId.Register} title="Register" />,
  },
  {
    path: 'protected',
    element: <Protected />,
    children: [{ path: 'protected', element: <PrivateRoute /> }],
  },

  { path: '*', element: <PageNotFound /> },
];
