const express = require('express') ;
const routes = express.Router() ;
const home = require('../controllers/homeController') ;

console.log('routes has added') ;

routes.get('/' , home) ;

module.exports = routes ;