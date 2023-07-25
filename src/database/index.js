const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/my_db')
.then(() => {console.log('App has connected to mongodb!')})
.catch((err) => {console.log(err)});