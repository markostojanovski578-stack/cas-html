const { read, write} = require("./read-write");

const getBooks = () => {
    return read();
};


const addBook = async (bookData) => {
    let books = await read();

    books.push(bookData);

    await write(books);

};


module.exports = {
    getBooks,
    addBook
};
