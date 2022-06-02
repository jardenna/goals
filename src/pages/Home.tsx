import { FC } from 'react';

import DocIcon from './Doc';

interface HomeProps {
  title: string;
}

const Home: FC<HomeProps> = ({ title }) => {
  return (
    <article>
      <h1>{title}</h1>
      <div className="doc">
        <a href="#">
          <DocIcon />
          Mit Document
        </a>
      </div>
    </article>
  );
};
export default Home;
