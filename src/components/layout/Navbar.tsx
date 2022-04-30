import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { currentUser, logout } from '../../features/auth/authSlice';
import useAuth from '../../hooks/useAuth';
const Navbar = () => {
  const { user, isAuthenticated } = useAuth();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);

  const guestLinks = (
    <>
      <li className="nav-item flex-item">
        <NavLink className="nav-item flex-item" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item flex-item">
        <NavLink className="nav-item flex-item" to="/register">
          Register
        </NavLink>
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
        <li className="nav-item flex-item">
          <NavLink to="/protected">Protected</NavLink>
        </li>
        <button className="btn-primary" onClick={logoutUser}>
          Logout
        </button>
      </li>
    </>
  );

  return (
    <nav className="main-nav flex-item">
      <ul className="nav-wrapper flex-container">
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
