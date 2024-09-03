import { FC } from 'react';
import { Link } from 'react-router-dom';

const Hero: FC = () => (
  <section className="hero flex">
    <div className="logo container">
      <Link to="/login" className="hero-link">
        My<span className="rotate">g</span>oals
      </Link>
    </div>
  </section>
);

export default Hero;
