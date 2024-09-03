/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Card from '../components/Card';
import Form, { InputListProps } from '../components/FormElements/Form';
import {
  createGoals,
  getGoals,
  reset,
  selectGoals,
} from '../features/goals/goalSlice';

import useAuth from '../hooks/useAuth';
import useFormValidation from '../hooks/useFormValidation';

const Protected = () => {
  const { isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();
  const { goals, isError } = useAppSelector(selectGoals);
  const initialErrorText = isError ? isError.text : '';
  const initialValues = { text: '', title: '' };
  const [errorText, setErrorText] = useState(initialErrorText);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getGoals());
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const onSubmitGoals = () => {
    if (values.text === '' && isAuthenticated) {
      setErrorText('Please add a goal');
    }
    if (isAuthenticated) {
      dispatch(createGoals(values));
    }
  };

  const { values, onChange, onSubmit } = useFormValidation(
    initialValues,
    onSubmitGoals,
  );

  const inputs: InputListProps[] = [
    {
      name: 'title',
      placeholder: 'title',
      inputIdentifier: 'title',
      label: 'Title',
      isRequired: true,
      value: values.title,
      error: errorText,
    },
    {
      name: 'text',
      placeholder: 'text',
      inputIdentifier: 'text',
      label: 'Text',
      isRequired: true,
      value: values.text,
      error: errorText,
    },
  ];

  return (
    <article>
      <header>Protected</header>
      <Form
        inputs={inputs}
        onChange={onChange}
        btnText="Send"
        onSubmit={onSubmit}
      />

      <div className="card-container">
        {goals.map((goal) => (
          <Card
            key={goal._id}
            id={goal._id}
            content={goal.text}
            title={goal.title}
          />
        ))}
      </div>
    </article>
  );
};

export default Protected;
