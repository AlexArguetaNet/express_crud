const express = require('express');
const main_router = require('./routers/main');
const order_router = require('./routers/order');
require('./database/index');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use('/main', main_router);
app.use('/order', order_router);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});