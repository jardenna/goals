import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound: FC = () => (
  <article>
    <h1>Oops!</h1>
    <p>Page Not Found</p>
    <div className="flexGrow">
      <NavLink to="/">Visit Our Homepage</NavLink>
    </div>
  </article>
);

export default PageNotFound;
