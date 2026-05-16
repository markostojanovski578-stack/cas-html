const { read, write } = require("./read-write");


const getBooks = () => {
  return read();
};


const addBook = async (bookData) => {
  let books = await read();
  books.push(bookData);
  await write(books);
};


const deleteBook = async (bookIndex) => {
  let books = await read();
  books = books.filter((book, index) => index !== bookIndex);
  await write(books);
};


const editBook = async (bookIndex, bookData) => {
  let books = await read();

  books = books.map((book, index) => {
    if (index === bookIndex) {
      return {
        ...book,
        ...bookData,
      };
    }
    return book;
  });

  await write(books);
};

module.exports = {
  getBooks,
  addBook,
  deleteBook,
  editBook,
};