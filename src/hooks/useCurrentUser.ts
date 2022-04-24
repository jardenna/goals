import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/auth/authSlice';

const useCurrentUser = () => {
  const { user, isLoading, isError, isAuthenticated } =
    useAppSelector(selectUser);

  return { user, isLoading, isError, isAuthenticated };
};
export default useCurrentUser;
