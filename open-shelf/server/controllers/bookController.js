import BookDB from '../models/bookSchema.js';

// CREATE NEW BOOK
async function createBook(req, res) {
    try {
        const { bookName, bookAuthor, bookCover, bookCategory ,bookSource } = req.body;

        if (!bookName || !bookAuthor || !bookCover || !bookCategory || !bookSource) {
            return res.status(400).send({ message: "Enter all the required fields" });
        }

        // Check if book already exists
        const existingBook = await BookDB.findOne({ bookName });
        if (existingBook) {
            return res.status(400).send({ message: "Book already exists" });
        }

        const book = new BookDB({
            bookName,
            bookAuthor,
            bookCover,
            bookCategory,
            bookSource,
        });

        // Save the new book to the database
        const newBook = await book.save();

        res.status(201).send({ message: "User created successfully", user: newBook });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// GET ALL BOOKS
async function getAllBooks(req, res) {
    try {
        const books = await BookDB.find();
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export { createBook, getAllBooks};
