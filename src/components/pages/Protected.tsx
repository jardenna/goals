import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  createGoals,
  getGoals,
  reset,
  selectGoals,
} from '../../features/goals/goalSlice';
import useCurrentUser from '../../hooks/useCurrentUser';
import useFormValidation from '../../hooks/useFormValidation';
import { InputListProps } from '../../interfaces/form';
import Form from '../common/FormElements/Form';

const Protected = () => {
  const { goals, isError } = useAppSelector(selectGoals);

  const user = useCurrentUser();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.isAuthenticated) {
      dispatch(getGoals());
    }
    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch]);
  console.log(goals);
  const handleSubmitGoals = () => {
    if (user.isAuthenticated) {
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

      <div>
        {goals.map((goal) => (
          <div key={goal._id}>{goal.text} </div>
        ))}
      </div>
    </article>
  );
};

export default Protected;
