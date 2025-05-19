const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllNames, updateName} = require('../controllers/name');

/// POSTS ROUTES ///

//GET request to fetch all comments for one specific post.
router.get('/getAll', getAllNames);
// router.get('/get/:id', getOnename);
// POST request for adding a new comment.

// router.post('/add', addname);
// router.delete('/de/:idtypes', deletname)
router.put('/:update', updateName)


module.exports = router;