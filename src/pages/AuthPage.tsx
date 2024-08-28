import { FC, useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';

import useFormValidation from '../hooks/useFormValidation';

import { InputListProps } from '../interfaces/form';
import { PageProps } from '../interfaces/interfaces';
import PageId from '../types/types';

import Form from '../components/FormElements/Form';
import {
  blurErrors,
  clearErrors,
  login,
  register,
  reset,
} from '../features/auth/authSlice';
import useAuth from '../hooks/useAuth';
import { BlurEventType } from '../interfaces/events';

const AuthPage: FC<PageProps> = ({ id, title }) => {
  const { isError } = useAuth();
  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuth();
  const [passwordErr, setPasswordErr] = useState('');
  const onRegister = async () => {
    const equalPasswords = password === password2;

    if (equalPasswords) {
      dispatch(register(values));
    }
    if (!equalPasswords) {
      setPasswordErr('The password does not match');
    } else {
      setPasswordErr('');
    }
  };

  const onLogin = () => {
    dispatch(login(values));
  };

  const isLoginPage = id === PageId.Login;
  const callBackFn = isLoginPage ? onLogin : onRegister;
  const { values, onChange, onSubmit, onClearAll } = useFormValidation(
    initialState,
    callBackFn,
  );
  const { name, email, password, password2 } = values;
  useEffect(() => {
    dispatch(reset());
    dispatch(clearErrors());
  }, []);

  const inputs: InputListProps[] = [
    {
      name: 'name',
      placeholder: 'name',
      inputIdentifier: 'name',
      label: 'Name',
      isRequired: true,
      value: name,
      error: isError && isError.name,
      hidden: id === PageId.Login,
    },
    {
      type: 'email',
      name: 'email',
      inputIdentifier: 'email',
      placeholder: 'email',
      label: 'Email',
      isRequired: true,
      value: email,
      error: isError && isError.email,
    },

    {
      type: 'password',
      name: 'password',
      placeholder: 'password',
      inputIdentifier: 'password',
      label: 'Password',
      isRequired: true,
      value: password,
      error: isError && isError.password,
    },
    {
      type: 'password',
      name: 'password2',
      placeholder: 'Confirm password',
      inputIdentifier: 'password2',
      label: 'Confirm password',
      isRequired: true,
      value: password2,
      error: passwordErr,
      hidden: id === PageId.Login,
    },
  ];
  const onBlur = (e: BlurEventType) => {
    const { name } = e.target;
    dispatch(blurErrors(name));
  };

  return (
    <article>
      <h1>{title}</h1>
      {isError?.noUser}
      <Form
        inputs={inputs}
        onChange={onChange}
        btnText={isLoginPage ? 'Login' : 'Register'}
        onSubmit={onSubmit}
        onClearAll={onClearAll}
        onBlur={onBlur}
      />
      {!isAuthenticated && <NavLink to="/register">Register</NavLink>}
    </article>
  );
};

export default AuthPage;
