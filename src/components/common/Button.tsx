/* eslint-disable react/button-has-type */
import { FC } from 'react';

interface IButtons {
  btnText?: string | number;
  className?: string;
  id?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset';
}

const Button: FC<IButtons> = (props) => (
  <button
    type={props.type || 'button'}
    id={props.id}
    className={props.className}
    onClick={props.onClick}
  >
    {props.btnText}
  </button>
);
export default Button;
