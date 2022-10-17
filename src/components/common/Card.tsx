import { FC } from 'react';
interface CardProps {
  content: string;
}
const Card: FC<CardProps> = ({ content }) => {
  return (
    <section className="card">
      {content}
      <span className="btn-close">+</span>
    </section>
  );
};
export default Card;
