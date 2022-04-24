import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getGoals, reset, selectGoals } from '../../features/goals/goalSlice';
import useCurrentUser from '../../hooks/useCurrentUser';

const Protected = () => {
  const { goals, isError } = useAppSelector(selectGoals);

  const user = useCurrentUser();
  const dispatch = useAppDispatch();
  useEffect(() => {
    // if (isError) {
    //   console.log(goals);
    // }

    if (user.isAuthenticated) {
      dispatch(getGoals());
    } else {
      console.log(isError);
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch]);

  return <div>Protected</div>;
};

export default Protected;
