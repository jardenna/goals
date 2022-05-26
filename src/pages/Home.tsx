import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

interface HomeProps {
  title: string;
}

const Home: FC<HomeProps> = ({ title }) => {
  return (
    <article>
      <h1>{title}</h1>
      <nav className="main-nav ">
        <ul className="nav-container">
          <li className="nav-item">
            <NavLink to="overview">Overview</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="new-user">New user</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="sales">Sales</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </article>
  );
};
export default Home;
