import express from 'express'
import { createBook, getAllBooks } from '../controllers/bookController.js';

const bookRouter = express.Router();

// CREATE NEW BOOK
bookRouter.post('/create', createBook)

// GET ALL BOOKS
bookRouter.get('/all', getAllBooks)

export default bookRouter;