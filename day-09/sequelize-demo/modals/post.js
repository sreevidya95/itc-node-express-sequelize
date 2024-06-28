const {Sequelize,DataTypes, ForeignKeyConstraintError} = require('sequelize');
const sequelize = new Sequelize('test','root','Saibaba123456@',{
    host:"localhost",
    dialect:"mysql"
});
const Post= sequelize.define("Posts",{
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
        validate:{
            isNull:false
        }
    }
})
//defining associations
const User = require('./User');
User.hasMany(Post,{foreignKey:'userid'})
Post.belongsTo(User,{foreignKey:'userid'})

async function syncModels() {
    await sequelize.sync()
    console.log('Models were synchronized successfully.')
  }
  
  syncModels()