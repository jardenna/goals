import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import Header from './Header';
import Hero from './Hero';

import routeConfig from '../routes/routeConfig';

const PageLayout: FC = () => {
  const element = useRoutes(routeConfig);

  return (
    <article className="main-container flex">
      <Header />
      <Hero />
      <main className="flex-grow-1 container">{element}</main>
      <footer className="main-footer">
        <section className="container">
          © 2022 My Goal, All rights reserved.
        </section>
      </footer>
    </article>
  );
};
export default PageLayout;
