import { KeyValuePair } from '../interfaces/interfaces';

// Sort function
const sortFunction = (
  arr: KeyValuePair<any>[],
  key: string,
  desending = false,
) =>
  [...arr].sort((a, b) => {
    if (desending) {
      return a[key].localeCompare(b[key]);
    }
    return b[key].localeCompare(a[key]);
  });

export default sortFunction;
