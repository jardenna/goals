import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import type { User } from '../features/auth/authSlice'; // Explicit import of the User type
import { currentUser, selectUser } from '../features/auth/authSlice';

const useAuth = (): {
  isAuthenticated: boolean;
  isError: any;
  isLoading: boolean;
  user: User | null;
} => {
  const dispatch = useAppDispatch();
  const { user, isLoading, isError, isAuthenticated } =
    useAppSelector(selectUser);
  const isCurrentUserFetched = useRef(false);

  useEffect(() => {
    if (!isCurrentUserFetched.current) {
      dispatch(currentUser());
      isCurrentUserFetched.current = true;
    }
  }, []);

  return { user, isLoading, isError, isAuthenticated };
};

export default useAuth;
