/* eslint-disable react/button-has-type */
import { FC } from 'react';

interface IButtons {
  className: string;
  btnText?: string | number;
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
