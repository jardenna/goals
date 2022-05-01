import { FC } from 'react';

import { InputProps } from '../../../interfaces/form';

import Label from './Label';
import Error from '../../common/Error';

const Input: FC<InputProps> = ({
  type,
  name,
  inputIdentifier,
  placeholder,
  onChange,
  value,
  label,
  isRequired,
  error,
  onBlur,
  checked,
}) => (
  <div className="input-wrapper">
    <input
      type={type || 'text'}
      name={name}
      value={value !== null ? value : ''}
      id={inputIdentifier}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      className={error ? 'input-error' : ''}
      checked={checked}
    />
    <Label
      className={value && value !== '' ? 'top' : ''}
      htmlFor={'inputIdentifier'}
      isRequired={isRequired}
      label={label || ''}
    />

    {error && <Error text={error} />}
  </div>
);

export default Input;
