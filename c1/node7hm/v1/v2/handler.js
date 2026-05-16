const { read, write } = require("../read-write");


const getAllBooks = async (req, res) => {
  const books = await read();
  return res.status(200).send(books);
};


const getSingleBook = async (req, res) => {
  const books = await read();

  const book = books.find(
    (_, index) => index === Number(req.params.bookId)
  );

  return res.status(200).send(book);
};


const addBook = async (req, res) => {
  const books = await read();
  books.push(req.body);
  await write(books);

  return res.status(200).send("Book added!");
};


const deleteBook = async (req, res) => {
  let books = await read();
  const index = Number(req.params.bookIndex);

  books = books.filter((_, i) => i !== index);
  await write(books);

  return res.status(200).send("Book deleted!");
};


const editBook = async (req, res) => {
  let books = await read();
  const index = Number(req.params.bookIndex);

  books = books.map((book, i) => {
    if (i === index) {
      return {
        ...book,
        ...req.body,
      };
    }
    return book;
  });

  await write(books);

  return res.status(200).send("Book updated!");
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  deleteBook,
  editBook,
};