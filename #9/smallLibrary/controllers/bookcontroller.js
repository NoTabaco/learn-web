const Book = require("../models/book");

const book_index = (req, res) => {
    Book.find().sort({createdAt:-1})
    .then(result=>{
        res.render('index', {title:"홈 페이지", books: result});
    })
    .catch(err=>{
        console.log(err);
    })
}

const book_details = (req, res) => {
    const id = req.params.id;
    Book.findById(id)
    .then((result)=>{
        res.render('details', {title:"책 상세 정보", book: result});
    })
    .catch((err) => {
        console.log(err);
    })
}

const book_create_get = (req, res) => {
    res.render('create', {title:"책 추가"});
}

const book_create_post = (req, res) => {
    const abook = new Book(
        {
            title: req.body.title,
            author: req.body.author.split(" "),
            summary: req.body.summary
        }
    );
    abook.save()
    .then((result) => {
        res.redirect("/books");
    })
    .catch((err) => {
        console.log(err);
    })
}

const book_delete = (req, res) => {
    const id=req.params.id;
    Book.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/books'});
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    book_index,
    book_details,
    book_create_get,
    book_create_post,
    book_delete
}