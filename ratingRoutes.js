const express = require('express');
const router = express.Router();
const { ratePost } = require('../../controllers/ratingController');

router.post('/', ratePost);

module.exports = router;
