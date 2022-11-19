import { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';

interface CardProps {
  title: string;
  content: string;
  id: string;
}
const Card: FC<CardProps> = ({ content, title, id }) => {
  const dispatch = useAppDispatch();
  return (
    <section className="card">
      <h2>{title}</h2>
      {content}
      <span className="sr-only">Delete Goal</span>
      <span
        role="button"
        tabIndex={0}
        className="btn-close"
        // onClick={() => dispatch(deleteGoal(id))}
      />
    </section>
  );
};
export default Card;
