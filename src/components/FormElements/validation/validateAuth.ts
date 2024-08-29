import { KeyValuePair } from '../../../interfaces/interfaces';
import { emailRegex } from '../../../utils/utils';

function validationAuth(values: KeyValuePair<string | number>) {
  const errors: KeyValuePair<string> = {};
  const { email, password, password2, name } = values;

  if (!name) {
    errors.name = 'Please enter Your name';
  }

  if (!password) {
    errors.password = 'Please enter Your password';
  }

  if (password2 !== password) {
    errors.password2 = 'The passwords does not match';
  }

  // Email Errors
  if (!email) {
    errors.email = 'Please enter Your email';
  } else if (!emailRegex.test(email as string)) {
    errors.email = 'Please enter a valid email';
  }

  return errors;
}

export default validationAuth;
