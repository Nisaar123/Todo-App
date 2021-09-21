const express = require('express') ;
const port = 3000 ;
const app = express() ;
const routes = express.Router() ;
app.use('/' , require('./routes')) ;













app.listen(port , function(err){
    if(err){
        console.log('Error' , err) ;
    }
    console.log('server is running on port' , port) ;
}) ;