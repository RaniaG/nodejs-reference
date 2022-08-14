const express = require('express');
const router = express.Router();

//this will not work as wildcard because its a get and it will do an exact match
//so order wont matter if its at the top or bottom
router.get('/',(req, res)=>{
    res.send('<h1> shop </h1>')
});

module.exports = router;