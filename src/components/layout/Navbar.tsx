import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import useAuth from '../../hooks/useAuth';
import MenuBurger from '../common/MenuBurger';
const Navbar = () => {
  const { user, isAuthenticated } = useAuth();

  const dispatch = useAppDispatch();

  const [openNav, setOpenNav] = useState(false);

  const onToggleMenu = () => {
    setOpenNav((openNav) => !openNav);
  };
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
        <NavLink to="/protected">Protected</NavLink>
      </li>
      <li className="nav-item flex-item" onClick={logoutUser}>
        Logout
      </li>
    </>
  );
  //open-nav
  return (
    <nav className={`main-nav flex-item ${openNav ? 'open-nav' : ''}`}>
      <MenuBurger onClick={onToggleMenu} />
      <ul className="nav-container">
        <li className="nav-item flex-item">
          <NavLink to="/">Home</NavLink>
        </li>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
