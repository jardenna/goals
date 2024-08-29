import { KeyValuePair } from '../../../interfaces/interfaces';
import { emailRegex } from '../../../utils/utils';

function validateLogin(values: KeyValuePair<string | number>) {
  const errors: KeyValuePair<string> = {};
  const { email, password } = values;

  if (!password) {
    errors.password = 'Please enter Your password';
  }

  // Email Errors
  if (!email) {
    errors.email = 'Please enter Your email';
  } else if (!emailRegex.test(email as string)) {
    errors.email = 'Please enter a valid email';
  }

  return errors;
}

export default validateLogin;
