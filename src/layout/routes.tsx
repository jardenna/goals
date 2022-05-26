import { RouteObject } from 'react-router-dom';
import Login from '../pages/AuthPage';
import Home from '../pages/Home';
import { PageId } from '../types/types';

import PageNotFound from '../pages/PageNotFound';

import PrivateRoute from '../routes/PrivateRoute';
let routes: RouteObject[] = [
  {
    path: '/',
    element: <Home title="home" />,
    children: [
      { index: true, element: <Home title="home" /> },
      {
        path: '/login',
        element: <Login id={PageId.Login} title="Login" />,
      },
      {
        path: '/register',
        element: <Login id={PageId.Register} title="Register" />,
      },
      {
        path: '/protected',
        element: <PrivateRoute />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
];

export default routes;
