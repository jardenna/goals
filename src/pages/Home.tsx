import { FC } from 'react';
import EmojiPicker from '../components/emojiPicker/Picker';

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
          <EmojiPicker onEmojiSelect={() => console.log(123)} />
          Mit Document
        </a>
      </div>
    </article>
  );
};
export default Home;
