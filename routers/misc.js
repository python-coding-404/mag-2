var express = require('express');
var router = express.Router();

router.get("/c", (req,res) => {
    res.render("calculater")
})
  
  
router.all('/secret', (req, res, next) => {
    res.send('lol')
    next() // pass control to the next handler
})
router.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})
module.exports = router;