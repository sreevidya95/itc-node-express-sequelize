const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('northwind','root','Saibaba123456@',{
    host:'localhost',
    dialect:'mysql'
});
async function testConnection(){
    await sequelize.authenticate()
    .then(()=>console.log("connection Established"))
    .catch((err)=>console.log(err))
}
testConnection();