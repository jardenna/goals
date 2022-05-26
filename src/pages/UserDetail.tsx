import { FC } from 'react';
import { useParams } from 'react-router-dom';
interface UserDetailProps {}
const UserDetail: FC<UserDetailProps> = () => {
  let params = useParams();

  return <p>User {params.id} detail</p>;
};
export default UserDetail;
