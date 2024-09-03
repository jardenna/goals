import { FC, Fragment } from 'react';
import {
  BlurEventType,
  ChangeInputType,
  FormEventType,
} from '../../interfaces/events';
import { InputListProps } from '../../interfaces/form';
import Button from '../Button';
import Input from './Input';

interface FormProps {
  btnText: string;
  inputs: InputListProps[];
  onChange: (e: ChangeInputType) => void;
  onSubmit: (e: FormEventType) => void;
  btnVaiant?: string;
  className?: string;
  onBlur?: (e: BlurEventType) => void;
  onClearAll?: () => void;
  showResetButton?: boolean;
}

const Form: FC<FormProps> = ({
  btnVaiant = 'primary',
  btnText,
  onSubmit,
  className,
  inputs,
  onChange,
  onClearAll,
  showResetButton,
  onBlur,
}) => (
  <form onSubmit={onSubmit} noValidate className={className}>
    {inputs.map((input) => (
      <Fragment key={input.inputIdentifier}>
        {!input.hidden && (
          <Input
            type={input.type}
            name={input.name}
            value={input.value}
            inputIdentifier={input.inputIdentifier}
            label={input.label}
            isRequired={input.isRequired}
            error={input.error}
            onChange={onChange}
            checked={input.checked}
            onBlur={onBlur}
          />
        )}
      </Fragment>
    ))}

    <footer className="form-footer">
      <Button type="submit" className={`btn-${btnVaiant}`} btnText={btnText} />
      {showResetButton && (
        <Button type="reset" btnText="Clear" onClick={onClearAll} />
      )}
    </footer>
  </form>
);
export default Form;
