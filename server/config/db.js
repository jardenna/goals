require('dotenv').config();
const mongoose = require('mongoose');

const db = `mongodb+srv://helle:ipe5DFJrcLPPud1K@cluster0-pimzw.mongodb.net/goals?retryWrites=true&w=majority`;

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
