const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../img/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

const galleryController = require('../controllers/gallery');

// test 용
router.post('/spring/create', upload.single('img'), galleryController.springCreate);
router.get('/spring/read', galleryController.springRead);

module.exports = router;