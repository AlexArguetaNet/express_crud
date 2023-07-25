const mongoose = require('mongoose');

const order_schema = mongoose.Schema({

    order_id: {type: String, required: true},
    required_date: {type: String, required: true},
    created_at: {type: Date, required: true}

});

module.exports = mongoose.model('orders', order_schema);