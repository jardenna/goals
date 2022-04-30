import { FC } from 'react';

interface HomeProps {
  title: string;
  id: string;
}
const Home: FC<HomeProps> = ({ id, title }) => {
  return (
    <article>
      <section>hello</section>
    </article>
  );
};

export default Home;
