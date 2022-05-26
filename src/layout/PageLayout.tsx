import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

import PageNotFound from '../pages/PageNotFound';

import Header from './Header';

const PageLayout: FC = () => (
  <article className="main-container flex">
    <Header />

    <main className="flex-grow-1 container">
      <Routes>
        <Route path="/" element={<Home title="home" />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
    <footer className="main-footer">
      <section className="container">
        © 2022 My Goal, All rights reserved.
      </section>
    </footer>
  </article>
);
export default PageLayout;
