const express = require('express');
const router = express.Router();

const galleryController = require('../controllers/gallery');

// query로 season이 무엇인지 받기로 했음
router.get('/read', galleryController.springRead);


module.exports = router;