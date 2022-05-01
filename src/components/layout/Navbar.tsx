import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { currentUser, logout } from '../../features/auth/authSlice';
import useAuth from '../../hooks/useAuth';
const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);

  const guestLinks = (
    <>
      <li className="nav-item flex-item">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="nav-item flex-item">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    <>
      <li className="nav-item flex-item">Welcome {user && user.name}</li>

      <li className="nav-item flex-item">
        <NavLink to="/protected" state={{ from: location }}>
          Protected
        </NavLink>
      </li>
      <li className="nav-item flex-item" onClick={logoutUser}>
        Logout
      </li>
    </>
  );

  return (
    <nav className="main-nav flex-item">
      <ul className="nav-container">
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
