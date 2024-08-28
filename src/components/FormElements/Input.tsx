import { FC } from 'react';
import { InputProps } from '../../interfaces/form';

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
      value={value}
      id={inputIdentifier}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      className={error ? 'input-error' : ''}
      checked={checked}
    />

    <label htmlFor={inputIdentifier} className={value ? 'input-has-value' : ''}>
      {label} {isRequired && <span className="required" />}
    </label>

    {error && <div>{error}</div>}
  </div>
);

export default Input;
