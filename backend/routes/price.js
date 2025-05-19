const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllPrices, updatePrice} = require('../controllers/price');

/// POSTS ROUTES ///

//GET request to fetch all comments for one specific post.
router.get('/getAll', getAllPrices);
// router.get('/get/:id', getOneprice);
// POST request for adding a new comment.

// router.post('/add', addprice);
// router.delete('/de/:id', deletprice)
router.put('/:update', updatePrice)


module.exports = router;