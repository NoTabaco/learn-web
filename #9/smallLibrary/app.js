const express = require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const bookRouter = require("./routers/bookrouters");

//mongoDB connection string
const dbURL="mongodb+srv://webprogrammer:webpgm1234@cluster0.a3hbj.mongodb.net/WebDB?retryWrites=true&w=majority"
// create express app
const app = express();
app.set('view engine', 'ejs');
//app.set('views', 'newFolder');

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>{
    console.log("connected to DB:");
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
});
// listen for reqeust

app.use(morgan('tiny'));
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}));

// respond to requests
app.get("/", (req, res) => {
    res.redirect("/books");
});

app.get("/about", (req, res)=>{
    res.render('about', {title:"소개"});
});

app.use('/books', bookRouter);

// default(error case)
app.use((req, res)=>{
    res.status(404).render("error", {title:"페이지 오류"});
});