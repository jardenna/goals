import { FC } from 'react';

interface CardProps {
  content: string;
  id: string;
  title: string;
}

const Card: FC<CardProps> = ({ content, title, id }) => (
  <section className="card">
    <h2>{title}</h2>
    {content}

    <button type="button" className="btn-close" onClick={() => console.log(id)}>
      Klik
    </button>
  </section>
);

export default Card;
