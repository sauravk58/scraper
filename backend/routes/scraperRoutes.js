const express = require('express');
const { scrapeYouTube } = require('../controllers/youtubeController');
const { scrapeInstagram } = require('../controllers/instagramController');

const router = express.Router();

router.post('/youtube', scrapeYouTube);
router.post('/instagram', scrapeInstagram);

module.exports = router;