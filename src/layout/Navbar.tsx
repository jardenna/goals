import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import MenuBurger from '../components/MenuBurger';
import { logout } from '../features/auth/authSlice';
import useAuth from '../hooks/useAuth';

type LocationProps = {
  state: {
    from: Location;
  };
};

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation() as LocationProps;
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated]);

  const [openNav, setOpenNav] = useState(false);

  const onToggleMenu = () => {
    setOpenNav((openNav) => !openNav);
  };
  const guestLinks = (
    <li className="nav-item flex-item">
      <NavLink to="/login">Login</NavLink>
    </li>
  );
  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    <>
      <li className="nav-item flex-item">
        <NavLink to="/protected">Protected</NavLink>
      </li>
      <li className="nav-item flex-item" onClick={logoutUser}>
        <NavLink to="/login">Logout</NavLink>
      </li>
    </>
  );

  // open-nav
  return (
    <nav className={`main-nav flex-item ${openNav ? 'open-nav' : ''}`}>
      {isAuthenticated && <span>Welcome {user?.name}</span>}
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
