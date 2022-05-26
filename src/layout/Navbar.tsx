import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuBurger from '../components/common/MenuBurger';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const onToggleMenu = () => {
    setOpenNav((openNav) => !openNav);
  };

  //open-nav
  return (
    <>
      <nav className={`main-nav ${openNav ? 'open-nav' : ''}`}>
        <MenuBurger onClick={onToggleMenu} />
        <ul className="nav-container">
          <li className="nav-item">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/teams">Teams</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/calendar">Calendar</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
