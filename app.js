const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//this middleware parses the request body into key value object
app.use(bodyParser.urlencoded());

//this always runs
app.use('/',(req,res,next)=>{
    console.log(req.url);
    next();
});

app.use('/add-product',(req,res)=>{
    res.send('<form method="POST" action="/product"> <input name="title" type="text"/> <button type="submit" > Add </button></form>');
})

app.use('/product',(req,res)=>{
    console.log(req.body);
    res.send(`<p> ${req.body['title']} added`);
})

//wildcard default matches all routes
app.use('/',(req, res)=>{
    res.send('<h1> hello from express </h1>')
});

app.listen(3000);


module.exports = app;

