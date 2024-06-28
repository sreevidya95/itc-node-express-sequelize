const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize('test','root','Saibaba123456@',{
    host:'localhost',
    dialect:'mysql'
})
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
async function syncModel(){
    await User.sync()
    console.log("User modal created")
}
syncModel();
module.exports = User;