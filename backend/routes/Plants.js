const express = require('express');
const router = express.Router();


const { addplants,getAllplants,getOneplants ,updateplants, deliteplants} = require('../controllers/Plants');


router.get('/getall',getAllplants)
router.post('/add',addplants)
router.get("/get/:id",getOneplants)
router.put('/put/:id',updateplants)
router.delete("/delite/:id",deliteplants)

module.exports = router;