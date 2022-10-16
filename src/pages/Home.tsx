import { FC } from 'react';
import Icon from '../../public/images/icon.jpg';

interface HomeProps {
  title: string;
}

const Home: FC<HomeProps> = ({ title }) => {
  return (
    <article>
      <img src={Icon} alt="" />
      <h1>{title}</h1>
    </article>
  );
};
export default Home;
