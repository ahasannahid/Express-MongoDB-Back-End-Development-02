const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');
const subAdminController = require('../controllers/subAdminController');
const postController = require('../controllers/postController');

router.get('/create-user',userController.create);
router.get('/read-user',userController.read);
router.get('/update-user',userController.update);
router.get('/delete-user',userController.delete);

router.get('/create-admin',adminController.create);
router.get('/read-admin',adminController.read);
router.get('/update-admin',adminController.update);
router.get('/delete-admin',adminController.delete);


router.get('/create-subAdmin',subAdminController.create);
router.get('/read-subAdmin',subAdminController.read);
router.get('/update-subAdmin',subAdminController.update);
router.get('/delete-subAdmin',subAdminController.delete);

router.get('/create-post',postController.create);
router.get('/read-post',postController.read);
router.get('/update-post',postController.update);
router.get('/delete-post',postController.delete);


module.exports= router;