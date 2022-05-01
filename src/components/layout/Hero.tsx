import { FC } from 'react';
import { Link } from 'react-router-dom';
interface HeroProps {}
const Hero: FC<HeroProps> = () => {
  return (
    <section className="hero flex">
      <div className="logo container">
        <Link to="/login" className="hero-link">
          My<span className="rotate">g</span>oals
        </Link>
      </div>
    </section>
  );
};
export default Hero;
