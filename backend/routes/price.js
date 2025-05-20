const express = require('express');


const router = express.Router();
const { addprice,getAllprice,getOneprice ,UPDATEprice, deliteprice} = require('../controllers/price');
router.get('/getall', getAllPrice)
router.post('/add',addprice)
router.get("/get/:id",getOneprice)
router.put('/put/:id',UPDATEprice)
router.delete("/delite/:id", deliteprice)

module.exports = router;