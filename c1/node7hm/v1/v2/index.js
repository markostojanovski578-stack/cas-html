const express = require("express");

const {
  getAllBooks,
  getSingleBook,
  addBook,
  deleteBook,
  editBook,
} = require("./handler");

const app = express();

app.use(express.json());


app.get("/books", getAllBooks);
app.get("/books/:bookId", getSingleBook);
app.post("/books", addBook);
app.delete("/books/:bookIndex", deleteBook);
app.put("/books/:bookIndex", editBook);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});