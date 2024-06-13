const express = require('express');
const app = express();
const path=require('path');
const cookies = require('cookie-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userRouter = require('./routes/indexRoute');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(cookies());


app.use('/',userRouter)

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });
app.listen(3000,function(){
console.log('server is running on port 3000');
});