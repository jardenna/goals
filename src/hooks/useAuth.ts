import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { currentUser, selectUser } from '../features/auth/authSlice';

const useAuth = () => {
  const { user, isLoading, isError, isAuthenticated } =
    useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return { user, isLoading, isError, isAuthenticated };
};
export default useAuth;
