console.log('Demarage du server...');
const express = require('express')
var app = express()
const ENV = require('./config');
const db = require('./config/db');

// const {db} = require('./model');


// app.use('/',indexRouter);
// app.get("/",(req,res)=>{
//   res.render("login");
// });
// importation des routes
// port
const port = ENV.port || 3310;
// middlewere
// prefixes
// server

const startServer = async () => {
    try{
        await db.sync({force:false})
        console.log('La dabase synchronisee avec succes..')
         app.listen(port, ()=>{
            console.log('server en fonction sur http://localhost:$(port)');
         })
    }catch(error){
        console.error('erreur database :', error.message);
    }
}

startServer();

