import { FC, useState } from 'react';
interface ToggleProps {}

const Toggle: FC<ToggleProps> = () => {
  const [toggle, setToggle] = useState<any>({});

  const handleToggle = (e: any) => {
    const { id } = e.target;
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  };
  console.log(toggle);

  return (
    <div className="container">
      <div className="user-list">
        {!toggle.btn1 && <div>I am visible</div>}
        <button id="btn1" onClick={handleToggle}>
          {toggle.btn1 ? 'btn' : 'not'}
        </button>

        <div>
          {toggle.btn2 && <div>I am visible</div>}
          <button id="btn2" onClick={handleToggle}>
            {toggle.btn2 ? 'btn' : 'not'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
