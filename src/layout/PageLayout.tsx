import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

import PageNotFound from '../pages/PageNotFound';
import Footer from './Footer';

import Header from './Header';

const PageLayout: FC = () => (
  <article className="main-container flex">
    <Header />
    <main className="flex-grow-1">
      <section className="container">
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
    </main>

    <Footer />
  </article>
);
export default PageLayout;
