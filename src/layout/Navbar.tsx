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
    <nav className={`main-nav flex-item ${openNav ? 'open-nav' : ''}`}>
      <MenuBurger onClick={onToggleMenu} />
      <ul className="nav-container">
        <li className="nav-item flex-item">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
