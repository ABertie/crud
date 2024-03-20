import { Schema, model, models, Types } from "mongoose"

const BooksModel = mongoose.model('Book', new Schema({ 
    title: String,
    author: String,
}));

export default BooksModel
