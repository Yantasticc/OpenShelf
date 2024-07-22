import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true,
    },
    bookAuthor: {
        type: String,
        required: true,
    },
    bookCover: {
        type: String,
        required: true,
    },
    bookCategory: {
        type: String,
        required: true,
    },
    bookSource: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
})

// module.exports = mongoose.model('Book', bookSchema);
const Books = new mongoose.model('Books', bookSchema)
export default Books;
