const {DataTypes, UniqueConstraintError} = require('sequelize')
const db = require('./config/db')
const { defaultValueSchemable, underscoredIf } = require('sequelize/lib/utils')
// la table user
const Article = db.define('t_article',{
    nom: {
        type  : DataTypes.STRING,
        allowNull : false,
        unique : true
       },
       description: {
        type  : DataTypes.TIME,
        allowNull : false,
       },
       prix: {
        type  : DataTypes.FLOAT,
        allowNull : false,
       },
        verifier: {
        type  : DataTypes.STRING,
        allowNull : false,
        defaultValue : false
       },
    specialitee: {
        type  :  DataTypes.STRING,
        allowNull : false,
       },
   photo: {
        type  : DataTypes.JSON,
        allowNull : true,
       },
        stock: {
        type  : DataTypes.INTEGER,
        allowNull : false,
       },
        ville: {
        type  :  DataTypes.STRING,
        allowNull : false,
       },
       A_propos: {
        type  :  DataTypes.STRING,
        allowNull : false,
       },
        categorie: {
        type  : DataTypes.STRING,
        allowNull : false,
       },
       marque: {
        type  : DataTypes.STRING,
        allowNull : false,
        defaultValue : 'user',validate:
        {
        isIn :[('user','moderateur','admin')]
       }
       }
},
 {
  timesTemps : true, 
  underscored : true,
  });

  module.exports = Article;