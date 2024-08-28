import { BlurEventType, ChangeInputType, FormEventType } from './events';

export interface FormProps {
  btnText: string;
  inputs: InputListProps[];
  onChange: (e: ChangeInputType) => void;
  onSubmit: (e: FormEventType) => void;
  btnVaiant?: string;
  className?: string;
  hidden?: boolean;
  onBlur?: (e: BlurEventType) => void;
  onClearAll?: () => void;
  showResetButton?: boolean;
}
export interface InputListProps {
  inputIdentifier: string;
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  error?: string;
  hidden?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  type?: string;
}
export interface InputProps extends InputListProps {
  onChange: (e: ChangeInputType) => void;
  onBlur?: (e: BlurEventType) => void;
}

export interface ILabel {
  className: string;
  htmlFor: string;
  label: string;
  isRequired?: boolean;
  text?: string;
}
