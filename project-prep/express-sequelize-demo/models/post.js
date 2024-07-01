const {DataTypes } = require('sequelize')
const { FOREIGNKEYS } = require('sequelize/lib/query-types')

module.exports = (sequelize) => {
  const Post= sequelize.define("Post",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
  })
  // Associations
  Post.associate = models => {
    models.User.hasMany(Post,{foreignKey:"userid"});
    Post.belongsTo(models.User)
  }

  return Post
}