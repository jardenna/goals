import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
interface NewUserProps {
  title: string;
}

const users = [
  { user: 'User', id: 1 },
  { user: 'User', id: 2 },
  { user: 'User', id: 3 },
  { user: 'User', id: 4 },
  { user: 'User', id: 5 },
  { user: 'User', id: 6 },
  { user: 'User', id: 7 },
  { user: 'User', id: 8 },
];
const NewUser: FC<NewUserProps> = ({ title }) => {
  return (
    <div>
      {title}
      <p className="mb-4">New users:</p>

      {users.map((user) => (
        <div key={user.id}>
          <NavLink to={`${user.id}`}>User {user.user}</NavLink>
        </div>
      ))}
      <Outlet />
    </div>
  );
};
export default NewUser;
