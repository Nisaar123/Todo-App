const mongoose = require('mongoose') ;

mongoose.connect('mongodb+srv://nisaar:Nidsar@cluster0.ztmue.mongodb.net/users?retryWrites=true&w=majority') ;

const db = mongoose.connection ;
 //const db = 'mongodb+srv://nisar:<password>@cluster0.fll5p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
db.on('error' , console.error.bind(console , "error connecting to db")) ;

db.once('open' , function(){
    console.log('successfully connected to database')
}) ;