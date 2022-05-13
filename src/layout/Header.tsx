import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex">
    <div className="container flex">
      <div className="logo">
        <Link to="/login">
          <span className="rotate">g</span>
        </Link>
      </div>
      <Navbar />
    </div>
  </header>
);

export default Header;
