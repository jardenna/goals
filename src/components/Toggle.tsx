import { FC, useState } from 'react';
interface ToggleProps {}

const Users = [
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
];

const Toggle: FC<ToggleProps> = () => {
  const [toggle, setToggle] = useState<any>({});

  const toggleFunction = (id: number) => {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  };

  return (
    <div className="container">
      <div className="user-list">
        {Users.map((user) => (
          <li key={user.id} className="user">
            <button onClick={() => toggleFunction(user.id)}>Button</button>

            {toggle[user.id] && <span>text to toggle for {user.id}</span>}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Toggle;
