const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
    min: 1,
  },
  publishedDate: {
    type: Date,
    required: false,
  },
  genres: {
    type: [String],
    required: false,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
