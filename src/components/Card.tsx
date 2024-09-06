import { FC } from 'react';

interface CardProps {
  content: string;
  title: string;
}

const Card: FC<CardProps> = ({ content, title }) => (
  <section className="card">
    <h2>{title}</h2>
    {content}
  </section>
);

export default Card;
