const localStorageMiddleware = ({ getState }: any) => {
  return (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);
    localStorage.setItem(
      'isAuthenticated',
      JSON.stringify(getState().auth.isAuthenticated)
    );
    return result;
  };
};

export default localStorageMiddleware;
