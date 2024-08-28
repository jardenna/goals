export interface ErrorObjState {
  email: string;
  password: string;
  name?: string;
  noUser?: string;
  password2?: string;
}

const errorObj = {
  name: '',
  email: '',
  password: '',
  password2: '',
  noUser: '',
};

export interface GoalErrorState {
  text: string;
}
export const goalErrObj = {
  text: '',
};

export default errorObj;
