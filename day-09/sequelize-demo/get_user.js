const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('test','root','Saibaba123456@',{
    host:'localhost',
    dialect:'mysql'
});
 const User = require('./modals/User');
 async function getUser(){
     await sequelize.sync();
    const user = await User.findAll();
    console.log("all users",JSON.stringify(user, null, 2))
    await sequelize.close();
 }
 getUser();