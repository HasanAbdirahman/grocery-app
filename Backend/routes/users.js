const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

router.post("/signup", userCtrl.registerUser);
router.post('/login', userCtrl.login)
router.post('/logout', userCtrl.logout);
router.post('/forgotpassword', userCtrl.forgotPassword);
router.post('/resetPassword', userCtrl.resetPassword);

module.export = router
