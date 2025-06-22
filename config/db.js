const mysql = require('mysql')
const ENV = require('./index')
const Sequelize = require('sequelize')

console.log('Initialisation de la connexion a mysql...');

const db = new Sequelize(ENV.DATABASE,ENV.USER,ENV.PASSWORD,{
   host: ENV.HOST,
   dialect: ENV.DIALECT,
   port : ENV.PORT_DATABASE,
   logging : false,
});

const connexion = async () => {
 try{
console.log('Vous etes dans votre base de donnee Mysql...');
await db.authenticate();
console.log('Connexion reuissit a Mysql');
}catch(error){
 console.error('erreur de connexion:', error.message);
}
}


connexion();

module.exports = db;