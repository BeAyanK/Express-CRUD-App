var express = require('express');
var mongoose = require('mongoose');
var url = 'mongodb://localhost/DemoDB';

var app = express();

mongoose.connect(url, {useNewUrlParser:true});
var con = mongoose.connection;

con.on('open', () => {
    console.log('Connected...');
});

app.use(express.json());

var mainRouter = require('./routes/notes');
app.use('/notes', mainRouter);

app.listen(9000, () => {
    console.log('Server started');
});