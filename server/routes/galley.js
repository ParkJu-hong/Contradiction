const express = require('express');
const router = express.Router();

const galleryController = require('../controllers/gallery');

// test 용
router.post('/spring', galleryController.spring);

module.exports = router;