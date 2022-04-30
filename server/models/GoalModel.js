const mongoose = require('mongoose');
const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'noGoal'],
    },
  },
  { timestamps: true }
);

//Static method to add a goal
goalSchema.statics.login = async function (text) {
  if (text === '') {
    throw Error('noGoal');
  }

  throw Error('noUser');
};

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
