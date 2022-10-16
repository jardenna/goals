require('dotenv').config();
const mongoose = require('mongoose');

const db =
  `mongodb+srv://${process.env.CALLED_NAME}:${process.env.API_KEY}@cluster0.pimzw.mongodb.net/goals?retryWrites=true&w=majority` ||
  'mongodb://localhost/${ process.env.CALLED_NAME}';
const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.info('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
