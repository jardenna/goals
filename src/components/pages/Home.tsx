import { FC } from 'react';

interface HomeProps {
  id: string;
  title: string;
}
const Home: FC<HomeProps> = ({ id, title }) => (
  <article>
    <h1>{title}</h1>
  </article>
);
export default Home;
