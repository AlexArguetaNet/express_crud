const { Router } = require('express');
const controller = require('../controllers/main');

const router = Router();

router.get('/home', controller.home)

module.exports = router;