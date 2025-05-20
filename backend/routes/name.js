const express = require('express');
const router = express.Router();


const { addname,getAllname,getOnename ,UPDATEname, delitename} = require('../controllers/name');


router.get('/getall',getAllname)
router.post('/add',addname)
router.get("/get/:id",getOnename)
router.put('/put/:id',UPDATEname)
router.delete("/delite/:id",delitename)

module.exports = router;