const handleGoalErrors = (err) => {
  let errors = { text: '' };

  if (err.message === 'noGoal') {
    errors.password = 'Please fill out the goal field';
  }

  return errors;
};

module.exports = handleGoalErrors;
