const order_model = require('../database/schemas/order');

// GET: Gets the form to add a new order
exports.new_order = (rew, res) => {
    res.render('order/new');
}

// POST (Async): Add new order to the database 
exports.add_order = async (req, res) => {
    
    // Create instancd of order_model
    new_order = new order_model(req.body);

    // Add other attributes
    new_order.created_at = new Date();

    // Add to the database
    await new_order.save()
    .then(() => {console.log('New order added!')})
    .catch((err) => {console.log(err)});

    res.redirect('/main/home');

}


// GET (Async): Gets the list of orders
exports.get_orders = async (req, res) => {

    // Get the list of order documents from MongoDB
    await order_model.find({})
    .then((p) => {

        // Pass orders list as parameter when rendering view
        res.render('order/view', {orders: p});
    })
    .catch((err) => {console.log(err)});

}


// GET: Gets the page to edit an order
exports.edit = (req, res) => {



}