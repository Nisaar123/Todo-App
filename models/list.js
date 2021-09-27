const mongoose = require('mongoose') ;

const listSchema = new mongoose.Schema({
    discription : {
        type : String ,
        required : true 
    },
    preference : {
        type : String ,
        required : true 
    },
    Date : {
        type : Date ,
        required : true 
    }
}) ;


const List = mongoose.model("List" , listSchema) ;
module.exports = List ;