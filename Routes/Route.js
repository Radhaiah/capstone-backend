const express=require('express');
const { Dayplan } = require('../controllers/fuctionofdayplan');
const {createUser,loginUser} = require('../controllers/fuctionoflogin')
const router=express.Router();
router.route('/createUser').post(createUser);
router.route('/Dayplan').post(Dayplan);
router.route('/login').get(loginUser);
module.exports = router;