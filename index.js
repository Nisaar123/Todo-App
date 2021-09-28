
const express = require('express') ;
const port = process.env.port || 3000 ;

const db = require('./config/mongoose') ;
const List = require('./models/list') ;

const app = express() ;
const routes = express.Router() ;

app.set('view engine' , 'ejs') ;
app.set('views' , './view') ;
app.use(express.urlencoded()) ;




app.use('/' , require('./routes')) ;
app.use(express.static('assets')) ;

















app.listen(port , function(err){
    if(err){
        console.log('Error' , err) ;
    }
    console.log('server is running on port' , port) ;
}) ;