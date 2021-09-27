const express = require('express') ;
const { Mongoose } = require('mongoose');
const routes = express.Router() ;
const home = require('../controllers/homeController') ;
const List = require('../models/list');
console.log('routes has added') ;

const Todo = [] ;
routes.get('/' , (req,res) => {
    let todo = List.find((err, data)=>{
        return res.render('home' , {
            title : "TODO App" ,
            to_do : data
        }) ;
    });

    // List.deleteMany({if req.body.discription === },(err, data )=>{

    // })
    
}) ;
routes.post('/' , (req , res) => {
     console.log(req.body) ;
    // Todo.push(req.body) ;
    // return res.redirect('back') ;
    var obj = new List({
            discription : req.body.discription ,
            preference : req.body.preference ,
            Date : req.body.Date
    })
    obj.save();
    return res.redirect('back') ;
}) ;
routes.post('/delete-list' , (req , res) => {
    console.log(req.body) ;
    let arr = Object.keys(req.body) ;
    List.deleteMany({_id: arr}, (err, res) => {
        if(err) {
            console.log("deleted successfully")
        }
    })
     res.redirect('/') ;
}) ;

module.exports = routes ;