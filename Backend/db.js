const mongoose = require('mongoose');

// Use environment variables for sensitive info (you can set it in a .env file)
const mongoURI = 'mongodb://localhost:27017/';

// Function to connect to MongoDB
const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
};

module.exports = connectToMongo;
