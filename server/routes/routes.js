const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const home = require('../controllers/homeController');
const login = require('../controllers/loginController');
const signup = require('../controllers/registerController');
const clubpost = require('../controllers/postController');
const contactus = require('../controllers/contactusController');
const signup = require('../controllers/registerController');
const clubpost = require('../controllers/postController');
const contactus = require('../controllers/contactusController');

router.post('/auth/register', signup);
router.post('/auth/login',login);
router.get('/clubpost/', auth, clubpost);
router.post('/clubpost/', auth, clubpost);
router.put('/clubpost/:id', auth,post );
router.get('/clubpost/:id', auth,post );
router.delete('/clubpost/:id', auth,post);
router.put('/account/:userid', auth,account);
router.get('/contactus', auth, contactus);
router.get('/notice', auth, notice);
router.get('/opportunities', auth, opportunities);


module.exports = router;
