// do not edit this section
const book = {
  name: "Clean Code",
  author: "Robert C. Martin",
  category: "Cooking",
  isbn: {
    isbn10: "9780132350884",
    asin: "0132350882",
  },
  publisher: "Prentice Hall",
  dimensions: "10x12x2",
};

const isbn13 = "978-0132350884";

// TODO: write code in this section to pass the tests. You will need to add new code
// as well as modify some of the existing code

// Set this to the book name
const name = book.name;

// Set this to the isbn 10 value
const isbn10 = book.isbn.isbn10;

// Set category to Programming
book.category = "Programming";

// Adding pages
book.pages = 464;

// Adding isbn13 number
book.isbn.isbn13 = isbn13;

// Delete book dimensions
delete book.dimensions;

// Delete asin number
delete book.isbn.asin;

// Do not edit this exported object
module.exports = {
  name: name,
  isbn10: isbn10,
  book: book,
};
