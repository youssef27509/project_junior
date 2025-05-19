const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllTypes , updateType} = require('../controllers/types');

/// POSTS ROUTES ///

//GET request to fetch all comments for one specific post.
router.get('/getAll', getAllTypes);
// router.get('/get/:id', getOnetypes);
// POST request for adding a new comment.

// router.post('/add', addtypes);
// router.delete('/de/:id', delettypes)
router.put('/:update', updateType)


module.exports = router;