const {DataTypes, UniqueConstraintError} = require('sequelize')
const db = require('./config/db')
// la table user
const Avis = db.define('t_avis',{
       note: {
        type  :  DataTypes.INTEGER,
        allowNull : false,
       },
        commentaire: {
        type  :  DataTypes.TEXT,
        allowNull : true,
       },
},
 {
  timesTemps : true, 
  });

  module.exports = Avis;