import { ChangeEvent, FormEvent, MouseEvent } from 'react';

// Event types
export type ButtonEventType = MouseEvent<HTMLButtonElement>;
export type ChangeInputType = ChangeEvent<HTMLInputElement>;
export type BlurEventType = { target: { name: string } };
export type FormEventType = FormEvent<HTMLFormElement>;

// Component types
export type BtnType = 'submit' | 'reset' | 'button';
export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
