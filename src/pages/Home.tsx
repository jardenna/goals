import { FC } from 'react';

interface HomeProps {
  title: string;
}
const Home: FC<HomeProps> = ({ title }) => (
  <article>
    <h1>{title}</h1>
  </article>
);
export default Home;
