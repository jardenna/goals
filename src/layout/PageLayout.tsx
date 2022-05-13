import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageId } from '../types/types';
import Login from '../pages/AuthPage';
import Home from '../pages/Home';

import PageNotFound from '../pages/PageNotFound';
import Protected from '../pages/Protected';
import PrivateRoute from '../routes/PrivateRoute';
import Header from './Header';
import Hero from './Hero';

const PageLayout: FC = () => (
  <article className="main-container flex">
    <Header />
    <Hero />
    <main className="flex-grow-1 container">
      <Routes>
        <Route path="/" element={<Home title="home" />} />
        <Route element={<PrivateRoute />}>
          <Route path="/protected" element={<Protected />} />
        </Route>

        <Route
          path="/register"
          element={<Login id={PageId.Register} title="Register" />}
        />
        <Route
          path="/login"
          element={<Login id={PageId.Login} title="Login" />}
        />
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
