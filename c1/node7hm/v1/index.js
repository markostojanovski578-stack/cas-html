const {
  getBooks,
  addBook,
  deleteBook,
  editBook,
} = require("./books");

async function main() {
  const before = await getBooks();
  console.log("Before:", before);

  await addBook({
    title: "New Book",
    author: "Someone",
    year: 2025,
  });

  await deleteBook(1);

  await editBook(0, { year: 2020 });

  const after = await getBooks();
  console.log("After:", after);
}

main();