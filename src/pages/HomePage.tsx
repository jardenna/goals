import { FC } from 'react';

interface HomeProps {
  title: string;
}

const Home: FC<HomeProps> = ({ title }) => (
  <article>
    <img src="images/icon.jpg" alt="" />
    <h1>{title}</h1>
  </article>
);

export default Home;
