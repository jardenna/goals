const handleGoalErrors = (err) => {
  let errors = { text: '' };

  if (err.errors.text.message === 'noGoal') {
    errors.text = 'Please fill out the goal field';
  }

  return errors;
};

module.exports = handleGoalErrors;
