import { Link } from 'react-router-dom';
import Navbar from './Navbar';

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
