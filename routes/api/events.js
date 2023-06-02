const express = require('express');
const { eventsHandler, addTweet } = require('../../controllers/tweets');

const router = express.Router();

router.get('/', eventsHandler);

router.post('/', addTweet);

module.exports = router;
