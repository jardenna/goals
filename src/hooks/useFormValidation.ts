import { useEffect, useState } from 'react';
import { KeyValuePair } from '../interfaces/interfaces';
import {
  BlurEventType,
  ChangeInputType,
  FormEventType,
} from '../interfaces/types';

function useFormValidation<T extends string>(
  initialState: KeyValuePair<T>,
  callback: (values: KeyValuePair<T>) => void,
  validate?: (values: KeyValuePair<T>) => KeyValuePair<string>,
) {
  const [values, setValues] = useState<KeyValuePair<T>>(initialState);
  const [errors, setErrors] = useState<KeyValuePair<string>>({});
  const [touched, setTouched] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setTouched([]);
      }
      setIsSubmitting(false);
    }
  }, [errors]);

  useEffect(() => {
    if (validate) {
      const validationErrors = validate(values);
      const touchedErrors = touched.reduce<KeyValuePair<string>>((acc, key) => {
        if (validationErrors[key] && !acc[key]) {
          // eslint-disable-next-line no-param-reassign
          acc[key] = validationErrors[key];
        }
        return acc;
      }, {});
      setErrors(touchedErrors);
    }
  }, [touched, values, validate]);

  function onChange(event: ChangeInputType) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value as T,
    });
  }

  const onClearAll = () => {
    setValues(initialState);
  };

  const onBlur = (event: BlurEventType) => {
    const { name } = event.target;
    if (!touched.includes(name)) {
      setTouched([...touched, name]);
    }
  };

  const onSubmit = (event: FormEventType) => {
    event.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }

    setIsSubmitting(true);
    callback(values);
  };

  return {
    onSubmit,
    onChange,
    onBlur,
    values,
    errors,
    onClearAll,
  };
}

export default useFormValidation;
