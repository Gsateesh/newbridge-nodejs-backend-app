const express = require('express');
const router = express.Router();
const { addService } = require('../controllers/controller.service');

router.post('/', addService);

module.exports = router
