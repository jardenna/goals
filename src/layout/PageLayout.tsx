import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import Page from '../pages/Page';

import PageNotFound from '../pages/PageNotFound';
import Footer from './Footer';

import Header from './Header';

const routes = [
  {
    path: '/dashboard',
    element: <Home title="Dashboard" />,
    children: [
      { path: 'overview', element: <p>Overview</p> },
      { path: 'new-user', element: <p>New users</p> },
      { path: 'sales', element: <p>sales</p> },
    ],
  },
  { path: '/teams', element: <Page title="Teams" /> },
  { path: '/projects', element: <Page title="Projects" /> },
  { path: '/calendar', element: <Page title="Calendar" /> },
  { path: '*', element: <PageNotFound /> },
];

const PageLayout: FC = () => {
  const element = useRoutes(routes);
  return (
    <article className="main-container flex">
      <Header />
      <main className="flex-grow-1">
        <section className="container">{element}</section>
      </main>

      <Footer />
    </article>
  );
};
export default PageLayout;
