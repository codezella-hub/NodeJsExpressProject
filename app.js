const express = require('express');

var http = require('http');
const mongo = require('mongoose');
const db = require('./config/db.json')
const userRoute = require('./routes/user')

mongo
.connect(db.url)
.then(console.log('database connected ...'))
.catch((err)=>{
 console.log(err);
})

var app = express();
app.use(express.json());
app.use('/user', userRoute);
const server = http.createServer(app,console.log('server run'));
server.listen(3000);


module.exports = app