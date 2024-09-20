const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('../Routes/ProductRouter')
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send('PONG');
});

app.use(bodyparser.json());
app.use(cors())
app.use('/auth',AuthRouter)
app.use('/product',ProductRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})