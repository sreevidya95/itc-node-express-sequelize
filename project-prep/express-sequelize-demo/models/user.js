const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const User = sequelize.define('User',{
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
     type:DataTypes.STRING,
     allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    }
  });

  return User;
}