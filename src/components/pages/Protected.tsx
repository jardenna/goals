import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getGoals, reset } from '../../features/goals/goalSlice';

const Protected = () => {
  const { goals, isError } = useAppSelector((state) => state.goals);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isError) {
      console.log('message');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch]);
  console.log(goals);

  return <div>Protected</div>;
};

export default Protected;
