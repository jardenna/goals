import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Card from '../components/common/Card';
import Form from '../components/common/FormElements/Form';
import {
  createGoals,
  getGoals,
  reset,
  selectGoals,
} from '../features/goals/goalSlice';

import useAuth from '../hooks/useAuth';
import useFormValidation from '../hooks/useFormValidation';
import { InputListProps } from '../interfaces/form';

const Protected = () => {
  const { goals, isError } = useAppSelector(selectGoals);

  const initialErrorText = isError ? isError.text : '';

  const [errorText, setErrorText] = useState(initialErrorText);

  const { isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getGoals());
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const handleSubmitGoals = () => {
    if (values.text === '' && isAuthenticated) {
      setErrorText('Please add a goal');
    }
    if (isAuthenticated) {
      dispatch(createGoals(values));
    }
  };

  const initialValues = { text: '' };
  const { values, handleChange, handleSubmit } = useFormValidation(
    initialValues,
    handleSubmitGoals
  );

  const inputs: InputListProps[] = [
    {
      name: 'text',
      placeholder: 'text',
      inputIdentifier: 'text',
      label: 'Title',
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
        onChange={handleChange}
        btnText="Send"
        onSubmit={handleSubmit}
      />

      <div className="card-container">
        {goals.map((goal) => (
          <Card key={goal._id} content={goal.text} />
        ))}
      </div>
    </article>
  );
};

export default Protected;
