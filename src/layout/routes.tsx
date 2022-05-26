import { RouteObject } from 'react-router-dom';

import Home from '../pages/Home';

import PageNotFound from '../pages/PageNotFound';

let routes: RouteObject[] = [
  {
    path: '/',
    element: <Home title="home" />,
    children: [
      { index: true, element: <Home title="home" /> },

      { path: '*', element: <PageNotFound /> },
    ],
  },
];

export default routes;
