const {DataTypes, UniqueConstraintError} = require('sequelize')
const db = require('./config/db')
const { defaultValueSchemable, underscoredIf } = require('sequelize/lib/utils')
// la table user
const User = db.define('t_artisan',{
    nom: {
        type  : DataTypes.STRING,
        allowNull : false,
       },
        prenom: {
        type  : DataTypes.STRING,
        allowNull : false,
       },
        password: {
        type  : DataTypes.STRING,
        allowNull : false,
       },
        categorie: {
        type  : DataTypes.STRING,
        allowNull : false,
       },
        site_web: {
        type  : DataTypes.STRING,
        allowNull : false,
       },
        active: {
        type  : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue : true
       },
        verifier: {
        type  : DataTypes.STRING,
        allowNull : false,
        defaultValue : false
       },
    specialite: {
        type  :  DataTypes.STRING,
        allowNull : false,
       },
    note: {
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
        mail: {
        type  : DataTypes.STRING,
        allowNull : false,
        Unique : true
       },
       role: {
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

  module.exports = User;