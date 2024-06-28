const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('northwind','root','Saibaba123456@',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:10000,
        acquire:30000,
    }
})
async function testConnection(){
  sequelize.authenticate()
  .then(()=>console.log("connection established"))
  .catch((err)=>console.error(err))
}
testConnection();