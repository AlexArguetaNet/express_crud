const { Router } = require('express');
const controller = require('../controllers/order');

const router = Router();

router.get('/new', controller.new_order);
router.post('/add_order', controller.add_order);
router.get('/view', controller.get_orders);

module.exports = router;