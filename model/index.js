const db = require('../config/db')
const Article = require('./article_model')
const Avis = require('./avis_model')
const User = require('./user_model')
const { ForeignKeyConstraintError } = require('sequelize')

Article.hasMany(t_avis, {ForeignKey :'articleId'})
Avis.belongsTo(t_article, {ForeignKey :'articleId'})
User.hasMany(Avis, {ForeignKey :'userId'});
Article.belongsTo(t_artisan, {ForeignKey :'articleId'});


module.exports = {
   db,
   Article,
   Avis,
   User, 
}