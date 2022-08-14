const express = require('express');
const router = express.Router();

router.use('/add-product',(req,res)=>{
    res.send('<form method="POST" action="/admin/product"> <input name="title" type="text"/> <button type="submit" > Add </button></form>');
})

//if we try to access it using get method we will be redirected to /
router.post('/product',(req,res)=>{
    console.log(req.body);
    res.send(`<p> ${req.body['title']} added`);
})

module.exports = router;