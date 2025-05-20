const express = require('express');
const router = express.Router();

const { addtypes,getAlltypes,getOnetypes ,UPDATEtypes, delitetypes} = require('../controllers/types')


router.get('/getall', getAlltypes)
router.post('/add',addtypes)
router.get("/get/:id",getOnetypes)
router.put('/put/:id',UPDATEtypes)
router.delete("/delite/:id", delitetypes)

module.exports = router;