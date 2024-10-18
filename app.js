//establishing a connection to mongodb
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book');

console.log('MongoDB URI:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {    // I have used .then here so the this code runs if there was a connection to mongodb
    console.log('Successfully connected to MongoDB');

// I have used here the async and await, so first the instance book is created
    async function addNewBook(title, author, pages, publishedDate, genres) {
        const newBook = new Book({
            title,
            author,
            pages,
            publishedDate,
            genres
        });

        try {
            const savedBook = await newBook.save();
            console.log('New book added:', savedBook);
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }
// after the async, I have used the await to create a data in the book
    await addNewBook(
        'Harry Potter',
        'Purav',
        180,
        new Date('2000-04-10'),
        ['Fiction', 'Adventure']
    );
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });