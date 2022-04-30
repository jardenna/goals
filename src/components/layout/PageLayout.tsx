import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageId } from '../../types/types';
import Login from '../pages/AuthPage';
import Home from '../pages/Home';
import Protected from '../pages/Protected';
import PrivateRoute from '../routes/PrivateRoute';
import Header from './Header';

const PageLayout: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home id="home" title="home" />} />
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
        </Routes>
      </div>
    </>
  );
};
export default PageLayout;
