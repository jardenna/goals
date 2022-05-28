import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Hero from './Hero';

const PageLayout: FC = () => (
  <article className="main-container flex">
    <Header />
    <Hero />
    <main className="flex-grow-1 container">
      <Outlet />
    </main>
    <footer className="main-footer">
      <section className="container">
        © 2022 My Goal, All rights reserved.
      </section>
    </footer>
  </article>
);
export default PageLayout;
