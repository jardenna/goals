import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="container">
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
