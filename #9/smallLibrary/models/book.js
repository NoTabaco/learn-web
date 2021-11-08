const mongoose=require('mongoose');

const Schema=mongoose.Schema;  // constructor
// construct Scheme
const bookScheme=new Schema({
    title: {type: String, required: true},
    author: {type: [String], required: true},
    summary: {type: String, required: true}
}, {timestamps: true});

// create model
// note that the model name should be the singular form of the name of the collection
const Book = mongoose.model('book', bookScheme);

module.exports = Book;