const Todo = [
    {
        discription : "ABC" ,
        preference : "XYZ" ,
        Date : "123"
    } ,
    {
        discription : "ABC" ,
        preference : "XYZ" ,
        Date : "123"
    }
] ;

const home  = (req , res) => {
    console.log(req.body)
    return res.render('home' , {
        title : "TODO App" ,
        to_do : Todo
    }) ;
} ;



module.exports = home ;