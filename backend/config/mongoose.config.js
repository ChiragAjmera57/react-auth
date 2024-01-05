const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://native-todo:wAh8LE06hocIe9Tm@chiragajmera.rht24ui.mongodb.net/reactSocailAuth';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB via Mongoose');
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = connectToMongoDB;