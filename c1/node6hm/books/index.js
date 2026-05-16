const { getBooks, addBook } = require("./books");

async function main() {
  console.log("START");

  const booksBefore = await getBooks();
  console.log("Books before:", booksBefore);

  const newBook = {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    year: 1999
  };

  await addBook(newBook);
  console.log("Book added");

  const booksAfter = await getBooks();
  console.log("Books after:", booksAfter);
}

main();