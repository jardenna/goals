import { FC } from 'react';
import { useAppSelector } from '../app/hooks';
import { selectToggle } from '../features/toggleElem/toggleSlice';

interface ToggleProps {}

const Toggle: FC<ToggleProps> = () => {
  const toggled = useAppSelector(selectToggle);

  return (
    <div className="container">
      hello
      <div className="user-list">
        {!toggled.calendar && <div>I am visible</div>}

        <div>{toggled.btn2 && <div>So am I</div>}</div>
      </div>
    </div>
  );
};

export default Toggle;
